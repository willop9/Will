const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();

var percentageFreeMem = (freeMem/totalMem)*100;

console.log(`Percentage of free memory: ${percentageFreeMem}%`);
