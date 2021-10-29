const router=require('express').Router()
const controller = require('./controller')

router.post('/login',controller.login)
router.post('/register',controller.register)
router.post('/getprofile',controller.getProfile)
router.get('/getusers',controller.getusers)
router.get('/:id',controller.getuserid)
router.delete('/:id',controller.deleteuserid)
router.put('/:id',controller.updateuserid)

module.exports = router