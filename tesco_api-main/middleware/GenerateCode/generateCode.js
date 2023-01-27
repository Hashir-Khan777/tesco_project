const crypto = require('crypto');

const generateUniqueInteger=()=>{
  return crypto.randomBytes(4).readUInt32BE(0);
}
module.exports=generateUniqueInteger