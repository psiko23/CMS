const db = require('../db.js');

db.query(`SELECT * FROM departments`, (err, result) => {
    if (err) {
        console.log(`error retreiving deparment list: ${err}`);
    }
    console.log(result);
});

