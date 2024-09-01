function createPerson(name) {
  let localPerson = new Object();
  localPerson.name = name;
  return localPerson;
}
let globalPerson = createPerson("Nicholas"); // 解除globalPerson对值的引用 globalPerson = null;
