const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(cors());

const port = process.env.PORT || 3000;

//routes
const queueRouteConfig = require('./queue/queue.route');

//use routes
queueRouteConfig.routesConfig(app)

app.listen(port, ()=>{
    console.log(`server listen in port ${port}`);
})