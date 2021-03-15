const assert = require('assert');
const sheetTwo = require('../models/med_two');
const readXlsxFile = require('read-excel-file/node');

describe('Saving Records', function() {
    // Create tests
    it('Saves a record to the db', function(done) {
        var counter = 0;
        function pushData(rows){
            const dataRow = new sheetTwo({
                number: rows[counter][0],
                name: rows[counter][1],
                price: rows[counter][2],
                classFirstStroke: rows[counter][3],
                remark: rows[counter][4],
                composition: rows[counter][5],
            });
    
            dataRow.save().then(function(){
                counter += 1;
                if(counter >= rows.length){
                    assert(false === false);
                    done();
                } else {
                    pushData(rows);
                }
            });
        }
        readXlsxFile('../assets/fixed_file2.xlsx').then((rows) => {
            pushData(rows);
        })
    });
});

