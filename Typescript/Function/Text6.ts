function buildName(firstName: string,lastName="zhangshan" , ...restOfName: string[]) {
    return firstName + " " + lastName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

console.log(employeeName);