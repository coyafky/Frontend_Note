type Point = { x: number; y: number };
type P = keyof Point;
// type P = "x" | "y"

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
// type A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
// type M = string | number




function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }
  
  const point: Point = { x: 10, y: 20 };
  const xValue = getProperty(point, "x"); // xValue is of type number
  const yValue = getProperty(point, "y"); // yValue is of type number
  // const invalidValue = getProperty(point, "z"); // Error: "z" is not a valid key of Point


  type Readonly4<T> = {
    readonly [P in keyof T]: T[P];
  };
  
  type ReadonlyPoint = Readonly<Point>;
  // type ReadonlyPoint = {
  //   readonly x: number;
  //   readonly y: number;
  // }