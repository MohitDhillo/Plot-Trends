const express = require('express');
const cors = require('cors');
const googleTrends = require('google-trends-api');
const app = express();
const port = 3004;

app.use(cors());

app.get('/api/trends', async (req, res) => {
    const key = req.query.keyword;
    try {
        const result = await googleTrends.interestOverTime({ keyword:key });
        // const jsoned = JSON.parse(result);
        // const timelineData = jsoned.default.timelineData;
        //
        // const values = timelineData.map(item => ({
        //     timestamp: new Date(item.formattedTime).getTime(),
        //     value: item.value[0],
        // }));
        // console.log(json);
        res.send(result);
    } catch (error) {
        // console.log(error);

        res.status(500).json({ error: 'Error fetching Google Trends data' });
    }
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});