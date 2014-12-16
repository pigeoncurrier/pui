Template.propertyList.helpers({

    selectedProperties: function(){

        //todo refactor in an utility namespace
        var rowSearchString = Session.get('currentSearch');
        var searchString    = $.trim(rowSearchString);

        if(searchString){
            var searchRegExp    = new RegExp(searchString, 'i');
            return Property.find({name:searchRegExp});
        }

    }
});