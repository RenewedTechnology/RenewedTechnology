// تحميل المنتجات من localStorage
function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    
    // إذا كانت المنتجات فارغة، نقوم بتخزين منتجات تجريبية
    if (products.length === 0) {
        const defaultProducts = [
            {
                name: "منتج 1",
                description: "وصف المنتج 1",
                price: "100",
                image: "https://via.placeholder.com/150"
            },
            {
                name: "منتج 2",
                description: "وصف المنتج 2",
                price: "200",
                image: "https://via.placeholder.com/150"
            }
        ];
        localStorage.setItem('products', JSON.stringify(defaultProducts));
        products.push(...defaultProducts);
    }

    displayProducts(products);
}

// عرض المنتجات في الصفحة
function displayProducts(products) {
    const container = document.querySelector('.products-container');
    container.innerHTML = ''; // تفريغ الحاوية
    products.forEach(product => {
        container.innerHTML += `
            <div class="product">
                <img class="product-image" src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>${product.price} ريال</p>
                <button onclick="buyProduct('${product.name}')">شراء</button>
            </div>
        `;
    });
}

// الانتقال إلى صفحة الشراء
function buyProduct(productName) {
    window.open(`https://iwtsp.com/966550345024?text=أرغب في شراء المنتج: ${productName}`, '_blank');
}

// تحميل المنتجات عند فتح الصفحة
loadProducts();
