function mergeSortedArray(nums1, m, nums2, n) {
    // 将 nums2 中的元素逐个插入到 nums1 中
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }
    // 对 nums1 进行排序
    nums1.sort((a, b) => a - b);
}