const os = require('os');

// Check platform
console.log(os.platform());

// CPU Architecture
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Up-time
console.log(os.uptime());