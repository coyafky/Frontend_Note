# 定义变量
x=5
y=3
z=7

# 使用逻辑与（AND）
echo "检查 x 是否大于 y 且 z 是否大于 x："
if [ $x -gt $y -a $z -gt $x ]; then
    echo "x 大于 y 且 z 大于 x"
else
    echo "条件不满足"
fi

# 使用逻辑或（OR）
echo "检查 x 是否小于 y 或 z 是否小于 x："
if [ $x -lt $y -o $z -lt $x ]; then
    echo "x 小于 y 或 z 小于 x"
else
    echo "条件不满足"
fi

# 使用逻辑非（NOT）
echo "检查 x 是否不等于 y："
if ! [ $x -eq $y ]; then
    echo "x 不等于 y"
else
    echo "x 等于 y"
fi

# 组合逻辑运算
echo "检查 x 是否大于 y 且 (z 是否大于 x 或 y 是否小于 z)："
if [ $x -gt $y -a \( $z -gt $x -o $y -lt $z \) ]; then
    echo "条件满足"
else
    echo "条件不满足"
fi