const getSuperSetObjects = function(subSetObj, listOfObjects) {
  return listOfObjects.filter(isSubSet.bind(null, subSetObj));
};

isSubSet = function(subSetObj, superSetObj) {
  return Object.entries(subSetObj).every(
    keyAndValue => superSetObj[keyAndValue[0]] == keyAndValue[1]
  );
};

exports.isSubSet = isSubSet;
exports.getSuperSetObjects = getSuperSetObjects;
