function findMatches() {
    const teamA = ['a', 'b', 'c'];
    const teamB = ['x', 'y', 'z'];
    const matches = [];
  
    // 条件
    const conditions = {
      'a': ['x'],
      'c': ['x', 'z']
    };
  
    for (let i = 0; i < teamA.length; i++) {
      for (let j = 0; j < teamB.length; j++) {
        const playerA = teamA[i];
        const playerB = teamB[j];
  
        // 检查是否满足条件
        if (!conditions[playerA] || !conditions[playerA].includes(playerB)) {
          matches.push([playerA, playerB]);
        }
      }
    }
  
    // 过滤出唯一的三组比赛
    const result = [];
    for (let i = 0; i < matches.length; i++) {
      for (let j = i + 1; j < matches.length; j++) {
        for (let k = j + 1; k < matches.length; k++) {
          const set = new Set([
            matches[i][0] + matches[i][1],
            matches[j][0] + matches[j][1],
            matches[k][0] + matches[k][1]
          ]);
  
          if (set.size === 3) {
            result.push([matches[i], matches[j], matches[k]]);
          }
        }
      }
    }
  
    return result;
  }
  
  const results = findMatches();
  console.log(results);