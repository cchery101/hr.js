define([
    'tests',
    'hr/hr',
    'underscore'
], function(tests, hr, _) {


    tests.add("collection.add.unique", function(test) {
        var c = new hr.Collection();

        var m = {
            'id': 'test_unique_id'
        };

        c.add(m);
        c.add(m);

        test.assert(c.size() == 1);
    });

    tests.add("collection.add.merge", function(test) {
        var c = new hr.Collection();
        var uid = "test_unique_id";

        c.add({
            'id': uid,
            'test': 1
        });
        c.add({
            'id': uid,
            'test': 2
        }, {
            merge: true
        });
        
        test.assert(c.get(uid).get("test") == 2);
    });
})