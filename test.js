var myarray=require('./index');
var arr=[
    {
        class:'tom',
        name:'tom',
        age:19
    }, {
        class:'jerry',
        name:'jerry',
        age:21
    }, {
        class:'cat',
        name:'cat',
        age:23
    }, {
        class:'cat',
        name:'tiger',
        age:25
    }, {
        class:'tom',
        name:'tom2',
        age:12
    },
];
console.dir(myarray.set(arr).groupByKeyName('class',function(obj){
    return {
        class:'haha',
        list:obj
    }
}).get());