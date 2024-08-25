#!/bin/bash
# 脚本名称: string_operations.sh
# 描述: 演示各种字符串操作的脚本

# 定义一个字符串
string="Hello, World! This is a test string."

# 计算字符串长度
length=${#string}
echo "字符串长度: $length"

# 字符串切片
substring=${string:7:5}
echo "从位置7开始的5个字符: $substring"

# 字符串拼接
new_string="Prefix-"$string"-Suffix"
echo "拼接后的字符串: $new_string"

# 字符串替换
replaced_string=${string/test/sample}
echo "替换后的字符串: $replaced_string"

# 字符串删除
trimmed_string=${string#*This is}
echo "删除开头部分后的字符串: $trimmed_string"

# 字符串比较
if [[ "$string" == *"World"* ]]; then
    echo "字符串包含 'World'"
fi

# 字符串包含
if [[ "$string" =~ "test" ]]; then
    echo "字符串包含 'test'"
fi

# 字符串转换
uppercase_string=${string^^}
echo "转换为大写后的字符串: $uppercase_string"

lowercase_string=${string,,}
echo "转换为小写后的字符串: $lowercase_string"

# 字符串分割
IFS=', ' read -ra words <<< "$string"
echo "分割后的单词:"
for word in "${words[@]}"; do
    echo "$word"
done