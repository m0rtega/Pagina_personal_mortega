const assert = require('assert');
const pageUser = require("../models/users.js");

describe('tests', () => {
    //Create tests
    let newPageUser;

    beforeEach((done) => {
        newPageUser = new pageUser({
            username: "Martin",
            password: "NichiMatoi",
            comments: []
        });

        newPageUser.save().then(() => {
            assert(newPageUser.isNew === false);
            done();
        });
    });

    //Find test
    it('Finds user by username', (done) => {
        pageUser.findOne({username: "Martin"}).then((result) => {
            assert(result.username === "Martin");
            done();
        });
    });

    it('Finds user by id', (done) => {
        pageUser.findOne({_id: newPageUser._id}).then((result) => {
            assert(result._id.toString() === newPageUser._id.toString());
            done();
        });
    });

    it('Deletes user', (done) => {
        pageUser.deleteOne({_id: newPageUser._id}).then((result) => {
            pageUser.findOne({_id: result._id}).then((result) => {
                assert(result === null);
                done();
            })
        });
    });

    it('Update user', (done) => {
        pageUser.findOneAndUpdate({_id: newPageUser._id}, {username: "Martin", password: "NichiMatoi", comments: []}).then((result) => {
            pageUser.findOne({_id: result._id}).then((result) => {
                assert(result.username === "Martin");
                done();
            })
        });
    });
});