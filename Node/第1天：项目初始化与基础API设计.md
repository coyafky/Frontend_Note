为了帮助您在接下来的3天内高效地开发后端部分，我将提供一个详细的步骤指南，包括项目初始化、API设计和安全性配置。我们还将创建一个基本的文件夹结构，并编写符合RESTful API规范的接口文档。

### 第1天：项目初始化与基础API设计

#### 1. 项目初始化

1. **创建项目目录**：
   ```bash
   mkdir second-hand-books-backend
   cd second-hand-books-backend
   ```

2. **初始化 Node.js 项目**：
   ```bash
   npm init -y
   ```

3. **安装必要的依赖**：
   ```bash
   npm install express mongoose jsonwebtoken cors dotenv
   npm install --save-dev typescript @types/node @types/express @types/mongoose @types/jsonwebtoken @types/cors ts-node-dev
   ```

4. **创建 TypeScript 配置文件 `tsconfig.json`**：
   ```json
   {
     "compilerOptions": {
       "target": "ES6",
       "module": "commonjs",
       "outDir": "./dist",
       "rootDir": "./src",
       "strict": true,
       "esModuleInterop": true
     }
   }
   ```

5. **创建项目基本结构**：
   ```
   second-hand-books-backend/
   ├── src/
   │   ├── config/
   │   ├── controllers/
   │   ├── models/
   │   ├── routes/
   │   ├── middleware/
   │   ├── app.ts
   │   └── server.ts
   ├── .env
   ├── tsconfig.json
   └── package.json
   ```

6. **配置 Express 应用**：
   - `src/app.ts`：
     ```typescript
     import express from 'express';
     import mongoose from 'mongoose';
     import cors from 'cors';
     import dotenv from 'dotenv';
     
     dotenv.config();
     
     const app = express();
     app.use(express.json());
     app.use(cors());
     
     mongoose.connect(process.env.MONGO_URI as string)
       .then(() => console.log('MongoDB connected'))
       .catch(err => console.error(err));
     
     export default app;
     ```

   - `src/server.ts`：
     ```typescript
     import app from './app';
     
     const PORT = process.env.PORT || 5000;
     
     app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
     });
     ```

7. **配置环境变量 `.env`**：
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

#### 2. 基础 API 设计

1. **用户模型 `src/models/User.ts`**：
   ```typescript
   import mongoose from 'mongoose';
   
   const userSchema = new mongoose.Schema({
     email: { type: String, required: true, unique: true },
     password: { type: String, required: true },
   });
   
   export default mongoose.model('User', userSchema);
   ```

2. **用户控制器 `src/controllers/userController.ts`**：
   ```typescript
   import { Request, Response } from 'express';
   import bcrypt from 'bcrypt';
   import jwt from 'jsonwebtoken';
   import User from '../models/User';
   
   export const register = async (req: Request, res: Response) => {
     const { email, password } = req.body;
     const hashedPassword = await bcrypt.hash(password, 10);
     const user = new User({ email, password: hashedPassword });
     await user.save();
     res.status(201).send({ message: 'User registered successfully' });
   };
   
   export const login = async (req: Request, res: Response) => {
     const { email, password } = req.body;
     const user = await User.findOne({ email });
     if (!user) return res.status(400).send({ message: 'Invalid email or password' });
     const isMatch = await bcrypt.compare(password, user.password);
     if (!isMatch) return res.status(400).send({ message: 'Invalid email or password' });
     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string);
     res.send({ token });
   };
   ```

3. **用户路由 `src/routes/userRoutes.ts`**：
   ```typescript
   import { Router } from 'express';
   import { register, login } from '../controllers/userController';
   
   const router = Router();
   
   router.post('/register', register);
   router.post('/login', login);
   
   export default router;
   ```

4. **在 `src/app.ts` 中引入用户路由**：
   ```typescript
   import userRoutes from './routes/userRoutes';
   
   app.use('/api/users', userRoutes);
   ```

#### 3. 安全性配置

1. **JWT 认证中间件 `src/middleware/authMiddleware.ts`**：
   ```typescript
   import { Request, Response, NextFunction } from 'express';
   import jwt from 'jsonwebtoken';
   
   interface AuthRequest extends Request {
     userId?: string;
   }
   
   const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
     const token = req.header('Authorization')?.replace('Bearer ', '');
     if (!token) return res.status(401).send({ message: 'Access denied. No token provided.' });
     try {
       const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
       req.userId = (decoded as { id: string }).id;
       next();
     } catch (ex) {
       res.status(400).send({ message: 'Invalid token.' });
     }
   };
   
   export default authMiddleware;
   ```

2. **在需要认证的路由中使用中间件**，例如在书籍路由中：
   ```typescript
   import authMiddleware from '../middleware/authMiddleware';
   
   router.get('/books', authMiddleware, getBooks);
   ```

### 第2天：完善API与测试

#### 1. 书籍模型与控制器

