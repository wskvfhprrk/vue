const A_B=1234;
console.log(A_B)
//const是常数:
//1、在声名时就要赋值；
//2、变量赋值后不能改；在开发中与java中的const类一样，赋值后不可再更改
//下面代码报错：Assignment to constant variable.
// A_B=1234324
// console.log(A_B)
//3、约定开发规范：变量名称与java一样使用大写字母+下划线
//4、当常量的地址不变时，可以修改其内容
const A=['张三','李四']
A.push('王五')
console.log(A)