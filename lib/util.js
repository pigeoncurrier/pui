
/*
com.pigeon.util = (function(){


    var _toggleObjInArrayMatchingKey = function(array, element, key){

        var result = {};

        var keys =  _.pluck(array, key);

        //array has an object with that key so remove it
        if(_.contains(keys, element[key])){
            result = _.filter(array, function(obj) { obj.id != element[key]; });
            return result;
        }
        // array ha no object like that so add it!
        result  = _.map(array, _.clone);
        result.push(element);

        return result;

    }

    return {
        toggleObjInArrayMatchingKey:_toggleObjInArrayMatchingKey
    }

});
*/