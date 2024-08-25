i=2;
((i++))
echo $i

#!/bin/bash

let j=3
let j++
echo $j

expr $i + 1

echo $i 1 | awk '{printf $1+$2}'