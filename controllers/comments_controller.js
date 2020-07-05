const Users = require('../models/users');

// @desc get alll transactions
// @route GET /transactions
// @access Public
exports.getUsers = async (req, res, next) => {
    try {
        const users = await Users.findOne({username: 'Martin'});

        let userComments = users.comments;

        return res.status(200).json({
            success: true,
            count: userComments.length,
            data: userComments
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server error"
        });
    }
};

// @desc get alll transactions
// @route POST /transactions
// @access Public
exports.addComment = async (req, res, next) => {
    try{
        const commentUser = await Users.findOne({username: 'Martin'});
        console.log(req.body.date);
        commentUser.comments.push({
            message: req.body.message,
            author: req.body.author,
            commentDate: req.body.date
        });
        console.log(commentUser.comments)
        await commentUser.save();

        return res.status(201).json({
            success: true,
            data: commentUser
        });
    } catch (err) {
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.erros).map((val) = val.messages);

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server error'
            });
        }
    }
}

// @desc get alll transactions
// @route DELETE /transactions/:id
// @access Public
exports.deleteComment = async (req, res, next) => {
    try{
        const commentUser = await Users.findOne({username: 'Martin'});

        if(!commentUser){
            return res.status(404).json({
                success: false,
                error: 'No user found'
            });
        }

        try{
            commentUser.comments = commentUser.comments
            .filter((comment) => {
                return comment._id.toString() !== req.params.id
            });   
        } catch (err) {
            console.log(err);
            console.log("Comment not found.");
        }

        await commentUser.save();

        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}