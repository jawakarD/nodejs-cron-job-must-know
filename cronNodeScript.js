const cron = require('node-cron');

//execute every 1 min
cron.schedule('*/1 * * * *', function(){
        console.log('done')
});
