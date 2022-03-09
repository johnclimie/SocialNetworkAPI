const { Thought, User } = require('../models');

module.exports = {
    // Gets all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    // Gets individual thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) => 
                !thought
                    ? res.status(404).json({ message: 'No thought with this ID'})
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Creates a new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then((user) => 
                !user
                    ? res.status(404).JSON({
                        message: 'Thought created, but found no user with this ID',
                        })
                    : res.json('Thought has been created')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    },

    // Updates an existing thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((video) => 
            !video
                ? res.status(404).json({ message: 'No thought with this ID' })
                : res.json(video)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    }
}