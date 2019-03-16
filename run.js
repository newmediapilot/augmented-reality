//
console.log('replace begin');
const childProcess = require('child_process');
const gitRevision = childProcess.execSync('git rev-parse HEAD').toString().trim().substr(0, 7);
const replace = require('replace-in-file');
const options = {
    files: 'index.html',
    from: /<!---commitId--->/g,
    to: gitRevision,
};
replace.sync(options);
console.log('replace complete');
//