// ******** VARIABLE GLOBALE ********

let body = document.body;

let theme = document.querySelector("#theme");
let theme_img = document.querySelector("#theme i");

// ******** PARAMEETRE PAR DEFAUT ********
let themeCookie = localStorage.getItem("theme") || "theme-light";

body.className = themeCookie;

if (themeCookie == "theme-dark") {
	theme_img.className = "fa fa-sun";
} else {
	theme_img.className = "fa fa-moon";
}

// ******** CHANGEMENT DE THEME PRINCIPALE********

theme.addEventListener("click", function () {
	if (body.classList[0] == "theme-light") {
		body.classList.replace(body.classList[0], "theme-dark");
		theme_img.classList.replace("fa-moon", "fa-sun");
	} else {
		body.classList.replace(body.classList[0], "theme-light");
		theme_img.classList.replace("fa-sun", "fa-moon");
	}
	localStorage.setItem("theme", body.classList[0]);
});

// ******** MENU MOBILE ********
let navbar_toggle = document.getElementById("navbar-toggle");
let burger = document.getElementById("burger");
let menu = document.querySelector(".menu");

navbar_toggle.addEventListener("click", function (e) {
	e.preventDefault();
	burger.classList.toggle("open");
	menu.classList.toggle("open");
});


function createCard(product){
	return `
		<div class="post__box" >
			<div class="post">
				<a class="post__thumnails" href="#">
					<img src="${product.image}" alt="image" />
				</a>
				<a href="#">
					<h2 class="post__title">${product.title}</h2>
				</a>

				<div class="post__meta">
					<span class="post__date">${product.category}</span>
				</div>
				<h1 class="post__price"> $ ${product.price} US</h1>
				<p class="post__exerpt">${(product.description).substring(10)}</p>
			</div>
		</div>
	`
}

function getLastProducts(){
	fetch('https://fakestoreapi.com/products?limit=6')
		.then(function(res){
			return res.json()
		}).then(function(products){
			let content = document.getElementById("last-products");
			let html = ""
			products.forEach(function(product){
				html += createCard(product)
			})

			content.innerHTML = html
		})
}

function getAllProducts(){
	fetch('https://fakestoreapi.com/products')
		.then(function(res){
			return res.json()
		}).then(function(products){
			let content = document.getElementById("products");
			let html = ""
			products.forEach(function(product){
				html += createCard(product)
			})

			content.innerHTML = html
		})
}

getLastProducts()
getAllProducts()