const getHerName = (name) => {
    return `Her name is ${name}`
};

async function isAsyncWorks() {
    return `async function works !!!`;
}

isAsyncWorks().then(console.log);



console.log(getHerName("Amanda"));