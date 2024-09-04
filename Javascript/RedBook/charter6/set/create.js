const componies = new Set()
console.log(componies); // Set(0) {}







// 从数组中创建集合

const languages = ["JavaScript", "Python", "Java"];
const languageSet = new Set(languages);
console.log(languageSet); // Set(3) {"JavaScript", "Python", "Java"}

for(const language of languageSet) {
    console.log(language);
}

// Adding an element to a set


const languageSet2 = new Set();
console.log(languageSet2.size);
languageSet2.add("JavaScript");
languageSet2.add("Python");
languageSet2.add("Java");
console.log(languageSet2); // Set(3) {"JavaScript", "Python", "Java"}
console.log(languageSet2.size); // 3

// se loop to add element to set

const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']


const companySet = new Set();
console.log(companySet);

for(const company of companies) {
    companySet.add(company);
    console.log(companySet);
}
// ### Deleting an element a set