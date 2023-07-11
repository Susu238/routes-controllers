const express =require ('express')
const router = express.Router()
const noteController = require('../controllers/Note')
router.get('/Note',noteController.getAllNote)
router.post('/Note',noteController.newNote)
router.delete('/Note',noteController.deleteAllNote)
router.get('/Note/:name' , noteController.getOneNote)
router.post('/Note/:name' , noteController.newComment)
router.delete('/Note/:name' , noteController.deleteOneNote)


module.exports = router;