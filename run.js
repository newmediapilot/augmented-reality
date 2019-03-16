//
console.log('replace begin');
const replace = require('replace-in-file');
const options = {
    files: 'index.html',
    from: '<!---commitId--->',
    to: 'bar',
};
replace.sync(options);
console.log('replace complete');
//