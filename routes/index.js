const express = require('express');
const router = express.Router();

const booksRouter = require('./booksRouter.js');
const authorsRouter = require('./authorsRouter.js');

router.use('/books', booksRouter);
router.use('/authors', authorsRouter);

module.exports = router;