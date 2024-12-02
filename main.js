const __API = "https://fakestoreapi.com/products?limit=10";

fetch(__API)
  .then(res => res.json())
  .then(data => {
    console.log(data); 
    render(data); 
  })
  .catch(err => console.log(err));

let row = document.querySelector(".row");
let second_row = document.querySelector(".row-2");
let count = 0; 

function render(array) {
  row.innerHTML = "";

  array.forEach(item => {
    let card = document.createElement("div");
    card.classList.add("card");
    
    let image = document.createElement("img");
    image.src = item.image;

    let title = document.createElement("h2");
    title.textContent = item.title;

    let price = document.createElement("h3");
    price.textContent = `$${item.price}`;

    let button = document.createElement("button");
    button.textContent = "Sotib olish";
    button.classList.add("button"); 

    button.addEventListener("click", () => {
      alert("Product added successfully to cart");

      let price_text = document.createElement("h2");
      price_text.textContent = `${item.title} - $${item.price}`;

      second_row.append(price_text);

      let total = document.querySelector(".total_sum");
      count += item.price;
      total.innerHTML = ""; 
      total.innerHTML = `$${count}`; 
    });

    card.append(title, image, price, button);

    row.append(card);
  });
}
