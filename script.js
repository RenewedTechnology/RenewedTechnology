// تحميل المنتجات من localStorage
function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
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

// إضافة منتج جديد إلى localStorage
document.getElementById('addProductForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;
    const price = document.getElementById('productPrice').value;
    const imageInput = document.getElementById('productImage');

    if (imageInput.files.length === 0) {
        alert('يرجى اختيار صورة للمنتج.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const imageBase64 = event.target.result;

        const products = JSON.parse(localStorage.getItem('products')) || [];
        products.push({ name, description, price, image: imageBase64 });
        localStorage.setItem('products', JSON.stringify(products));

        alert('تم إضافة المنتج بنجاح!');
        e.target.reset();
        loadProducts(); // إعادة تحميل المنتجات
    };

    reader.readAsDataURL(imageInput.files[0]);
});

// الانتقال إلى صفحة الشراء
function buyProduct(productName) {
    window.open(`https://iwtsp.com/966550345024?text=أرغب في شراء المنتج: ${productName}`, '_blank');
}

// تحميل المنتجات عند فتح الصفحة
loadProducts();
