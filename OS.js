const os = require('os')
// console.log(os.platform());

// console.log(os.release());
let x = [], y = {};
[{ _id: 1231, name: "John1" },
{ _id: 1232, name: "John2" },
{ _id: 1233, name: "John3" },
{ _id: 1234, name: "John4" },
{ _id: 1235, name: "John5" },
{ _id: 1236, name: "John6" },
{ _id: 1237, name: "John7" },
].forEach(async (ds) => {
    y.id = ds._id
    y.label = ds.name
    y.value = ds.name
    console.log(y)
    await x.push(y)
    // y={}
})
console.log(x, y)


