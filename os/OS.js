

const os = require('os')

const user = os.userInfo()
console.log(user);

console.log(`This machine has been running for ${os.uptime()} seconds`);
console.log(`This machine has been running for ${Math.floor(os.uptime() / 60)} minutes`);
console.log(`This machine has been running for ${Math.floor(os.uptime() / 3600)} hours`);
