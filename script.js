// تحميل المنتجات من URL
function loadProducts() {
    const productsUrl = 'https://raw.githubusercontent.com/RenewedTechnology/RenewedTechnology/main/products.json';

    fetch(productsUrl)
        .then(response => response.json())
        .then(products => {
            displayProducts(products);
        })
        .catch(error => {
            console.error("فشل تحميل المنتجات:", error);
        });
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
