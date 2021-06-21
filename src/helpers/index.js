const isMonday = (days, options) => {
  const result = days.filter((e) => {
    return e.name === "monday";
  });
  return options.fn(result[0]);
};

const isTuesday = (days, options) => {
  const result = days.filter((e) => {
    return e.name === "tuesday";
  });
  return options.fn(result[0]);
};
const isWednesday = (days, options) => {
  const result = days.filter((e) => {
    return e.name === "wednesday";
  });
  return options.fn(result[0]);
};
const isThursday = (days, options) => {
  const result = days.filter((e) => {
    return e.name === "thursday";
  });
  return options.fn(result[0]);
};
const isFriday = (days, options) => {
  const result = days.filter((e) => {
    return e.name === "friday";
  });
  return options.fn(result[0]);
};
const isSaturday = (days, options) => {
  const result = days.filter((e) => {
    return e.name === "saturday";
  });
  return options.fn(result[0]);
};
const isSunday = (days, options) => {
  const result = days.filter((e) => {
    return e.name === "sunday";
  });
  return options.fn(result[0]);
};

module.exports = {
  isMonday,
  isTuesday,
  isWednesday,
  isThursday,
  isFriday,
  isSaturday,
  isSunday,
};
