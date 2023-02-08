let fs = require('fs');

fs.writeFile('tmp/restart.txt', `Reset server ${new Date()}`, function(error){
  if(error) throw error; // ошибка чтения файла, если есть
  console.log('Reset server');
});