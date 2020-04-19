const pollsRouter = require('express').Router()


const polls = [
  {
    "question": "Cuál es tu framework favorito?",
    "answers": [
      {
        "id": 6,
        "label": "React"
      }
    ],
    "votes": [
      {
        "id": 7,
        "user_id": 3,
        "answer_id": 4,
        "poll_id": 5
      }
    ]
  }
]

pollsRouter.get('/', (req, res) => {
  res.json(polls)
})

pollsRouter.post('/', (req, res) => {
  const poll = req.body
  console.log('Poll received', poll);
  polls.push( poll )
  res.json(polls)
})


module.exports = pollsRouter