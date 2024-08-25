const timeoutId = setTimeout(() => {
    console.log("This message will not be logged");
}, 2000);

clearTimeout(timeoutId);
