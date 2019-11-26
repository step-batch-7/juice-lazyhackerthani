const reducers = {
  $and: (previousStatus, val) => previousStatus && val,
  $or: (previousStatus, val) => previousStatus || val
};

const validateKeys = function(rule, obj) {
  const [ruleType] = Object.keys(rule);
  if (!Array.isArray(rule[ruleType]) || !rule[ruleType].length)
    throw new Error("invalid rule");
  return rule[ruleType]
    .map(r =>
      typeof r === "string"
        ? obj[r] !== undefined && obj[r] !== null
        : validateKeys(r, obj)
    )
    .reduce(reducers[ruleType], ruleType === "$and");
};

exports.validateKeys = validateKeys;
