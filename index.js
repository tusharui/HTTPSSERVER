const express = require("express");
const app = express();
app.use(express.json());

function middleware(req, res, next) {
    console.log("Method: " + req.method);
    console.log("Protocol: " + req.protocol);
    console.log("Time: " + new Date().toISOString());
    console.log("URL: " + req.protocol + "://" + req.get('host') + req.originalUrl);
    next();
}
app.use(middleware);

function parseNumbers(req) {
    return [parseInt(req.query.a), parseInt(req.query.b)];
}

app.get('/sum', (req, res) => {
    const [a, b] = parseNumbers(req);
    res.json({ ans: a + b });
});

app.get('/multiply', (req, res) => {
    const [a, b] = parseNumbers(req);
    res.json({ ans: a * b });
});

app.get('/divide', (req, res) => {
    const [a, b] = parseNumbers(req);
    if (b === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }
    res.json({ ans: a / b });
});

app.get('/subtract', (req, res) => {
    const [a, b] = parseNumbers(req);
    res.json({ ans: a - b });
});

app.get('/power', (req, res) => {
    const [a, b] = parseNumbers(req);
    res.json({ ans: Math.pow(a, b) });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
