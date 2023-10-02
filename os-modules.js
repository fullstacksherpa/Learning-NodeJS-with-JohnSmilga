//In Node.js, the os module is a built-in module that provides a way of interacting with the operating system. It allows you to access various system-related information such as the operating system's architecture, CPU information, memory usage, and more.


const os = require('os');

//info about system architctures
console.log(os.arch())
console.log(os.cpus());


// info about ip address, netmasks and family
console.log(os.networkInterfaces())


//info about current users
console.log(os.userInfo())


// method return the system uptime in s


console.log(`the system uptime is ${os.uptime()} seconds`);