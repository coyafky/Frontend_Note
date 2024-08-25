function calculatePeaches(days) {
    let peaches = 1; // 第10天早上剩下1个桃子
    for (let i = days; i > 1; i--) {
      peaches = (peaches + 1) * 2; // 逆向推理，计算前一天的桃子数量
    }
    return peaches;
  }
  
  const totalDays = 10;
  const totalPeaches = calculatePeaches(totalDays);
  console.log(`第一天共摘了 ${totalPeaches} 个桃子。`);