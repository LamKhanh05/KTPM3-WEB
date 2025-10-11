const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

if (require.main === module) {
    const port = process.env.PORT || 8080;
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

module.exports = app;
