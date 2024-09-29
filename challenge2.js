// Function to detect speeding and calculate demerit points
function speedDetector(speed) {
    // Define the speed limit
    const speedLimit = 70; // Speed limit in km/h

    // Define how many km over the limit corresponds to one demerit point
    const kmPerDemeritPoint = 5; // 5 km/h over the limit results in 1 demerit point

    // Define the maximum number of demerit points before a license suspension
    const maxDemeritPoint = 12; // Maximum allowable demerit points

    // Check if the speed is within the speed limit
    if (speed <= speedLimit) {
        console.log("Ok"); // If speed is within limit, print "Ok"
    } else {
        // Calculate the amount of speed over the limit
        let excessSpeed = speed - speedLimit;

        // Calculate the initial number of demerit points
        let demeritPoints = excessSpeed / kmPerDemeritPoint;

        // If the excess speed does not divide evenly, round down the demerit points
        if (excessSpeed % kmPerDemeritPoint !== 0) {
            demeritPoints = Math.floor(demeritPoints); // Use floor to round down
        }

        // Print the number of demerit points
        console.log("Points:", demeritPoints);

        // Check if the number of demerit points exceeds the maximum allowed
        if (demeritPoints > maxDemeritPoint) {
            console.log("License suspended"); // Print message if license is suspended
        }
    }
}

// Example speed to test the function
let speed = 195; 
speedDetector(speed); // Call the function with the example speed
