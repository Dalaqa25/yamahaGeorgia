import { sql } from '../config/db.js';

export const getAllProducts = async (req, res) => {
    try {
        const motorcycles = await sql`
            SELECT * FROM motorcycles
            ORDER BY createdAt DESC
        `;
        console.log("Fetched motorcycles:", motorcycles);
        res.status(200).json({ success: true, data: motorcycles });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const createProduct = async (req, res) => {
    const { brand, name, image, price, engine, inStock, transmission, year, description } = req.body;

    if (!brand || !name || !image || !price || !engine || !inStock || !transmission || !year || !description) {
        return res.status(400).json({ success: false, message: "Please provide all required fields" });
    }

    try {
        const newProduct = await sql`
            INSERT INTO motorcycles (brand, name, image, price, engine, inStock, transmission, year, description)
            VALUES (${brand}, ${name}, ${image}, ${price}, ${engine}, ${inStock}, ${transmission}, ${year}, ${description})
            RETURNING *
        `;
        console.log("Created product:", newProduct);
        res.status(201).json({ success: true, data: newProduct[0] });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const motorcycles = await sql `
            SELECT * FROM motorcycles
            WHERE id = ${id}
        `;
        res.status(200).json({ success: true, data: motorcycles[0] });
    } catch (error) {
        console.error("Error fetching product Id:", error);
        res.status(500).json({ success: false, message: "Server Error" });
        
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { brand, name, image, price, engine, inStock, transmission, year, description } = req.body;
    try {
        const updatedProduct = await sql `
            UPDATE motorcycles
            SET brand = ${brand}, name = ${name}, image = ${image}, price = ${price}, engine = ${engine}, inStock = ${inStock}, transmission = ${transmission}, year = ${year}, description = ${description}
            WHERE id = ${id}
            RETURNING *
        `;
        if (updatedProduct.count === 0) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        console.log("Updated product:", updatedProduct[0]);

    } catch (error) {
        console.log("Error updating product:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await sql `
            DELETE FROM motorcycles
            WHERE id = ${id}
            RETURNING *
        `;
        if (deletedProduct.count === 0) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        console.log("Deleted product:", deletedProduct[0]);
        res.status(200).json({ success: true, message: "Product deleted" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}