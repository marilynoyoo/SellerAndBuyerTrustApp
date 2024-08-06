# SellerAndBuyerTrustApp
# Overview
SellerAndBuyerTrustApp is a web application designed to facilitate interactions between buyers and sellers. The application allows sellers to add new products, while buyers can search for products, view details, and make purchases. Additionally, users can toggle between dark and light modes for a personalized experience.

# Features
Search Products: Users can search for products by entering keywords.
Dark/Light Mode: A button to toggle between dark and light themes for better readability.
Product Details: View detailed information about a product including description and price.
Buy Products: Option for buyers to purchase products.
Buyer Details Form: Collects buyer information before purchase.
Add New Product: Sellers can add new products to the inventory with details such as name, description, price, and image URL.
Getting Started
To get started with SellerAndBuyerTrustApp, follow these instructions.

# Prerequisites
A modern web browser (e.g., Chrome, Firefox, Safari).
Basic knowledge of HTML, CSS, and JavaScript.
Installation
Clone the Repository

# bash
Copy code
git clone https://github.com/marilynoyoo/SellerAndBuyerTrustApp.git
Navigate to the Project Directory

# bash
Copy code
cd SellerAndBuyerTrustApp
Setup Dependencies

If your project uses npm or other package managers for dependencies, install them. If not, ensure you have the required CSS and JavaScript files.

Open the Project

Open index.html in your preferred web browser.

# Usage
Search Products: Use the search bar to find products.
Toggle Dark/Light Mode: Click the "Toggle Dark/Light Mode" button to switch themes.
View Product Details: Click on a product to view its details.
Buy Product: After viewing details, click the "Buy Product" button.
Submit Buyer Details: Fill in the form and click "Submit" to complete the purchase.
Add Product: Sellers can add new products using the "Add New Product" form.
# Files
index.html: The main HTML file for the application.
index.css: Stylesheet for styling the application.
index.js: JavaScript file for handling application logic.

# CSS FUCTIONALITY
# Overview
This document provides an overview of the styling for the SellerAndBuyerTrustApp. The app features a clean and responsive design with support for dark and light modes, designed to enhance user experience.

# CSS Styles
Global Styles
Body
Light Mode: Background color is #f5f5f5 with black text.
Dark Mode: Background color switches to #333 with white text.
Font: Arial, sans-serif.
Font Size: 16px.
Line Height: 1.5.
Text Alignment: Centered.
Margin and Padding: Set to 0.
Container
Padding: 20px.
Centering: Content is centered within the container.
Hidden Elements
Display: Set to none to hide elements.
Buttons
Margin: 10px around buttons.
Padding: 10px for the button text.
Product List
Display: Flexbox for a responsive layout.
Flex Wrap: Wraps items to fit the container.
Justify Content: Centered alignment of items.
Product Items
Border: 1px solid #ddd.
Padding: 10px.
Margin: 10px around each product.
Cursor: Pointer for clickability.
Width: 200px.
Text Alignment: Left-aligned text.
Product Images
Max Width: 100% to fit the container.
Height: Auto to maintain aspect ratio.
Margin Bottom: 10px.
Form Sections
Margin Top: 20px.
Inputs: Centered with 80% width and 10px padding.
Buttons: 10px 20px padding.
Message
Background Color: #4caf50.
Text Color: White.
Padding: 10px.
Position: Fixed at the top center of the screen.
Transform: Centered horizontally with translateX(-50%).
Border Radius: 5px for rounded corners.
Usage
Include the CSS File: Make sure your HTML file links to this CSS file for styling. For example:

# html
Copy code
<link rel="stylesheet" href="styles.css">
Toggle Dark/Light Mode: Ensure that the dark-mode class is toggled on the body element to switch between light and dark themes.

# Styling Classes:

Use .container to wrap your main content.
Use .hidden to hide elements when necessary.
Apply styles to .product and .product-image for product listings.
Utilize .form-section for form styling and layout.

# JavaScript Functionality
# Overview
This document explains the JavaScript functionality for the SellerAndBuyerTrustApp. The script handles various interactive elements, such as displaying products, managing product details, handling buyer information, and theme toggling.

# Functionality
On DOM Content Loaded
The script initializes when the DOM content is fully loaded:

Fetch Products: Retrieves a list of products from a mock API and displays them.
Display Products: Dynamically creates and shows product elements.
Show Product Details: Displays detailed information about a selected product.
Close Product Details: Hides the product details view.
Buy Product: Shows a form for buyers to enter their details.
Submit Buyer Details: Sends buyer information to the server and displays a confirmation message.
Search Products: Filters products based on the search input.
Toggle Dark/Light Mode: Switches between dark and light themes.
Add New Product: Allows sellers to add a new product through a form.
JavaScript Code
1. Fetch Products
javascript
Copy code
fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProducts(products);
    })
    .catch(error => console.error('Error fetching products:', error));
