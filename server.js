const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/proxy/:refNum', async (req, res) => {
    const refNum = req.params.refNum;
    const url = `https://x1.cardknox.com/report/rptpwd/${refNum}`;

    try {
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from API');
    }
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
