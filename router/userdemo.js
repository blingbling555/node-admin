const express = require('express')

const router = express.Router()



router.post('/login', function(req, res, next) {
    console.log(req.body)
    let result = {
        status:200,
        msg:'',
        data:{
            token:""
        }
    }
   
    if(req.body.username == 'admin'){
        result.data.token = 'admintoken'
    }else{
        result.data.token = 'othertoken'
    }
   res.json(result)
})



module.exports = router