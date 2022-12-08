const express = require('express');
const app = express();


app.get("/isci", (req, res) => {
    let array = [
    { id: 1, name: 'Gozel', age: '19' },
    { id: 2, name: 'Mehemmed', age: '20' },
    { id: 3, name: 'Fidan', age: '19' }];
    res.json(array)
})


app.listen(3000, () => {
    console.log("Server started on 3000 port")
})

