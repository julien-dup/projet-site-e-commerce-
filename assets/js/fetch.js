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
                <img src="${element.photo}" class="card-img-top imageCss" height="350px" alt="Image de la destination">

                <div class="card-body row">
                    <h5 class="card-title text-start fontsize1">${element.name} / ${element.duration}</h5>

                    <div class="col-9">
                        <p class="card-text text-start description">${element.description}</p>
                    </div>

                    <div class="col-3 d-flex justify-content-center">
                        <div class="row">
                            <p class="card-title  text-center">${element.price} euros</p>
                            <button class="button1" type="button" data-value="${element.name}" class=" btn btn-danger">Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
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
                                <button class="button1" type="button" data-value="${element.name}" class=" btn btn-danger">Ajouter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
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
                            <button class="button1" type="button" data-value="${element.name}" class=" btn btn-danger">Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    });

        let b = document.querySelectorAll("button")

    console.log(b)

    b.forEach (element => {
        console.log("pp")
        element.addEventListener ("click", function (){
            console.log("ok")
        })
    })

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


