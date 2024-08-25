console.log('Start');

setTimeout(()=>{
    console.log('SetTimeout');
},1000)

Promise.resolve().then(()=>{
    console.log('Promise');
})

console.log('End');

// Start
// End
// Promise
// setTimeout