# 提示用户输入一个数
echo "请输入一个整数："
read number


if ! [[ "$number" =~ ^-?[0-9]+$ ]]; then
    echo "输入的不是整数，请重新运行脚本并输入一个整数。"
    exit 1
fi


# 判断是否能被3整除
if (( number % 3 == 0 )); then
    echo "$number 能被3整除。"
else
    echo "$number 不能被3整除。"
fi