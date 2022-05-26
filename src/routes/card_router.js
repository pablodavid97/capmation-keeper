const cardController = require('../controller/cards_controller');
const express = require('express');

const routes = Card => {
    const cardRouter = express.Router();
    const controller = cardController(Card);
    cardRouter.route('/cards').post(controller.post).get(controller.get);

    cardRouter.use('/cards/:cardId', (req, res, next) => {
        Card.findById(req.params.cardId, (err, card) => {
            if (err) {
                return res.send(err);
            }

            if (card) {
                req.card = card;
                return next();
            }
            return res.sendStatus(404);
        });
    });
    cardRouter.route('/cards/:cardId')
        .get((req, res) => {
            const returnCard = req.card.toJSON();
            res.json(returnCard);
        })
        .delete((req, res) => {
            req.card.remove(err => {
                if (err) {
                    return res.send(err);
                }
                return res.sendStatus(204);
            });
        });

    return cardRouter;
};

module.exports = routes;
