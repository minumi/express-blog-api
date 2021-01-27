import express from 'express';

const app = express();

const PORT = process.env.PORT || 8080;

app.get('**', (req, res) => {
    res.json({ok: true});
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});

