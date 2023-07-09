// recover.js
const bs58 = require('bs58');
const fs = require('fs');
b = bs58.decode('4eN5UqK4wLLP2ztBmFScTgp1Ro7eEAtd4D31hmNkSbq3Zfv4a5kR2rPykJc14NEehkDWMYspkhCf17soDeBR6ZKx');
j = new Uint8Array(b.buffer, b.byteOffset, b.byteLength / Uint8Array.BYTES_PER_ELEMENT);
fs.writeFileSync('key.json', `[${j}]`);