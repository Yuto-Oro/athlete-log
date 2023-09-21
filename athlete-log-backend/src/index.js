const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api', (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
