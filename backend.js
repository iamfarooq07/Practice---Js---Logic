import express from "express"

const app = express();
const PORT = 5000;

const checkKey = (req, res, next) => {
    const apiKey = req.headers['apni-key'];
    console.log(apiKey);


    if (apiKey === '12345') {
        next()
    } else {
        res.status(401).send("Access Denied: Galat Key hai!");
    }
};

app.get("/", checkKey, (req, res) => {
    res.send("Ye secret data hai!");
});

app.listen(PORT, () => { console.log("Server Listen Connection on port 5000") })