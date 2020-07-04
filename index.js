const express = require('express');
const cron = require('node-cron');


// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {

  //execute every 1 min
  cron.schedule('*/1 * * * *', function(){
          console.log('done')
  });

  res.json({data: "Running cron"});
});

app.listen(PORT);
console.log(`Running on http://localhost}:${PORT}`);
