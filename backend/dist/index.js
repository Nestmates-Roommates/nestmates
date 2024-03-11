import express from 'express';
const app = express();
const PORT = 5000;
// Routes
app.get('/', (req, res) => {
    console.log("attached");
    res.send('Heell023o Wrld!');
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is runwg on http://localhost:${PORT}`);
});
