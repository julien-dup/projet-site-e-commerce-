function getTotal() {
    let total = 0;
    let allInputSub = document.querySelectorAll('.subTotal');
    allInputSub.forEach(element => {
        total += +(element.value)
    });
    totalPrice.innerHTML = total + " &euro;";
}

function displayFrance() {
    mainContainer.innerHTML = "";

    fetch("./assets/json/france.json")
        .then(function (resp) {
            if (resp.ok) {
                return resp.json();
            } else {
                console.log("Erreur JSON");
            }
        }).then(function (data) {

            data.results.forEach(element => {
                mainContainer.innerHTML += `
                <div class="col-md-5 col-lg-4 pt-2 rounded-3 text-center">
                    <div class="card" style="width: 100%">
                        <img src="${element.photo}" class="card-img-top imageCss" alt="Image de la destination">

                        <div class="card-body row">
                            <h5 class="card-title text-start fontsize1">${element.name} / ${element.duration}</h5>

                            <div class="col-9">
                                <p class="card-text text-start description">${element.description}</p>
                            </div>

                            <div class="col-3 d-flex justify-content-center">
                                <div class="row">
                                    <p class="card-title  text-center">${element.price} € </p>
                                    <button class="button1" type="button" data-name="${element.name}" data-duration="${element.duration}" data-price="${element.price}" class=" btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalAdd">Réserver</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            });

            let allBtns = document.querySelectorAll("button[data-name]");

            allBtns.forEach(element => {
                element.addEventListener("click", function () {

                    let name = this.dataset.name;
                    let duration = this.dataset.duration;
                    let price = this.dataset.price;

                    let myQuantite = 1;
                    let count = 0;

                    if (!document.getElementById(name)) {
                        tableau.insertAdjacentHTML('afterbegin', `
                        <tr id="${name}">
                        <th>${name}</th>
                        <td>${duration}</td>
                        <td><button class="minusBtn" data-name="minus">-</button><button class="plusBtn" data-name="plus">+</button></td>
                        <td><span class="spanBtn">${myQuantite}</span></td>
                        <td>${price} &euro;</td>
                        <td><input type="number" class="subTotal" value="${price}" disabled>&euro;</td>
                        </tr>`);
                    }

                    let minusBtn = document.getElementsByClassName("minusBtn")[count];
                    let plusBtn = document.getElementsByClassName("plusBtn")[count];
                    let spanQuantite = document.getElementsByClassName("spanBtn")[count];
                    let subTotal = document.getElementsByClassName("subTotal")[count];

                    minusBtn.addEventListener('click', () => {
                        myQuantite--;
                        if (myQuantite <= 0) {
                            let del = document.getElementById(name);
                            del.remove();
                        }
                        spanQuantite.innerHTML = myQuantite;
                        subTotal.value = myQuantite * price;
                        getTotal();
                    });

                    plusBtn.addEventListener('click', () => {
                        myQuantite++;
                        spanQuantite.innerHTML = myQuantite;
                        subTotal.value = myQuantite * price;
                        getTotal();
                    });

                    getTotal();
                    count++;
                })
            });

        }).catch(function (error) {
            console.log("Erreur : " + error);
        });
}

function displayEurope() {
    mainContainer.innerHTML = "";

    fetch("./assets/json/europe.json")
        .then(function (resp) {
            if (resp.ok) {
                return resp.json();
            } else {
                console.log("Erreur JSON");
            }
        }).then(function (data) {

            data.results.forEach(element => {
                mainContainer.innerHTML += `
                <div class="col-md-5 col-lg-4 pt-2 rounded-3 text-center">
                    <div class="card" style="width: 100%">
                        <img src="${element.photo}" class="card-img-top" alt="Image de la destination">

                        <div class="card-body row">
                            <h5 class="card-title text-start fontsize1">${element.name} / ${element.duration}</h5>

                            <div class="col-9">
                                <p class="card-text text-start description">${element.description}</p>
                            </div>

                            <div class="col-3 d-flex justify-content-center">
                                <div class="row">
                                    <p class="card-title  text-center">${element.price} euros</p>
                                    <button class="button1" type="button" data-name="${element.name}" data-duration="${element.duration}" data-price="${element.price}" class=" btn btn-danger">Réserver</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            });

            let allBtns = document.querySelectorAll("button[data-name]");

            allBtns.forEach(element => {
                element.addEventListener("click", function () {

                    let name = this.dataset.name;
                    let duration = this.dataset.duration;
                    let price = this.dataset.price;

                    let myQuantite = 1;
                    let count = 0;

                    if (!document.getElementById(name)) {
                        tableau.insertAdjacentHTML('afterbegin', `
                        <tr id="${name}">
                        <th>${name}</th>
                        <td>${duration}</td>
                        <td><button class="minusBtn" data-name="minus">-</button><button class="plusBtn" data-name="plus">+</button></td>
                        <td><span class="spanBtn">${myQuantite}</span></td>
                        <td>${price} &euro;</td>
                        <td><input type="number" class="subTotal" value="${price}" disabled>&euro;</td>
                        </tr>`);
                    }

                    let minusBtn = document.getElementsByClassName("minusBtn")[count];
                    let plusBtn = document.getElementsByClassName("plusBtn")[count];
                    let spanQuantite = document.getElementsByClassName("spanBtn")[count];
                    let subTotal = document.getElementsByClassName("subTotal")[count];

                    minusBtn.addEventListener('click', () => {
                        myQuantite--;
                        if (myQuantite <= 0) {
                            let del = document.getElementById(name);
                            del.remove();
                        }
                        spanQuantite.innerHTML = myQuantite;
                        subTotal.value = myQuantite * price;
                        getTotal();
                    });

                    plusBtn.addEventListener('click', () => {
                        myQuantite++;
                        spanQuantite.innerHTML = myQuantite;
                        subTotal.value = myQuantite * price;
                        getTotal();
                    });

                    getTotal();
                    count++;
                })
            });

        }).catch(function (error) {
            console.log("Erreur : " + error);
        });
}

