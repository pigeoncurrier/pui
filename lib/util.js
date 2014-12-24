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
    _this.toggleObjInArrayMatchingKey = function(array, element, key){

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

    },

    _this.mergeRequestStatus = function(statusA, statusB){

        if(statusA == statusB){
            return statusA;
        }

        if(
            statusA == _this.requestStatusEnum.PENDIGN &&
            statusB == _this.requestStatusEnum.REJECTED
          ){
            return _this.requestStatusEnum.PENDIGN
        }

        if(
            statusA == _this.requestStatusEnum.PENDIGN &&
            statusB == _this.requestStatusEnum.PROPOSAL
            ){
            return _this.requestStatusEnum.PROPOSAL
        }

        if(
            statusA == _this.requestStatusEnum.REJECTED &&
            statusB == _this.requestStatusEnum.PROPOSAL
            ){
            return _this.requestStatusEnum.PROPOSAL
        }

        return _this.requestStatusEnum.UNKNOWN

    },


    _this.getLabelFromRequestStatus = function (statusAsNum) {

        if (statusAsNum == com.pigeon.util.requestStatusEnum.PENDIGN) {
            return "PENDING";
        } else if (statusAsNum == com.pigeon.util.requestStatusEnum.PROPOSAL) {
            return "Request accepted!";
        } else if (statusAsNum == com.pigeon.util.requestStatusEnum.REJECTED) {
            return "Sorry your request was rejected";
        } else if (statusAsNum == com.pigeon.util.requestStatusEnum.UNKNOWN) {
            return "Sorry your request is in an unknown status!!";
        }

        return "status unrecognized";
    };

    _this.requestStatusEnum = {
        PENDIGN:    1,
        PROPOSAL:   2,
        REJECTED:   3,
        UNKNOWN:    4
    },

    _this.propertyStatusEnum = {
        ACTIVE:     1,
        NOT_ACTIVE: 2
    };

    return _this

})(com.pigeon.util);
