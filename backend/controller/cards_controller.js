const cardsController = (Card) => {

    const post = (req, res) => {
        const card = new Card(req.body);
        if (!req.body.title) {
            return res.status(400).send("Invalid Input: Card Title is required.");
        }
        console.log('JD -- HELLO --');
        console.log(card);
        card.save();
        res.status(201);
        return res.json(card);
    }

    return { post };
}

module.exports = cardsController;