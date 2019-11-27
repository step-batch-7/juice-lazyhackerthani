const getSuperSetObjects = function(subSetObj, listOfObjects) {
  return listOfObjects.filter(isSubSet.bind(null, subSetObj));
};

isSubSet = function(subSetObj, superSetObj) {
  return Object.entries(subSetObj).reduce((prevStatus, keyAndValue) => {
    return prevStatus && superSetObj[keyAndValue[0]] == keyAndValue[1];
  }, true);
};

exports.isSubSet = isSubSet;
exports.getSuperSetObjects = getSuperSetObjects;
