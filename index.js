function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, { [key]: value })
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  Object.assign({}, object)
  return Object.assign({}, object)
}

function deleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object
}
