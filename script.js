const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    let target = +counter.getAttribute("data-target");
    let count = 0;

    let update = () => {
      let increment = target / 100;

      if (count < target) {
        count += increment;
        counter.innerText = Math.floor(count);
        setTimeout(update, 20);
      } else {
        counter.innerText = target;
      }
    };
counter.innerText = "+" + Math.floor(count);
    update();
  });
const brandFilter = document.querySelectorAll(".filters select")[0];
const priceFilter = document.querySelectorAll(".filters select")[1];
const typeFilter = document.querySelectorAll(".filters select")[2];

const cars = document.querySelectorAll(".car-card");

function filterCars() {
  cars.forEach(car => {
    let brand = brandFilter.value.toLowerCase();
    let price = priceFilter.value.toLowerCase();
    let type = typeFilter.value.toLowerCase();

    let carBrand = car.dataset.brand;
    let carPrice = car.dataset.price;
    let carType = car.dataset.type;

    let show =
      (brand === "all" || brand === carBrand) &&
      (price === "all" || price.includes(carPrice)) &&
      (type === "all" || type === carType);

    car.style.display = show ? "block" : "none";
  });
}

brandFilter.addEventListener("change", filterCars);
priceFilter.addEventListener("change", filterCars);
typeFilter.addEventListener("change", filterCars);
const carsData = {
  ferrari: {
    name: "Ferrari F8",
    price: "$320,000",
    speed: "340 km/h",
    fuel: "Petrol",
    img: "photos/image_53bd977d ferrari.png"
  },
  lambo: {
    name: "Lamborghini",
    price: "$500,000",
    speed: "350 km/h",
    fuel: "Petrol",
    img: "photos/lamborghini.png"
  },
  tesla: {
    name: "Tesla Model S",
    price: "$95,000",
    speed: "250 km/h",
    fuel: "Electric",
    img: "photos/tesla plaid.png"
  }
};

const car1 = document.getElementById("car1");
const car2 = document.getElementById("car2");

const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");

function showCar(select, container) {
  const car = carsData[select.value];

  if (!car) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = `
    <img src="${car.img}">
    <h3>${car.name}</h3>
    <p>Price: ${car.price}</p>
    <p>Top Speed: ${car.speed}</p>
    <p>Fuel: ${car.fuel}</p>
  `;
}

car1.addEventListener("change", () => showCar(car1, info1));
car2.addEventListener("change", () => showCar(car2, info2));
const results = document.getElementById("results");

function showCars(type) {

  if(type === "sport"){
    results.innerHTML = `
      <div class="car-card">
        <img src="photos/ferrari.png">
        <span class="badge">Best Seller</span>
        <h3>Ferrari F8</h3>
        <p>⭐⭐⭐⭐⭐ 4.9</p>
      </div>

      <div class="car-card">
        <img src="photos/porsche.png">
        <h3>Porsche 911</h3>
        <p>⭐⭐⭐⭐ 4.7</p>
      </div>
    `;
  }

  if(type === "family"){
    results.innerHTML = `
      <div class="car-card">
        <img src="photos/range.png">
        <span class="badge">Top Choice</span>
        <h3>Range Rover</h3>
        <p>⭐⭐⭐⭐⭐ 4.8</p>
      </div>

      <div class="car-card">
        <img src="photos/mercedes.png">
        <h3>Mercedes G63</h3>
        <p>⭐⭐⭐⭐ 4.6</p>
      </div>
    `;
  }

  if(type === "work"){
    results.innerHTML = `
      <div class="car-card">
        <img src="photos/tesla.png">
        <span class="badge">Smart Pick</span>
        <h3>Tesla Model S</h3>
        <p>⭐⭐⭐⭐⭐ 4.9</p>
      </div>

      <div class="car-card">
        <img src="photos/audi.png">
        <h3>Audi A6</h3>
        <p>⭐⭐⭐⭐ 4.5</p>
      </div>
    `;
  }

}