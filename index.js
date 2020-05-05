function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, { [key]: value })
  return Object.assign({}, obj, { [key]: value })
}
