const fs = require('fs');
const roomCount = fs.readFileSync("./roomCount.txt").toString().trim();
const timeList = fs.readFileSync("./timeList.txt").toString().trim().split("\n");

for (var i = 0; i < roomCount; i++) {
  console.log(timeList[i])
}
