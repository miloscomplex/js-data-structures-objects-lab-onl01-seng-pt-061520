// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driverObj, key, value) {
  // return new driver with out mutation
  const newDriverObj = { ...driverObj }
  newDriverObj[key] = value

  return newDriverObj
}

function destructivelyUpdateDriverWithKeyAndValue(driverObj, key, value) {
  driverObj[key] = value

  return driverObj
}

function deleteFromDriverByKey(driverObj, key) {
  // delete the key/value pair from the driverObj
  // but don't mutate the diverObj passed in
  const newDriverObj = Object.assign({}, driverObj)
  delete newDriverObj[key]
  return newDriverObj
}

function destructivelyDeleteFromDriverByKey(driverObj, key) {
  // mutate the driver passed in by deleting the key value pair
  // consider if bracket or dot-notation should be used
  delete driverObj[key]
  return driverObj
}
