let list : number[] = [1,2,3];

list.push(4);
// list.push('5')


let list2 : Array<number> = [1,2,3];

list2.push(4);


interface List {
    [index: number]: number|string
}

let list4 : List = [1,2,3,'4'];

