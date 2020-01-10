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

router.post('/getUser',function(req,res){
    let result = {
        status:200,
        msg:'',
        data:{
            name:"",
            roles:[]
        }
    }
    if(req.body.username == 'admin'){
        result.data.name = 'admin'
        result.data.roles = ['admin']

    }else{
        result.data.name = '小瞅瞅';
        result.data.roles = ['book']

    }
    res.json(result)

})

module.exports = router