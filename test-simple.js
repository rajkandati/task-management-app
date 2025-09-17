console.log('=== Environment Variables ===');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? 'SET' : 'NOT SET');

console.log('=== Node.js Info ===');
console.log('Node version:', process.version);
console.log('Platform:', process.platform);
console.log('Architecture:', process.arch);

console.log('=== Test Complete ===');
console.log('Keeping container alive for 60 seconds...');

setTimeout(() => {
  console.log('Exiting...');
  process.exit(0);
}, 60000);