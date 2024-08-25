import React, { useState } from 'react';
import CommentForm from './CommonForm';

const commentsData = [
    { id: 1, text: '这视频真好看！', username: '用户A' },
    { id: 2, text: '赞同，非常有趣！', username: '用户B' },
    { id: 3, text: '期待下一期！', username: '用户C' }
  ];
function CommentList() {
  const [comments, setComments] = useState(commentsData);

  const handleDelete = (id) => {
    const newComments = comments.filter(comment => comment.id !== id);
    setComments(newComments);
  };

  const handleSubmit = (text) => {
    // 生成一个新的评论对象
    const newComment = {
      id: Date.now(), // 简单地使用当前时间戳作为id
      text,
      username: 'Anonymous' // 假设所有评论都是匿名的
    };
    // 将新评论添加到列表的开头
    setComments([newComment, ...comments]);
  };

  return (
    <div>
      <CommentForm onSubmit={handleSubmit} />
      {comments.map(comment => (
        <div key={comment.id}>
          <h3>{comment.username}</h3>
          <p>{comment.text}</p>
          <button onClick={() => handleDelete(comment.id)}>删除</button>
        </div>
      ))}
    </div>
  );
}

export default CommentList;