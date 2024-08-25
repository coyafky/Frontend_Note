enum Status {
  Pending = 0,
  Approved = 1,
  Rejected = 2,
}

type StatusKeys = keyof Status; // type StatusKeys = 0 | 1 | 2

type StatusKeys2 = keyof typeof Status; // type StatusKeys2 = "Pending" | "Approved" | "Rejected"