1. **书籍模型 `src/models/Book.ts`**：
   ```typescript
   import mongoose from 'mongoose';
   
   const bookSchema = new mongoose.Schema({
     title: { type: String, required: true },
     author: { type: String, required: true },
     price: { type: Number, required: true },
     owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
   });
   
   export default mongoose.model('Book', bookSchema);
   ```

2. **书籍控制器 `src/controllers/bookController.ts`**：
   ```typescript
   import { Request, Response } from 'express';
   import Book from '../models/Book';
   
   export const getBooks = async (req: Request, res: Response) => {
     const books = await Book.find().populate('owner', 'email');
     res.send(books);
   };
   
   export const createBook = async (req: Request, res: Response) => {
     const { title, author, price } = req.body;
     const book = new Book({ title, author, price, owner: req.userId });
     await book.save();
     res.status(201).send(book);
   };
   
   export const updateBook = async (req: Request, res: Response) => {
     const { id } = req.params;
     const { title, author, price } = req.body;
     const book = await Book.findByIdAndUpdate(id, { title, author, price }, { new: true });
     if (!book) return res.status(404).send({ message: 'Book not found' });
     res.send(book);
   };
   
   export const deleteBook = async (req: Request, res: Response) => {
     const { id } = req.params;
     const book = await Book.findByIdAndDelete(id);
     if (!book) return res.status(404).send({ message: 'Book not found' });
     res.send({ message: 'Book deleted successfully' });
   };
   ```

3. **书籍路由 `src/routes/bookRoutes.ts`**：
   ```typescript
   import { Router } from 'express';
   import { getBooks, createBook, updateBook, deleteBook } from '../controllers/bookController';
   import authMiddleware from '../middleware/authMiddleware';
   
   const router = Router();
   
   router.get('/', authMiddleware, getBooks);
   router.post('/', authMiddleware, createBook);
   router.put('/:id', authMiddleware, updateBook);
   router.delete('/:id', authMiddleware, deleteBook);
   
   export default router;
   ```

4. **在 `src/app.ts` 中引入书籍路由**：
   ```typescript
   import bookRoutes from './routes/bookRoutes';
   
   app.use('/api/books', bookRoutes);
   ```

#### 2. 测试

1. **使用 Postman 或 Insomnia 进行手动测试**，确保所有 API 功能正常。
2. **编写单元测试和集成测试**，使用 Jest 或其他测试框架进行自动化测试。

### 第3天：调试与部署

#### 1. 调试

1. **解决 API 中的 bug**，确保所有功能按预期工作。
2. **监控日志**，处理可能的异常情况。

#### 2. 性能优化

1. **优化数据库查询**，使用索引提升查询速度。
2. **使用 PM2 等工具管理 Node.js 进程**，确保服务稳定性。

#### 3. 部署准备

1. **配置后端项目打包**，生成生产环境代码。
2. **准备部署到服务器或云平台**（如 AWS、Heroku）。

### RESTful API 接口文档

#### 用户 API

- **注册用户**
  - URL: `/api/users/register`
  - Method: `POST`
  - Body:
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "message": "User registered successfully"
    }
    ```

- **用户登录**
  - URL: `/api/users/login`
  - Method: `POST`
  - Body:
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "token": "jwt_token"
    }
    ```

#### 书籍 API

- **获取所有书籍**
  - URL: `/api/books`
  - Method: `GET`
  - Headers:
    ```
    Authorization: Bearer jwt_token
    ```
  - Response:
    ```json
    [
      {
        "_id": "book_id",
        "title": "Book Title",
        "author": "Author Name",
        "price": 19.99,
        "owner": {
          "_id": "user_id",
          "email": "user@example.com"
        }
      }
    ]
    ```

- **创建书籍**
  - URL: `/api/books`
  - Method: `POST`
  - Headers:
    ```
    Authorization: Bearer jwt_token
    ```
  - Body:
    ```json
    {
      "title": "Book Title",
      "author": "Author Name",
      "price": 19.99
    }
    ```
  - Response:
    ```json
    {
      "_id": "book_id",
      "title": "Book Title",
      "author": "Author Name",
      "price": 19.99,
      "owner": "user_id"
    }
    ```

- **更新书籍**
  - URL: `/api/books/:id`
  - Method: `PUT`
  - Headers:
    ```
    Authorization: Bearer jwt_token
    ```
  - Body:
    ```json
    {
      "title": "Updated Book Title",
      "author": "Updated Author Name",
      "price": 24.99
    }
    ```
  - Response:
    ```json
    {
      "_id": "book_id",
      "title": "Updated Book Title",
      "author": "Updated Author Name",
      "price": 24.99,
      "owner": "user_id"
    }
    ```

- **删除书籍**
  - URL: `/api/books/:id`
  - Method: `DELETE`
  - Headers:
    ```
    Authorization: Bearer jwt_token
    ```
  - Response:
    ```json
    {
      "message": "Book deleted successfully"
    }
    ```

通过以上步骤，您应该能够在3天内完成后端部分的开发。确保每个阶段都有明确的目标和时间节点，同时保持代码的可维护性和可扩展性。祝您项目顺利！