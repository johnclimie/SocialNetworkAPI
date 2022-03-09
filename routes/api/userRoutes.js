// Uses express to route server
const router = require('express').Router();

// Controllers from userControllers
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// Uses controllers for /api/users
router.route('/')
    .get(getUsers)
    .post(createUser);

// Uses controllers for /api/users/:userId
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// Uses controllers for /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)
    
// Exports router
module.exports = router;