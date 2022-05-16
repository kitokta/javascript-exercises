const ftoc = function(temp) {
let newTemp = (temp-32) * (5/9);

if (newTemp%1!=0) newTemp = newTemp.toFixed(1);

return parseFloat(newTemp);
};

const ctof = function(temp) {
  let newTemp = temp * (9/5) + 32;

  if (newTemp%1!=0) newTemp = newTemp.toFixed(1);
  
  return parseFloat(newTemp);
  ;
};

ftoc ();
ctof();

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
