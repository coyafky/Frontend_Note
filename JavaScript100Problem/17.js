function calculateDistanceAndHeight(initialHeight, n) {
    let totalDistance = initialHeight; // 初始高度
    let currentHeight = initialHeight;
  
    for (let i = 1; i < n; i++) {
      currentHeight /= 2; // 每次反弹高度减半
      totalDistance += 2 * currentHeight; // 每次反弹和下落的距离
    }
  
    let tenthReboundHeight = currentHeight / 2; // 第10次反弹的高度
  
    return {
      totalDistance: totalDistance,
      tenthReboundHeight: tenthReboundHeight
    };
  }
  
  const initialHeight = 100;
  const n = 10;
  const result = calculateDistanceAndHeight(initialHeight, n);
  
  console.log("第10次落地时，共经过的距离: " + result.totalDistance + "米");
  console.log("第10次反弹的高度: " + result.tenthReboundHeight + "米");