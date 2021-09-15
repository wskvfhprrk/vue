let person={
    sayHi:function(){
        console.log('Hi')
    },
    sing:function(){
        console.log('一闪一闪亮晶晶')
    }
}
person.sayHi()
person.sing()
//方法简写
let person1={
    sayHi(){
        console.log('Hello')
    },
    sing(){
        console.log('满天都是小星星')
    }
}
person1.sayHi()
person1.sing()