let url = "http://localhost:8080/SellerAndBuyerTrustApp/";
document.addEventListener("DOMContentLoaded", () => {
    loadInitialData();
    loadProducts();
    setupAddToCartButtons();
    setupBuyButtons();
    setupAddToWishlistButtons();
    setupRemoveFromCartButtons();
    setupRemoveFromWishlistButtons();
    setupSearchButton();
    setupCancelOrderButtons();
    setupCancelProductButtons();
    setupRefundProductButtons();
    setupReturnProductButtons();
    setupShipProductButtons();
    setupUpdateProductButtons();
    setupUpdateQuantityButtons();
    setupUpdatePriceButtons();
    setupRatingButtons();
    setupReviewsButtons();
    setupSellerDetails();
    setupBuyerDetails();
    setupRealtimeCommunicationButton();
    setupChatAndVideoCallFeatures();
    setupProductDescription();
    setupProductStatus();
    setupPriceButton();
    setupQuantity();
    setupAvailableProducts();
    setupPayVia();
    setupPayment();
    setupEscrowPayment();
    setupPaymentStatus();
    setupAdvancedPenaltyPayment();
    setupCommission();
    setupDeliveryAddress();
    setupDeliveryTime();
    setupPickupLocation();
    setupShipping();
    setupDeliveryStatus();
    setupMessage();
    setupReviews();
})

function loadInitialProducts() {
    fetch(url + "/products")
        .then(response => response.json())
        .then(data => {
            products = data
        })
}

function loadInitialUsers() {
    fetch(url + "/users")
        .then(response => response.json())
        .then(data => {
            users = data
        })
}

function loadInitialData() {
    loadInitialProducts();
    loadInitialUsers();
}

function loadProductlist() {
    fetch(url + "/products")
        .then(response => response.json())
        .then(data => {
            products = data
        })
}


function setupBuyButton() {
    const buyButtons = document.querySelectorAll(".buy-button");
    buyButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productId = event.target.id
            const product = products.find(product => product.id == productId)
            const user = users.find(user => user.id == product.sellerId)
            buyProduct(productId, user)
        })
    })
}

function setupBuyButton() {
    buyproduct.addEventListener("click", (event) => {
        
    })
}

function handleProductBuying(product, productsold) {
    fetch(url + "/products/" + product.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            sellerId: product.sellerId,
            sold: productsold + 1
        })
    }).then(response => response.json())
        .then(data => {
            products = data
        })
}

function setupBuyButtons() {
    const buyButtons = document.querySelectorAll(".buy-button");
    buyButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productId = event.target.id
            const product = products.find(product => product.id == productId)
            const user = users.find(user => user.id == product.sellerId)
            buyProduct(productId, user)
        })
    })
}

function setupWishlistButtons() {
    const wishlistButtons = document.querySelectorAll(".wishlist-button");
    wishlistButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productId = event.target.id
            const product = products.find(product => product.id == productId)
            const user = users.find(user => user.id == product.sellerId)
            addToWishlist(productId, user)
        })
    })
}

function setupAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productId = event.target.id
            const product = products.find(product => product.id == productId)
            const user = users.find(user => user.id == product.sellerId)
            addToCart(productId, user)
        })
    })
}

function setupAddToWishlistButtons() {
    const addToWishlistButtons = document.querySelectorAll(".add-to-wishlist-button");
    addToWishlistButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productId = event.target.id
            const product = products.find(product => product.id == productId)
            const user = users.find(user => user.id == product.sellerId)
            addToWishlist(productId, user)
        })
    })
}

function setupRemoveFromCartButtons() {
    const removeFromCartButtons = document.querySelectorAll(".remove-from-cart-button");
    removeFromCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productId = event.target.id
            const product = products.find(product => product.id == productId)
            const user = users.find(user => user.id == product.sellerId)
            removeFromCart(productId, user)
        })
    })
}

function setupRemoveFromWishlistButtons() {
    const removeFromWishlistButtons = document.querySelectorAll(".remove-from-wishlist-button");
    removeFromWishlistButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productId = event.target.id
            const product = products.find(product => product.id == productId)
            const user = users.find(user => user.id == product.sellerId)
            removeFromWishlist(productId, user)
        })
    })
}

function setupSearchButton() {
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", (event) => {
        const query = document.getElementById("search-input").value
        search(query)
    })
}

