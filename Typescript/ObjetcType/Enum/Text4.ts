enum Status3 {
    Pending = 0,
    Approved = 1,
    Rejected = 2,
  }
  
  let status3 = Status3.Approved; // status 的值为 1
  
  let statusName = Status3[status]; // statusName 的值为 "Approved"
  
  console.log(statusName); // 输出 "Approved"