// recover.js
const bs58 = require('bs58');
const fs = require('fs');
b = bs58.decode('55PTsyCA9mUoVzW86kWga9i4ihJQDcfmCehBb4ZkEhzCztwQeaeY8Q99rQMiHbhfr2U4rDZosSiXsP8pooBUeX14');
j = new Uint8Array(b.buffer, b.byteOffset, b.byteLength / Uint8Array.BYTES_PER_ELEMENT);
fs.writeFileSync('key.json', `[${j}]`);