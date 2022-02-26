const express = require('express');
const router = express.Router();
const Member = require('./models/members');

// get all members
router.get('/members', async(req, res) => {
    const allMembers = await Member.find();
    console.log(allMembers);
    res.send(allMembers);
});

module.exports = router;
