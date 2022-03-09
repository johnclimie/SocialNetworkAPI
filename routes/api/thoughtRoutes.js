// Uses express to route server
const router = require('express').Router();

// Controllers from thoughtControllers
const {
        getThoughts,
        getSingleThought,
        createThought,
        updateThought,
        deleteThought,
        addThoughtReaction,
        deleteThoughtReaction
} = require('../../controllers/thoughtController');

// Uses controllers for /api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThought);

// Uses controllers for /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// Uses controller for /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(addThoughtReaction);

// Uses controller for /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteThoughtReaction);

// Exports router
module.exports = router;