function displayMonde() {
    mainContainer.innerHTML = "";

    fetch("./assets/json/monde.json")
        .then(function (resp) {
            if (resp.ok) {
                return resp.json();
            } else {
                console.log("Erreur JSON");
            }
        }).then(function (data) {
            data.results.forEach(element => {
                mainContainer.innerHTML += `
                <div class="col-md-5 col-lg-4 pt-2 rounded-3 text-center">
                    <div class="card" style="width: 100%">
                        <img src="${element.photo}" class="card-img-top" alt="Image de la destination">

                        <div class="card-body row">
                            <h5 class="card-title text-start fontsize1">${element.name} / ${element.duration}</h5>

                            <div class="col-9">
                                <p class="card-text text-start description">${element.description}</p>
                            </div>

                            <div class="col-3 d-flex justify-content-center">
                                <div class="row">
                                    <p class="card-title  text-center">${element.price} euros</p>
                                    <button class="button1" type="button" data-name="${element.name}" data-duration="${element.duration}" data-price="${element.price}" class=" btn btn-danger">Réserver</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            });
            let allBtns = document.querySelectorAll("button[data-name]");

            allBtns.forEach(element => {
                element.addEventListener("click", function () {

                    let name = this.dataset.name;
                    let duration = this.dataset.duration;
                    let price = this.dataset.price;

                    let myQuantite = 1;
                    let count = 0;

                    if (!document.getElementById(name)) {
                        tableau.insertAdjacentHTML('afterbegin', `
                        <tr id="${name}">
                        <th>${name}</th>
                        <td>${duration}</td>
                        <td><button class="minusBtn" data-name="minus">-</button><button class="plusBtn" data-name="plus">+</button></td>
                        <td><span class="spanBtn">${myQuantite}</span></td>
                        <td>${price} &euro;</td>
                        <td><input type="number" class="subTotal" value="${price}" disabled>&euro;</td>
                        </tr>`);
                    }

                    let minusBtn = document.getElementsByClassName("minusBtn")[count];
                    let plusBtn = document.getElementsByClassName("plusBtn")[count];
                    let spanQuantite = document.getElementsByClassName("spanBtn")[count];
                    let subTotal = document.getElementsByClassName("subTotal")[count];

                    minusBtn.addEventListener('click', () => {
                        myQuantite--;
                        if (myQuantite <= 0) {
                            let del = document.getElementById(name);
                            del.remove();
                        }
                        spanQuantite.innerHTML = myQuantite;
                        subTotal.value = myQuantite * price;
                        getTotal();
                    });

                    plusBtn.addEventListener('click', () => {
                        myQuantite++;
                        spanQuantite.innerHTML = myQuantite;
                        subTotal.value = myQuantite * price;
                        getTotal();
                    });

                    getTotal();
                    count++;
                })
            });

        }).catch(function (error) {
            console.log("Erreur : " + error);
        });
}

displayFrance();

franceBtn.addEventListener('click', () => {
    displayFrance();
});

europeBtn.addEventListener('click', () => {
    displayEurope();
});

mondeBtn.addEventListener('click', () => {
    displayMonde();
})