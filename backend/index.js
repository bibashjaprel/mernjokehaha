
const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
const PORT=process.env.PORT;


app.get('/api/quotes',async(req,res)=>{
    try {
        const response = await axios.get('https://famous-quotes4.p.rapidapi.com/random', {
          headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
          },
          params: {
            category: 'all',
            count: '1'
          }
        });
        res.json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
})
app.listen(PORT, () => {
    console.log(`Server starting on port http://localhost:${PORT}`);
});
