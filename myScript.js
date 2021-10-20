'use strict';

function showCartForm() {
	document.getElementById('cart_form_id').style.display = 'block';
}

function showAccount() {
	document.getElementById('id01').style.display = 'block';
}

function hideAccount() {
	document.getElementById('id01').style.display = 'none';
}

class Jersey {
	constructor(id, name, price, image, info) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.image = image;
		this.info = info;
	}
}

var myJerseys = {
	1: new Jersey(1, 'Galatasaray Training Jersey1', 100, 'jersey (1).jpeg'),
	2: new Jersey(2, 'Galatasaray Home Jersey1', 160, 'jersey (2).jpeg'),
	3: new Jersey(3, 'Galatasaray Away Jersey1', 180, 'jersey (3).jpeg'),
	4: new Jersey(4, 'Galatasaray Training Jersey2', 120, 'jersey (4).jpeg'),
	5: new Jersey(5, 'Galatasaray Home Jersey2', 110, 'jersey (5).jpeg'),
};

function displayProducts(myJerseys, imagesPath) {
	let productsUl = document.querySelector('.products ul');
	let sampleProduct = document.querySelector('#myProduct');
	sampleProduct.style.display = 'none';

	let newProduct;
	let i = 1;
	for (i in myJerseys) {
		newProduct = sampleProduct.cloneNode(true);
		newProduct.style.display = 'block';
		newProduct.children[0].children[0].innerHTML = myJerseys[i].id;
		newProduct.children[0].children[1].firstChild.src =
			imagesPath + myJerseys[i].image;
		newProduct.children[0].children[2].innerHTML = myJerseys[i].name;
		newProduct.children[0].children[3].innerHTML =
			myJerseys[i].price + ' TL';

		productsUl.appendChild(newProduct);
	}
}

var imagesPath = 'images/';
displayProducts(myJerseys, imagesPath);

/* add to cart*/

class Cart {
	constructor() {
		this.itemsID = [];
		this.totalPrice = 0;
	}

	addItemID(id) {
		this.itemsID.push(id);
		this.totalPrice += myJerseys[id].price;
	}

	removeItemID(id) {
		let index = this.itemsID.indexOf(id);
		if (index > -1) {
			this.itemsID.splice(index, 1);
			this.totalPrice -= myJerseys[id].price;
		}
	}
}

var myCart = new Cart();

function addToCart(event) {
	let id = event.target.parentElement.children[0].innerText;
	myCart.addItemID(id);

	let itemsInCartElement = document.querySelector('.itemsInCart');
	let sampleItem = document.querySelector('.itemsInCart #item');

	let newItem;
	newItem = sampleItem.cloneNode(true);
	newItem.style.display = 'flex';
	newItem.children[0].id = id;
	newItem.children[0].innerHTML = myJerseys[id].name;
	newItem.children[1].innerHTML = myJerseys[id].price + 'TL';
	itemsInCartElement.appendChild(newItem);
	itemsInCartElement.parentElement.children[3].children[0].children[0].innerText =
		myCart.totalPrice + ' TL';
}
var even = ' ';

function deleteItem(event) {
	even = event;
	let parentElem = event.target.parentElement;
	/* the id of element that should be deleted*/
	let id = parentElem.children[0].id;
	myCart.removeItemID(id);
	parentElem.style.display = 'none';
	let itemsInCartElement = document.querySelector('.itemsInCart');
	itemsInCartElement.parentElement.children[3].children[0].children[0].innerText =
		myCart.totalPrice + ' TL';
}
