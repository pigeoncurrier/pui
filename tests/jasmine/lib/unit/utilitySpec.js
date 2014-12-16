describe("Utility",function(){
    var sut             = com.pigeon.util,
        anObjArray      = [{a:1, b:2}, {a:8, b:7}, {a:5, b:3}],
        anObjArrayAdded = [{a:1, b:2}, {a:8, b:7}, {a:5, b:3}, {a:10, b:20}],
        anObjectToAdd   = {a:10, b:20};

    it("expect to add an element to an array of object", function() {
        var res =  sut.toggleObjInArrayMatchingKey(anObjArray, anObjectToAdd, 'a');
        

        expect(a).toBe(true);
    });



})