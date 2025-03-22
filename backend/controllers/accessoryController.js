import { sql } from '../config/db.js';

export const getAllAccessories = async (req, res) => {
    try {
        const accessories = await sql`
            SELECT * FROM accessories
            ORDER BY createdAt DESC
        `;
        console.log("Fetched accessories:", accessories);
        res.status(200).json({ success: true, data: accessories });
    } catch (error) {
        console.error("Error fetching accessories:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const createAccessory = async (req, res) => {
    const { brand, name, image, price, size, inStock, description } = req.body;

    if (!brand || !name || !image || !price || !size || !inStock || !description) {
        return res.status(400).json({ success: false, message: "Please provide all required fields" });
    }

    try {
        const newAccessory = await sql`
            INSERT INTO accessories (brand, name, image, price, size, inStock, description)
            VALUES (${brand}, ${name}, ${image}, ${price}, ${size}, ${inStock}, ${description})
            RETURNING *
        `;
        console.log("Created accessory:", newAccessory);
        res.status(201).json({ success: true, data: newAccessory[0] });
    } catch (error) {
        console.error("Error creating accessory:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const getAccessoryById = async (req, res) => {
    const { id } = req.params;

    try {
        const accessories = await sql`
            SELECT * FROM accessories
            WHERE id = ${id}
        `;
        res.status(200).json({ success: true, data: accessories[0] });
    } catch (error) {
        console.error("Error fetching accessory by ID:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updateAccessory = async (req, res) => {
    const { id } = req.params;
    const { brand, name, image, price, size, inStock, description } = req.body;
    try {
        const updatedAccessory = await sql`
            UPDATE accessories
            SET brand = ${brand}, name = ${name}, image = ${image}, price = ${price}, size = ${size}, inStock = ${inStock}, description = ${description}
            WHERE id = ${id}
            RETURNING *
        `;
        if (updatedAccessory.count === 0) {
            return res.status(404).json({ success: false, message: "Accessory not found" });
        }
        console.log("Updated accessory:", updatedAccessory[0]);
        res.status(200).json({ success: true, data: updatedAccessory[0] });
    } catch (error) {
        console.log("Error updating accessory:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const deleteAccessory = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAccessory = await sql`
            DELETE FROM accessories
            WHERE id = ${id}
            RETURNING *
        `;
        if (deletedAccessory.count === 0) {
            return res.status(404).json({ success: false, message: "Accessory not found" });
        }
        console.log("Deleted accessory:", deletedAccessory[0]);
        res.status(200).json({ success: true, message: "Accessory deleted" });
    } catch (error) {
        console.error("Error deleting accessory:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};