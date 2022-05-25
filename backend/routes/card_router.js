const cardController = require('../controller/cards_controller');
const express = require('express');

const routes = (Card) => {
    const cardRouter = express.Router();
    const controller = cardController(Card);

    cardRouter.route('/card').post(controller.post);

    return cardRouter;
}

module.exports = routes;

