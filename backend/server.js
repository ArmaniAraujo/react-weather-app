const express = require("express");
const cors = require("cors");
const app = express();
const axios = require('axios')
require('dotenv').config()

const PORT = 8000

app.use(cors());
app.use(express.json());


// app.get("/message", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${ PORT }.`);
});



app.get('/getcity', (req, res) => {
    console.log('getcity says hi!')
})
//     console.log('getting city...')
//     const latitude = 43.595310   
//     const longitude = -79.640579
//     const appid = 'c9fb87ec5bad0d4dd7570738d7461030'
    
//     const options = {
//         method: 'GET',
//         // url: `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${appid}`,
//         url: `http://google.ca`
//     }
    
//     console.log('code is...' + process.env.API)
//     // const params = new URLSearchParams([['lat', latitude], ['lon', longitude], ['appid', process.env.API], ['limit', 1]])
//     //const resp = axios.get(options)

// })