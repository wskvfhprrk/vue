let username='张三'
let age=20
let sex='男'
let sing=function(){
console.log('我爱唱歌')
}

// let person={
//     username:username,
//     age:age,
//     sex:sex,
//     sing:sing
// }
//如果名称一样可以简写
let person={
    username,
    age,
    sex,
    sing
}

console.log(person.username)
console.log(person.age)
console.log(person.sex)
person.sing()

