// Requires User model
const User = require('../models/User');

// Exports controller functions
module.exports = {
    // Gets all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    // Gets individual user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) => 
                !user
                    ? res.status(404).json({ message: 'No user with this ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Creates a new user
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },

    // Updates an existing user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) => 
            !user
                ? res.status(404).json({ message: 'No user with this ID' })
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    //Deletes a user
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) => 
                !user
                    ? res.status(404).json({ message: 'No user with this ID' })
                    : res.json({ message: 'User successfully deleted' })
            )
            .catch((err) => res.status(500).json(err));
    },

    // Adds a new friend to a user's friend list
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        )
        .then((user) => 
            !user
                ? res.status(404).json({ message: 'No user with this ID' })
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    // Deletes a friend from a user's friend list
    deleteFriend(req, res) {
        User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: { friendId: req.params.friendId } } },
                { runValidators: true, new: true }
            )
            .then((user) => 
                !user
                    ? res.status(404).json({ message: 'No user with this id'})
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    }
};