const exec = require('child-process-promise').exec;
let args = process.argv[2];
let obj = {
    "script1": "command example",
    "script2": "command example",
    "script3": "command example",
    "script4": "command example",
    "script5": "command example",
    "script6": "command example",
    "script7": "command example"
}
exec(obj[`script${args}`]).then(result => {
    console.log(result.stdout);
})