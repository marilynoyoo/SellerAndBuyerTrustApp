document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const productDetails = document.getElementById('product-details');
    const productImage = document.getElementById('product-image');
    const productDescription = document.getElementById('product-description');
    const productPrice = document.getElementById('product-price');
    const buyProductButton = document.getElementById('buy-product');
    const closeDetailsButton = document.getElementById('close-details');
    const message = document.getElementById('message');
    const searchInput = document.getElementById('search');
    const toggleThemeButton = document.getElementById('toggle-theme');
    const submitBuyerDetailsButton = document.getElementById('submit-buyer-details');
    const buyerDetailsForm = document.getElementById('buyer-details-form');
    const addProductButton = document.getElementById('add-product');
    const sellerAddProductForm = document.getElementById('seller-add-product-form');

    let products = [];
    let selectedProduct = null;

    // Fetch products from the mock API
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            products = data;
            displayProducts(products);
        })
        .catch(error => console.error('Error fetching products:', error));

    // Display products 
    function displayProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
                <p>${product.name}</p>
            `;
            productDiv.addEventListener('click', () => showProductDetails(product));
            productList.appendChild(productDiv);
        });
    }

    // Show product details
    function showProductDetails(product) {
        selectedProduct = product;
        productImage.src = product.imageUrl;
        productImage.alt = product.name;
        productDescription.textContent = `Description: ${product.description}`;
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;
        productDetails.classList.remove('hidden');
    }

    // Close product details
    closeDetailsButton.addEventListener('click', () => {
        productDetails.classList.add('hidden');
    });

    // Buy product
    buyProductButton.addEventListener('click', () => {
        buyerDetailsForm.classList.remove('hidden');
    });

    // Submit buyer details
    submitBuyerDetailsButton.addEventListener('click', () => {
        const buyerName = document.getElementById('buyer-name').value;
        const buyerContact = document.getElementById('buyer-contact').value;

        if (buyerName && buyerContact) {
            const buyerDetails = {
                name: buyerName,
                contact: buyerContact,
                productId: selectedProduct.id
            };

            fetch('http://localhost:3000/buyers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(buyerDetails)
            })
            .then(response => response.json())
            .then(() => {
                buyerDetailsForm.classList.add('hidden');
                productDetails.classList.add('hidden');
                message.textContent = 'The seller will be in touch soon!';
                message.classList.remove('hidden');
                setTimeout(() => {
                    message.classList.add('hidden');
                }, 1000);
            })
            .catch(error => console.error('Error saving buyer details:', error));
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Search products
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
        displayProducts(filteredProducts);
    });

    // Toggle dark/light mode
    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Add new product
    addProductButton.addEventListener('click', () => {
        const productName = document.getElementById('product-name').value;
        const productDescription = document.getElementById('product-description').value;
        const productPrice = document.getElementById('product-price').value;
        const productImageUrl = document.getElementById('product-image-url').value;

        if (productName && productDescription && productPrice && productImageUrl) {
            const newProduct = {
                name: productName,
                description: productDescription,
                price: parseFloat(productPrice),
                imageUrl: productImageUrl
            };

            fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            })
            .then(response => response.json())
            .then(product => {
                products.push(product);
                displayProducts(products);
                sellerAddProductForm.reset();
                message.textContent = 'Product added successfully!';
                message.classList.remove('hidden');
                setTimeout(() => {
                    message.classList.add('hidden');
                }, 1000);
            })
            .catch(error => console.error('Error adding product:', error));
        } else {
            alert('Please fill out all fields.');
        }
    });
});
