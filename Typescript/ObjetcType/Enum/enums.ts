enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

let day: Days = Days.Friday;
console.log(day) // 5

console.log(Days[day]);

console.log(Days[Days.Friday]); // Fridiy

