if (Property.find().count() === 0) {
    Property.insert({
        name: 'Hotel test 1',
        address: 'via some place 1',
        zip:"00100",
        city:"Rome",
        cityId:1  // lat lon better
    });
    Property.insert({
        name: 'Hotel test 2',
        address: 'via some other place 2',
        zip:"00120",
        city:"Rome",
        cityId:1  // lat lon better
    });
    Property.insert({
        name: 'Hotel test 3',
        address: 'via some more place 1',
        zip:"00100",
        city:"Rome",
        cityId:1  // lat lon better
    });
}