const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const usersSchema = mongoose.Schema({
    officename:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true,
        unique: true
    },
    account_created:{
        type:String,
        default:Date.now()
    }
})


usersSchema.pre('save',function(next){
    let user = this
    if(!user.isModified('password')) return next()
    bcrypt.genSalt(10,function(err,salt){
        if(err) return next(err)

        bcrypt.hash(user.password,salt,function(err,hash){
            if(err) return next(err)
            user.password = hash
            next()
        })
    })
})

usersSchema.methods.comparePassword = function(candidatePassword,cb) {
    bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
        if(err) return cb(err)
        cb(null,isMatch)
    })
}


const usersModel = mongoose.model('users',usersSchema)

module.exports = usersModel