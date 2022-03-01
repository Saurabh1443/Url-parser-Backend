const express = require('express');
const cors = require('cors');
const app = express();
const metascraper = require('metascraper')([
    require('metascraper-author')(),
    require('metascraper-description')(),
    require('metascraper-title')(),
    require('metascraper-image')(),
    require('metascraper-url')(),
    
  ])
  const got = require('got')
app.use(express.json());
app.use(cors());

app.post('/url_parser',async(req,res)=>{
  
    try{
        const { body: html, url } = await got(req.body.uri)
        const metadata = await metascraper({ html, url})
        return res.json({metadata})
    }catch(err){
        console.log(err);
    }

})

app.listen(process.env.Port || 5001);