let person={name:'张三',age:18}
// let zs=person //也java内存管理一样，指向同一个内存
//更换为对象扩展——就成了一个独立的内存
let zs={...person}
console.log(person)
console.log(zs)
person.name='李四'
console.log(person)
console.log(zs)