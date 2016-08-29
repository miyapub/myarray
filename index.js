var _array=[];
module.exports={
    set:function(array){
        _array=array;
        return this;
    },
    groupByKeyName(keyName,cb){
        var value_arr=[];
        var group_arr={};
        _array.map(function(obj){
            if(obj.hasOwnProperty(keyName)){
                var value=obj[keyName];
                if(!value_arr.includes(value)){
                    value_arr.push(value);
                    group_arr[value]=[];
                }
                if(Object.prototype.toString.call(cb) === '[object Function]'){
                    group_arr[value].push(cb(obj));
                }else{
                    group_arr[value].push(obj);
                }
            }
        });
        _array=[group_arr];
        return this;
    },
    get:function(){
        return _array;
    }
}