function setupRealtimeCommunicationButton() {
    const realtimeCommunicationButton = document.getElementById("realtime-communication-button");
    realtimeCommunicationButton.addEventListener("click", (event) => {
        realtimeCommunication()
    })
}

function setupChatAndVideoCallFeatures() {
    const chatAndVideoCallFeatures = document.getElementById("chat-and-video-call-features");
    chatAndVideoCallFeatures.addEventListener("click", (event) => {
        chatAndVideoCall()
    })
}

function setupProductDescription() {
    const productDescription = document.getElementById("product-description");
    productDescription.addEventListener("click", (event) => {
        productDescription()
    })
}

function setupProductStatus() {
    const productStatus = document.getElementById("product-status");
    productStatus.addEventListener("click", (event) => {
        productStatus()
    })
}

function setupPrice() {
    const price = document.getElementById("price");
    price.addEventListener("click", (event) => {
        price()
    })
}

function setupRating() {
    const rating = document.getElementById("rating");
    rating.addEventListener("click", (event) => {
        rating()
    })
}

function setupQuantity() {
    const quantity = document.getElementById("quantity");
    quantity.addEventListener("click", (event) => {
        quantity()
    })
}

function setupPayVia() {
    const payVia = document.getElementById("pay-via");
    payVia.addEventListener("click", (event) => {
        payVia()
    })
}

function setupPayment() {
    const payment = document.getElementById("payment");
    payment.addEventListener("click", (event) => {
        payment()
    })
}

function setupEscrowPayment() {
    const escrowPayment = document.getElementById("escrow-payment");
    escrowPayment.addEventListener("click", (event) => {
        escrowPayment()
    })
}

function setupPaymentStatus() {
    const paymentStatus = document.getElementById("payment-status");
    paymentStatus.addEventListener("click", (event) => {
        paymentStatus()
    })
}

function setupBreachOfContractPenalty() {
    const breachOfContractPenalty = document.getElementById("breach-of-contract-penalty");
    breachOfContractPenalty.addEventListener("click", (event) => {
        breachOfContractPenalty()
    })
}

function setupAdvancedPenaltyPayment() {
    const advancedPenaltyPayment = document.getElementById("advanced-penalty-payment");
    advancedPenaltyPayment.addEventListener("click", (event) => {
        advancedPenaltyPayment()
    })
}

function setupCommission() {
    const commission = document.getElementById("commission");
    commission.addEventListener("click", (event) => {
        commission()
    })
}

function setupDeliveryAddress() {
    const deliveryAddress = document.getElementById("delivery-address");
    deliveryAddress.addEventListener("click", (event) => {
        deliveryAddress()
    })
}

function setupDeliveryTime() {
    const deliveryTime = document.getElementById("delivery-time");
    deliveryTime.addEventListener("click", (event) => {
        deliveryTime()
    })
}

function setupPickupLocation() {
    const pickupLocation = document.getElementById("pickup-location");
    pickupLocation.addEventListener("click", (event) => {
        pickupLocation()
    })
}

function setupShipping() {
    const shipping = document.getElementById("shipping");
    shipping.addEventListener("click", (event) => {
        shipping()
    })
}

function setupDeliveryStatus() {
    const deliveryStatus = document.getElementById("delivery-status");
    deliveryStatus.addEventListener("click", (event) => {
        deliveryStatus()
    })
}

function setupEscrowPaymentStatus() {
    const escrowPaymentStatus = document.getElementById("escrow-payment-status");
    escrowPaymentStatus.addEventListener("click", (event) => {
        escrowPaymentStatus()
    })
}

function setupTrustScore() {
    const trustScore = document.getElementById("trust-score");
    trustScore.addEventListener("click", (event) => {
        trustScore()
    })
}

function setupSellerDetails() {
    const seller = document.getElementById("seller");
    seller.addEventListener("click", (event) => {
        seller()
    })
}

function setupBuyerDetails() {
    const buyer = document.getElementById("buyer");
    buyer.addEventListener("click", (event) => {
        buyer()
    })
}

function setupAvailableProducts() {
    const availableProducts = document.getElementById("available-products");
    availableProducts.addEventListener("click", (event) => {
        availableProducts()
    })
}

function setupRealtimeCommunication() {
    const realtimeCommunication = document.getElementById("realtime-communication");
    realtimeCommunication.addEventListener("click", (event) => {
        realtimeCommunication()
    })
}

function setupMessage() {
    const message = document.getElementById("message");
    message.addEventListener("click", (event) => {
        message()
    })
}


