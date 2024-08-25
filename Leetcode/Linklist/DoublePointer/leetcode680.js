function validPalindrome(s) {
    let left = 0;  // 定义左指针，初始值为字符串的开头
    let right = s.length - 1;  // 定义右指针，初始值为字符串的末尾
    while (left < right) {  // 当左指针小于右指针时执行循环
        if (s[left] !== s[right]) {  // 如果左右指针指向的字符不相等
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);  // 尝试删除左指针或右指针指向的字符，判断剩下的字符串是否是回文串
        }
        left++;  // 左指针向右移动
        right--;  // 右指针向左移动
    }
    return true;  // 如果整个字符串都满足回文串的性质，返回 true
}

function isPalindrome(s, left, right) {
    while (left < right) {  // 当左指针小于右指针时执行循环
        if (s[left] !== s[right]) {  // 如果左右指针指向的字符不相等
            return false;  // 返回 false，表示不是回文串
        }
        left++;  // 左指针向右移动
        right--;  // 右指针向左移动
    }
    return true;  // 如果整个字符串都满足回文串的性质，返回 true
}

  // 输出：true
const str = "abca";
console.log(validPalindrome(str)); // Output: true