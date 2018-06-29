import Pagination from './module/Pagination.js'

var test = new Pagination({
    container : '.demo',    //组件加载容器
    total : 22,             //总页数
    limit : 10,             //每组最多可见页数
    start : 2           //默认起始位置
})

console.log(test)
test.onchange(function (page,element){
    console.log(page)
    console.log(element)
    console.log(this)
})