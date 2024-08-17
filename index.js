// Code your solution here
const drivers = ['Sammy', 'Sarah','Sally']

function findMatching (drivers, found) {
    return drivers.filter( 
        (possibleMatch) => possibleMatch.toLowerCase() === found.toLowerCase()
    );
}

function fuzzyMatch (drivers, testString) {
    return drivers.filter(
        (driver => 
            driver.toLowerCase().startsWith(testString.toLowerCase())));
}

function matchName (drivers, foundName) {
    return drivers.filter((record) => record.name === foundName);
}