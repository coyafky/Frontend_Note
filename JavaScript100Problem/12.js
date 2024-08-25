function getGrade(score) {
    return score >= 90 ? 'A' : (score >= 60 ? 'B' : 'C');
  }
  
  // 示例使用
  console.log(getGrade(95)); // 输出 'A'
  console.log(getGrade(85)); // 输出 'B'
  console.log(getGrade(55)); // 输出 'C'