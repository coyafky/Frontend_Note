#!/bin/bash
# 脚本名称: file_operations.sh
# 描述: 演示各种文件操作的脚本

# 定义文件路径
source_file="source.txt"
destination_file="destination.txt"
directory="test_directory"

# 创建一个空文件
touch "$source_file"
echo "已创建文件: $source_file"

# 向文件中写入内容
echo "这是源文件的内容。" > "$source_file"
echo "源文件内容:"
cat "$source_file"

# 复制文件
cp "$source_file" "$destination_file"
echo "已复制文件: $source_file -> $destination_file"

# 移动文件
mv "$destination_file" "$directory"
echo "已移动文件: $destination_file -> $directory"

# 查看移动后的文件内容
echo "移动后的文件内容:"
cat "$directory/$destination_file"

# 追加内容到文件
echo "这是追加的内容。" >> "$directory/$destination_file"
echo "追加内容后的文件内容:"
cat "$directory/$destination_file"

# 读取文件内容并输出
echo "读取文件内容:"
while IFS= read -r line; do
    echo "$line"
done < "$directory/$destination_file"

# 更改文件权限
chmod 755 "$directory/$destination_file"
echo "已更改文件权限: $directory/$destination_file"

# 查找文件
echo "查找以'source'开头的文件:"
find . -name "source*"