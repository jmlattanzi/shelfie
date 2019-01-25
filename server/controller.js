module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).send('Error with GET'))
    },

    createProduct: (req, res) => {
        const db = req.app.get('db')

        db.create_product([req.body.name, req.body.price, req.body.imgurl])
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).send('Error with POST'))
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')

        db.delete_product(req.params.id)
            .then((data) => res.sattus(200).json(data))
            .catch((err) => res.status(500).json('Error with DELETE'))
    },

    editProduct: (req, res) => {
        const db = req.app.get('db')
    },
}
