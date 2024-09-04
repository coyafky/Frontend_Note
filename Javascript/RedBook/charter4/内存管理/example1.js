function createPerson(name){
    let localPerson = new Object();
    localPerson.name =name;
    return localPerson;
}


let globalPerson = createPerson('coco');

// 解除glovalPerson对值的引用

globalPerson = null;

