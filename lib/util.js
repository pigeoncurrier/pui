com.pigeon.util = (function(namespace){

    var _this = namespace ? namespace : {};


    /*
     * function to add or remove an element from an array
     * @array array where to add or remove an element
     * @element the element to be added or removed
     * @key the element key to be used as matching for addin or removal, != will be used on this field on
     *      element and array values
     *
     *      TODO: test unità, gestire gli errori!
     */
    var _toggleObjInArrayMatchingKey = function(array, element, key){

        var result = {};

        // get object keys that match with the searched one
        var keys =  _.pluck(array, key);

        console.log(array);
        console.log(keys);



        if(!keys){
            throw new Error("object has not expected key!");
        }

        //array has an object with that key so remove it
        if(_.contains(keys, element[key])){
            result = _.filter(array, function(obj) {return obj[key] != element[key]; });
            return result;
        }

        // array has no object like that so add it!
        result  = _.map(array, _.clone);
        result.push(element);
        return result;

    }

    _this.toggleObjInArrayMatchingKey =_toggleObjInArrayMatchingKey;

    _this.requestStatusEnum = {
        PENDIGN:    1,
        PROPOSAL:   2,
        REJECTED:   3
    },

    _this.propertyStatusEnum = {
        ACTIVE:     1,
        NOT_ACTIVE: 2
    }

    return _this


})(com.pigeon.util);
