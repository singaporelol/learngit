let a: number = 10;
console.log(a);

let b: { name: string; age?: number };
b = { name: "zhagnsan", age: 18 };

let c: { name: string; [xxx: string]: any };
c = { name: "zhangsan", age: 18, gender: true };

let d: (a: number) => number;

d = function () {
  return 1;
};
