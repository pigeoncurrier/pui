if (Property.find().count() === 0) {
    Property.insert({
        name: 'Hotel test 1',
        mail:"pigeon.test.property@gmail.com",
        address: 'via some place 1',
        zip:"00100",
        city:"Rome"
    });
    Property.insert({
        name: 'Hotel test 2',
        mail:"pigeon.test.property@gmail.com",
        address: 'via some other place 2',
        zip:"00120",
        city:"Rome"

    });
    Property.insert({
        name: 'Hotel test 3',
        mail:"pigeon.test.property@gmail.com",
        address: 'via some more place 1',
        zip:"00100",
        city:"Rome"
    });
}