exports.addPlayerToQueue = (req, res)=>{
    res.send({name:'enterToTheQueue'},200);
}

exports.removePlayerFromQueue = (req, res)=>{
    res.send({name:'LeaveQueue'},200);
}