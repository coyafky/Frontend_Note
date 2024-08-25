function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result4 = buildName("Bob");  // works correctly now
let result5 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result6 = buildName("Bob", "Adams");  // ah, just right