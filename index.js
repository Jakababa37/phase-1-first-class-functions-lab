// Code your solution in this file!

    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    
const  returnFirstTwoDrivers = function (){
    return (drivers.slice(0,2))
}
const returnLastTwoDrivers = (drivers) =>{
    return (drivers.slice(-2))
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const  createFareMultiplier = function(value){
    return function (five){
        return (five * value)
    }
}
    

function fareDoubler(fare){
    return fare * 2
}
function fareTripler(fare){
    return fare * 3;
  }
  const selectDifferentDrivers = function (drivers,driversToReturn){
    return driversToReturn(drivers)
  }
  