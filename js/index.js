"use strict"
class Jersey {
    constructor(id, name, price, image, info) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.info = info;
    }
}



function displayProducts(myJerseys, imagesPath) {
    let productsUl = document.querySelector(".products ul");
    let sampleProduct = document.querySelector("#myProduct");
    productsUl.innerHTML = "";
    sampleProduct.style.display = "none"
    let newProduct;
    let i = 1;
    for (i in myJerseys) {
        newProduct = sampleProduct.cloneNode(true);
        newProduct.style.display = "block";
        newProduct.children[0].children[0].innerHTML = myJerseys[i].id;
        newProduct.children[0].children[1].firstChild.src = imagesPath + myJerseys[i].image;
        newProduct.children[0].children[2].innerHTML = myJerseys[i].name;
        newProduct.children[0].children[3].innerHTML = myJerseys[i].price + " TL";
        productsUl.appendChild(newProduct);
    }
}
var imagesPath = "images/";

var jerseys = {};

function getAllProductsData() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = this.responseText;
            // delete last comma
            data = data.substring(0, data.length - 1);
            data = "[" + data + "]";
            data = JSON.parse(data);
            // console.log(data);
            displayProducts(data, imagesPath);

        }
    };
    xmlhttp.open("POST", "index_action.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("getAllProductsData=yes");
}

getAllProductsData();

///////////////////////////////////////////// Cart functions

function addToCart(event) {
    // item id
    let id = event.target.parentElement.children[0].innerText;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "sendToAccountPage") {
                document.location.href = 'account.php';
                alert("Please login first...");
            } else {

                alert("" + this.responseText);
            }


        }
    };
    xmlhttp.open("POST", "cart_action.php", true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send("selectedItemID=" + id);

}

///////////////////////////////////////////// CATEGORY BUTTON /////////////////////////////////
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

function showCategoryProduct(id) {
    if (!isNaN(id)) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let data = this.responseText;
                // delete last comma
                data = data.substring(0, data.length - 1);
                data = "[" + data + "]";
                console.log(data);
                data = JSON.parse(data);
                displayProducts(data, imagesPath);
            }
        };
        xmlhttp.open("POST", "index_action.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("showCategoryProduct=" + id);
    }
}