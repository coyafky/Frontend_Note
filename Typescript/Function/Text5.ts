function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result7 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result8 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
let result9 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result10 = buildName("Bob", "Adams");         // ah, just right