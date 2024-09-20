// Planning a xcountry trip 
// The distance of the trip is 1500 miles 
// car fuel efficiency:
// @ 55 mph you get 30 mpg 
// @ 60 mph you get 28 mpg 
// @ 75 mph you get 23 mpg 
// fuel budget is $175 
// The average cost of fuel is $3 per gallon 

// Answer these questions :
// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours? 

// Compare the results when taveling at an average of 55, 60. and 75 mph.
// Which makes the most sense for the trip? 

// Log the results of your calculations using string concatenation or template literals.  
let tripDistance = 1500 
let fuelBudget = 175 
let costPerGallon = 3 
let mpgAt55mph = 30 
let mpgAt60mph = 28 
let mpgAt75mph = 23 
let gallonsUsedAt55mph = tripDistance / mpgAt55mph
let gallonsUsedAt60mph = tripDistance / mpgAt60mph
let gallonsUsedAt75mph = tripDistance / mpgAt75mph
let costAt55mph = gallonsUsedAt55mph * costPerGallon
let costAt60mph = gallonsUsedAt60mph * costPerGallon
let costAt75mph = gallonsUsedAt75mph * costPerGallon
let tripTimeAt55mph = tripDistance / 55 
let tripTimeAt60mph = tripDistance / 60 
let tripTimeAt75mph = tripDistance / 75

console.log(`When traveling at 55mph the trip will require ${gallonsUsedAt55mph} gallons.
    The total cost will be  $${costAt55mph}. The trip will take ${tripTimeAt55mph} hours. `)

console.log(`When traveling at 60mph the trip will require ${gallonsUsedAt60mph} gallons.
    The total cost will be  $${costAt60mph}. The trip will take ${tripTimeAt60mph} hours. `)

console.log(`When traveling at 75mph the trip will require ${gallonsUsedAt75mph} gallons.
    The total cost will be  $${costAt75mph}. The trip will take ${tripTimeAt75mph} hours. `)
// Determine the per gallon expenditure of the trip at each speed by dividing the mpg by the total distance 
