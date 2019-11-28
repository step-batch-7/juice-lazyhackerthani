const generalUtils = require("../src/generalUtils");
const { getValueToProceed, isEqual } = generalUtils;

// const getSuperSetObjects = function(subSetObj, listOfObjects) {
//   return listOfObjects.filter(isSubSet.bind(null, subSetObj));
// };

// isSubSet = function(subSetObj, superSetObj) {
//   return Object.entries(subSetObj).every(
//     keyAndValue => superSetObj[keyAndValue[0]] == keyAndValue[1]
//   );
// };

const getSuperSetObjects = function(subSetObj, predigators, listOfObjects) {
  return listOfObjects.filter(isSubSet.bind(null, subSetObj, predigators));
};

isSubSet = function(subSetObj, predigators, superSetObj) {
  return Object.entries(subSetObj).every(keyAndValue => {
    const prediFunc = getValueToProceed(predigators, keyAndValue[0], isEqual);
    return prediFunc(keyAndValue[1], superSetObj[keyAndValue[0]]);
  });
};

exports.isSubSet = isSubSet;
exports.getSuperSetObjects = getSuperSetObjects;
