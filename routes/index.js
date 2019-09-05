const router = require('express').Router();
const upload = require('../middlewares/uploadMiddleware');
const resize = require('../middlewares/resize.js');
const path   = require('path');

router.get('/', async function (req, res) {
    await res.render(
        'index', {
            title: 'Hello from Pug',
            message: {
                title: "Hello World!",
                mes:   "Node Express Image Upload and Resize Example"
            },
        });
});

router.post('/post', upload.single('image'), async function (req, res) {
    const imagePath = path.join(__dirname, '../public/images');
    const fileUpload = new resize(imagePath);
    if (!req.file) {
        return res.status(401).json({error: 'Please provide an image'});
    }
    const filename = await fileUpload.save(req.file.buffer);
    return res.status(200).json({name: filename});
});

module.exports = router;