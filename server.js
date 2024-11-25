const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static(__dirname)); // لتقديم الملفات الثابتة

// عرض المنتجات
app.get('/products', (req, res) => {
    fs.readFile('products.json', (err, data) => {
        if (err) res.status(500).send('Error reading products.');
        else res.json(JSON.parse(data));
    });
});

// تحديث المنتجات
app.post('/update-products', (req, res) => {
    const newProduct = req.body;

    fs.readFile('products.json', (err, data) => {
        if (err) res.status(500).send('Error reading products.');
        else {
            const products = JSON.parse(data);
            products.push(newProduct);
            fs.writeFile('products.json', JSON.stringify(products, null, 2), err => {
                if (err) res.status(500).send('Error writing products.');
                else res.send('Product added successfully.');
            });
        }
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
