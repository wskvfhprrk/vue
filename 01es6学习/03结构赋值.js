//1、数组结构
const F4=['小沈阳','刘能','宋小宝','赵四']
console.log(F4)
// let xsy=F4[0]
// let ln=F4[1]
// let sxb=F4[2]
// let zs=F4[3]
let [xsy,ln,sxb,zs]=F4
console.log(xsy)
console.log(ln)
//2、对象结构规范——对象赋值名称必须要保持名称一致，全部赋值和部分赋值都可以
const zbs={
    name:'赵本山',
    sex:'男',
    jineng:function(){
        console.log('演小品')
    },
    age:'不详'
}
// let name=zbs.name
// let sex=zbs.sex
// let jineng=zbs.jineng
let{name,sex,jineng}=zbs
console.log(name)
console.log(sex)
//函数直接调用方法即可
jineng()
