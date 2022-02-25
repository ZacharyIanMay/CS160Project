const path = require('path');
const express = require("express");
const PORT = 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/test", (req, res) => {
    res.json({message: "Testing connection"});
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`);
});
