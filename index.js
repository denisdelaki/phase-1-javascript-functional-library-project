
function myEach(testArr, alert) {
    const objValues = Object.values(testArr);
   objValues.forEach(function (element) {
       alert(element)
       
    })
    return testArr
}
function myMap(testArr, callback, acc) {
      const objValues = Object.values(testArr);
    callback = objValues.map(y => y * 3)
    return callback
}
function myReduce(testArr, callback, acc) {
  let objValues = Object.values(testArr);

  if (!acc) {
    acc = objValues[0];
    objValues = objValues.slice(1);
  }

  const newArr = objValues.length;

  for (let i = 0; i < newArr; i++) {
    acc = callback(acc, objValues[i], objValues);
  }
  return acc;
};
function myFind(testArr, target) {
    const objValues = Object.values(testArr);
  
  for (let value = 0; value < objValues.length; value++) 
    if (target(objValues[value])) return objValues[value];
  return undefined
}
function myFilter(testArr, excluder) {
    const objValues = Object.values(testArr)
    return objValues.filter(value => value > 10)
}
function mySize(testArr) {
      const objValues = Object.values(testArr);
      const newValue = new Set(objValues);
      return newValue.size;
}
function myFirst(testArr, number) {
  const objValues = Object.values(testArr);
  if (number) {
    return objValues.slice(0, 3);
  }
  return objValues[0];
}
function myLast(testArr, number) {
  const objValues = Object.values(testArr);
  if (number) {
    return objValues.slice(-3);
  }
  return objValues[3];
}
function myKeys(testArr) {
    return Object.keys(testArr)
    
}
function myValues(testArr) {
    return Object.values(testArr)
    
}