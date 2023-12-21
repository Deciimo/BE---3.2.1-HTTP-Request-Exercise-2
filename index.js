import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("<h1>Hello World</h1> <br> use /contact  and /about for more info")
});

app.get("/contact", (req,res) => {
    res.send("Contact me @ 'roddelfinado240@gmail.com'")
});

app.get("/about", (req,res) => {
    res.send("I wanna be the very best like no one ever was.")
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
});