Fetches the list of products from the API and updates the products array.
2. Display Products
javascript
Copy code
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
Generates HTML elements for each product and adds them to the product list.
3. Show Product Details
javascript
Copy code
function showProductDetails(product) {
    selectedProduct = product;
    productImage.src = product.imageUrl;
    productImage.alt = product.name;
    productDescription.textContent = `Description: ${product.description}`;
    productPrice.textContent = `Price: $${product.price.toFixed(2)}`;
    productDetails.classList.remove('hidden');
}
Displays detailed information about a selected product.
4. Close Product Details
javascript
Copy code
closeDetailsButton.addEventListener('click', () => {
    productDetails.classList.add('hidden');
});
Hides the product details view when the close button is clicked.
5. Buy Product
javascript
Copy code
buyProductButton.addEventListener('click', () => {
    buyerDetailsForm.classList.remove('hidden');
});
Shows the buyer details form when the buy button is clicked.
6. Submit Buyer Details
javascript
Copy code
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
Sends the buyer's details to the server and shows a confirmation message.
7. Search Products
javascript
Copy code
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
});
Filters products based on the search input and updates the displayed products.
8. Toggle Dark/Light Mode
javascript
Copy code
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
Toggles the dark mode by adding or removing the dark-mode class on the body.
9. Add New Product
javascript
Copy code
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
Handles adding a new product by sending data to the server and updating the product list.
Setup
Ensure API Server is Running: Make sure the mock API server is running at http://localhost:3000 with endpoints for products and buyers.

Link JavaScript File: Include the JavaScript file in your HTML file:

html
Copy code
<script src="/path/to/your/index.js"></script>
Open Your HTML File: Open the HTML file in your browser to interact with the app.

# JavaScript Guide
# Overview
The JavaScript code for SellerAndBuyerTrustApp manages the dynamic functionality of the web application. It handles fetching products, displaying product details, managing buyer information, theme toggling, and adding new products.

# Functionality
Event Listener for DOMContentLoaded
The script starts executing once the DOM content is fully loaded:

Fetch Products: Retrieves the list of products from a mock API and displays them.
Display Products: Generates and displays product elements.
Show Product Details: Displays detailed information about a selected product.
Close Product Details: Hides the product details section.
Buy Product: Shows a form for entering buyer details.
Submit Buyer Details: Sends buyer information to the server and displays a confirmation message.
Search Products: Filters products based on user input.
Toggle Dark/Light Mode: Switches between dark and light themes.
Add New Product: Allows sellers to add new products via a form.
Code Breakdown
1. Fetch Products
javascript
Copy code
fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProducts(products);
    })
    .catch(error => console.error('Error fetching products:', error));
Retrieves products from the API and updates the product list.
2. Display Products
javascript
Copy code
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
Creates and displays product elements dynamically.
3. Show Product Details
javascript
Copy code
function showProductDetails(product) {
    selectedProduct = product;
    productImage.src = product.imageUrl;
    productImage.alt = product.name;
    productDescription.textContent = `Description: ${product.description}`;
    productPrice.textContent = `Price: $${product.price.toFixed(2)}`;
    productDetails.classList.remove('hidden');
}
Displays detailed information about the selected product.
4. Close Product Details
javascript
Copy code
closeDetailsButton.addEventListener('click', () => {
    productDetails.classList.add('hidden');
});
Hides the product details section when the close button is clicked.
5. Buy Product
javascript
Copy code
buyProductButton.addEventListener('click', () => {
    buyerDetailsForm.classList.remove('hidden');
});
Shows the form for entering buyer details.
6. Submit Buyer Details
javascript
Copy code
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
Sends buyer details to the server and shows a confirmation message.
7. Search Products
javascript
Copy code
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
});
Filters and displays products based on the search input.
8. Toggle Dark/Light Mode
javascript
Copy code
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
Toggles between dark and light themes.
9. Add New Product
javascript
Copy code
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
Handles adding new products and updates the product list.
Setup
Ensure API Server is Running: Ensure the mock API server is running at http://localhost:3000 with endpoints for products and buyers.

Include JavaScript File: Ensure your HTML file includes this JavaScript file:

html
Copy code
<script src="/path/to/your/index.js"></script>
Open Your HTML File: Load the HTML file in your web browser to see the application in action.

# Contributing
Contributions are welcome! Please fork the repository and submit a pull request with any improvements or fixes.

# License
This project is licensed under the MIT License. See the LICENSE file for details.

# Contact
For any questions or support, please contact marilynakinyi@gmail.com.com.


