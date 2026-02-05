const Dish = require('../models/Dish');
const stripe = require('stripe')(process.env.STRIPE_KEY);

exports.getAllDishes = async (req, res) => {
        try {
        const dishes = await Dish.find({});
        return res.status(200).json({ dishes });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener los platos', 
            error: error.message,
        });
    }
}

exports.createDish = async (req, res) => {
        try {
        const { name, price, description, img, currency, slug, region } = req.body;
        const product = await stripe.products.create({
            name,
            description,
            images: [img],
            metadata: {
                productDescription: description,
                slug
            }
        });

        const stripePrice = await stripe.prices.create({
            unit_amount: price,
            currency,
            product: product.id
        });

        const newDish = await Dish.create({
            idProd: product.id,
            priceID: stripePrice.id,
            name,
            price,
            description,
            img,
            currency,
            slug,
            region
        });

        if (!newDish) return res.status(400).json({ error: 'No fue posible crear el plato' });

        return res.status(201).json({ datos: newDish });

    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al crear el plato',
            error: error.message,
        });
    }
}

exports.updateDishById = async (req, res) => {
        try {
        const { name, price, description } = req.body;
        const updatedDish = await Dish.findByIdAndUpdate(
            req.params.id,
            { name, price, description },
            { new: true, runValidators: true }
        );
        if (!updatedDish) return res.status(404).json({ message: 'Plato no encontrado' });
        return res.status(200).json({ platoActualizado: updatedDish });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al actualizar el plato',
            error: error.message,
        });
    }
}

exports.deleteDishById = async (req, res) => {
        try {
        const deletedDish = await Dish.findByIdAndDelete(req.params.id);
        if (!deletedDish) return res.status(404).json({ message: 'Plato no encontrado' });
        return res.status(200).json({ message: 'Plato eliminado correctamente' });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al eliminar el plato',
            error: error.message,
        });
    }
}

exports.getDishesByRegion = async (req, res) => {
        try {
        const { region } = req.params;
        const validRegions = ['Norte', 'Noreste', 'Centro-Oeste', 'Sudeste', 'Sur'];
        
        if (!validRegions.includes(region)) {
            return res.status(400).json({ 
                message: 'Región inválida. Regiones válidas: ' + validRegions.join(', ')
            });
        }
        
        const dishes = await Dish.find({ region });
        return res.status(200).json({ dishes });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener los platos por región',
            error: error.message,
        });
    }
}
