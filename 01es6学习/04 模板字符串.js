//1、声名字符串：单双引号和反引号都可以
let str1='我是一个字符串'
let str2=`我也是一个字符串`
console.log(str1)
console.log(str2)
//2、原样输出：引号不可以，但反引号可以
let hemlstr1='<ul><li>沈腾</li><li>马丽</li></ul>'
console.log(hemlstr1)
let hemlstr2=`<ul>
<li>沈腾</li>
<li>马丽</li>
</ul>`
console.log(hemlstr2)
//3、变量拼接（反引号插值表达式）
let star='贾玲'
// let out='我喜欢'+star+'这个演员'
let out=`我喜欢${star}这个演员`
console.log(out)