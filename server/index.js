const express = require("express");
const PORT = 3001;
const app = express();

app.get("/test", (req, res) => {
    res.json({message: "Testing connection"});
})

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`);
});
