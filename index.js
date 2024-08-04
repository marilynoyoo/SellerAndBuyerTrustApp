let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

    document.getElementById("add-to-cart").addEventListener("click", function (addtocart) {
        document.getElementById("message").style.display = "block";
    });

    document.getElementById("buy-product").addEventListener("click", function () {
        document.getElementById("message").style.display = "block";
    });

    document.getElementById("cancel-order").addEventListener("click", function () {
        document.getElementById("message").style.display = "block";
    });

    document.getElementById("cancel-product").addEventListener("click", function () {
        document.getElementById("message").style.display = "block";
    });

    document.getElementById("refund-product").addEventListener("click", function () {
        document.getElementById("message").style.display = "block";
    });

    document.getElementById("return-product").addEventListener("click", function () {
        document.getElementById("message").style.display = "block";
    });

    document.getElementById("ship-product").addEventListener("click", function () {
        document.getElementById("message").style.display = "block";
    });

    document.getElementById("update-product").addEventListener("click", function () {
        document.getElementById("message").style.display = "block";
    });

    document.getElementById("update-quantity").addEventListener("click", function () {
        document.getElementById("message").style.display = "block";
    });

    document.getElementById("update-price").addEventListener("click", function () {
        document.getElementById("message").style.display = "block";
    });

    



