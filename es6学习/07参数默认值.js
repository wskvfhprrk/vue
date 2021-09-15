
//如果方法参数没有传值时有时会出现问题，要设置默认值：a=0
function add(a=0){
    return 100+a
}
let a=add()
console.log(a)
//方法名一样的，后面的方法会覆盖前面的方法——与java方法重载不同
function add(){
    return 100
}
let b=add(100)
//此处b还是100，使用下面的方法，不是上面方法
console.log(b)