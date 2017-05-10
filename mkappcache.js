const testFolder = './dist/';
const fs = require('fs');
const crypto = require('crypto');

console.log('CACHE MANIFEST');
fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        fs.stat(testFolder + '/' + file, (err, stats) => {
            if (!stats.isDirectory()) {
                fs.readFile(testFolder + '/' + file, (err, buf) => {
                    var hash = crypto.createHash('md5');
                    hash.update(buf);
                    console.log(file);
                    console.log('# ' + hash.digest('hex'));
                });
            } else {
                fs.readdir(testFolder + '/' + file, (err1, files1) => {
                    files1.forEach(file1 => {
                        fs.readFile(testFolder + '/' + file + '/' + file1, (err, buf) => {
                            var hash = crypto.createHash('md5');
                            hash.update(buf);
                            console.log(file + '/' + file1);
                            console.log('# ' + hash.digest('hex'));
                        });

                    });
                });
            }
        });
    });
});
