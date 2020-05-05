function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  Object.assign({}, { [key]: value })
  return Object.assign({}, { [key]: value })
}
