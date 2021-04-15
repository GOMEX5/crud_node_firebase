const {Router} = require('express');
const crud = require('../controllers/crud');
const router = Router();


router.get('/',crud.home);
router.get('/insertar',crud.insertar);

router.post('/new-contact',crud.insert);

router.get('/delete-contact/:id',crud.delete);



module.exports = router;