const express = require('express');
const router = express.Router();

// Load event model
const Event = require('../../models/Event');

router.get('/test', (req, res) => res.send('event route testing!'));


router.get('/', (req, res) => {
  Event.find()
    .then(Events => res.json(Events))
    .catch(err => res.status(404).json({ noeventsfound: 'No Events found' }));
});


router.get('/:id', (req, res) => {
  Event.findById(req.params.id)
    .then(Event => res.json(Event))
    .catch(err => res.status(404).json({ noeventsfound: 'No Event found' }));
});


router.post('/', (req, res) => {
  Event.create(req.body)
    .then(Event => res.json({ msg: 'Event added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this event' }));
});


router.put('/:id', (req, res) => {
  Event.findByIdAndUpdate(req.params.id, req.body)
    .then(event => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Event.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: 'Event deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such an event' }));
});

module.exports = router;