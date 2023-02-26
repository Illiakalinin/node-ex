const os = require('os');
const fs = require('fs');
// console.log('os.platform() :>> ', os.platform());
// console.log('os.cpus() :>> ', os.cpus());

fs.readFile('./math.js', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    // console.log('err :>> ', err);
  } else {
    // console.log('data :>> ', data);
  }
});

const fileText = fs.readFileSync('./math.js', { encoding: 'utf-8' });
// console.log('fileText :>> ', fileText);

fs.readdir('.', (err, data) => {
  if (err) {
    // console.log('err', err);
  } else {
    data
      .filter(f => /^.*\.js$/.test(f))
      .forEach(f =>
        fs.readFile(f, { encoding: 'utf-8' }, (err, data) => {
          if (err) {
            // console.log('err :>> ', err);
          } else {
            // console.log('data :>> ', data);
          }
        })
      );
  }
});

try {
  const files = fs.readdirSync('.');
  // console.log('Files in directory:');
  files
    .filter(f => /^.*\.js$/.test(f))
    .forEach(f => {
      try {
        const data = fs.readFileSync(f, { encoding: 'utf-8' });
        // console.log('Data from file:', f);
        // console.log(data);
      } catch (err) {
        // console.log('Error reading file:', f, err);
      }
    });
} catch (err) {
  // console.log('Error reading directory:', err);
}

console.log('__filename :>> ', __filename);
console.log('__dirname :>> ', __dirname);

console.log('process :>> ', process.env);
