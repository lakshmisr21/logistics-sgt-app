const model = require('./model')
const postModel = require('../post/model')
const jwt = require('jsonwebtoken')
module.exports={
    login:(req,res)=>{
        model.findOne({mobile:req.body.mobile},(err,user)=>{
            if(err) throw err
            user.comparePassword(req.body.password,(err,isMatch)=>{
                if(err) throw err
                if(isMatch){
                    let token = jwt.sign({id: user._id},process.env.secret,{expiresIn: 86400})
                    res.status(200).send({auth: true, token})
                    return
                }
                res.status(401).send({auth: false, msg: 'Incorrect Credentials'})
            })
        })        
    },
    register:(req,res)=>{

        let newUser = new model({
        name:req.body.name,
        officename:req.body.officename,
        password:req.body.password,
        mobile:req.body.mobile,
        place:req.body.place
        })
        newUser.save()
        .then(result=>{
            console.log(result)
            res.status(200).send({msg:'Register Successful',user_id:result._id})
        }).catch(err=>{
            console.log(err)
            res.status(401).send({msg:'Register Unsuccessful'})
        })
    },

    getusers: (req,res) =>{
        model.find()
        .then(result =>{           
            res.send(result)           
        })
    },

    getuserid:(req,res) =>{
        model.findById(req.params.id)
        .then(result =>{           
            res.send(result)           
        })
    },

    deleteuserid:async (req,res) =>{
               try {
            res.status(200).json((await model.findByIdAndDelete(req.params.id)))
         } catch (e) {
             res.status(500).json(e)
             console.log(e)
         }
    },

    updateuserid:async (req,res)=>{
       // model.findByIdAndUpdate((req.params.id))
       //.then(result =>{           
           // res.send(result)           
        //})

        try {
            const {
                name,
                officename,
                mobile,
                password,
                place,
            } = req.body
            res.status(200).json((await model.findByIdAndUpdate(req.params.id, {
                name,
                officename,
                mobile,
                password,
                place
            })))
        } catch (e) {
            res.status(500).json(e)
        }
    },

    //Profile Controller
    getProfile: (req,res) => {
        let user_id = jwt.decode(req.body.auth_token).id
        model.findById(user_id)
        .then(user => {
            if(!user){
                res.send({success: false, msg: "User not found"})
            }
            postModel.find({user_id: user_id})
            .then(posts => {
                res.send({
                    success: true, 
                    details: {
                        display_name: user.officename + ' : ' +
                        user.name,
                        posts: posts
                    }
                })
            })
        })
    }

   
}