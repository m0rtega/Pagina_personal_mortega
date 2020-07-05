const express = require('express');
const router = express.Router();
const { getUsers, addComment, deleteComment } = require('../controllers/comments_controller');

router
    .route('/')
    .get(getUsers)
    .post(addComment);

router
    .route('/:id')
    .delete(deleteComment);

module.exports = router;