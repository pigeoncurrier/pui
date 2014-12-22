if (Property.find().count() === 0) {
    Property.insert({
        id:1,
        name: 'Hotel test 1',
        mail:"pigeon.test.property@gmail.com",
        address: 'via some place 1',
        zip:"00100",
        city:"Rome",
        cityId:1  // lat lon better
    });
    Property.insert({
        id:2,
        name: 'Hotel test 2',
        mail:"pigeon.test.property@gmail.com",
        address: 'via some other place 2',
        zip:"00120",
        city:"Rome",
        cityId:1  // lat lon better
    });
    Property.insert({
        id:3,
        name: 'Hotel test 3',
        mail:"pigeon.test.property@gmail.com",
        address: 'via some more place 1',
        zip:"00100",
        city:"Rome",
        cityId:1  // lat lon better
    });
}