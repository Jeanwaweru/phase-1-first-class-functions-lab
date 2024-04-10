const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};
const selectingDrivers = [returnLastTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function(drivers, selectFunction) {
  return selectFunction(drivers);
};
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
console.log(lastTwoDrivers); 
