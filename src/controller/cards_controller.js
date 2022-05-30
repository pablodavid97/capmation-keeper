const config = require('config');

const cardsController = (Card) => {
    const { host, port } = config.get('server');

    const post = (req, res) => {
        const card = new Card(req.body);
        if (!req.body.title) {
            return res.status(400).send("Invalid Input: Card Title is required.");
        }
        card.save();

        res.status(201);
        return res.json(card);
    }

    const get = (req, res) => {
        const query = {};

        Card.find(query, (err, cards) => {
          if (err) {
            return res.send(err);
          }

          const returnCards = cards.map((card) => {
            const newCard = card.toJSON();
            newCard.links = {};
            newCard.links.self = `${host}:${port}/api/cards/${card._id}`;
            return newCard;
          });
          return res.json(returnCards);
        });
      };

    return { post, get };
}

module.exports = cardsController;