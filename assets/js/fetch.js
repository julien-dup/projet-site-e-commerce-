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
                            <button class="button1" type="button" data-name="${element.name}" data-duration="${element.duration}" data-price="${element.price}" class=" btn btn-danger">Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    });
    let b = document.querySelectorAll("button[data-name]")

    console.log(b)

    b.forEach (element => {
        console.log("pp")
        element.addEventListener ("click", function (){
            console.log("ok")
          let name = this.dataset.name
          let duration = this.dataset.duration
          let price = this.dataset.price
           console.log(name)
           
           let tableau = document.getElementById("tableau")
           tableau.innerHTML += `
           <tr>
           <th>${name}</th>
           <td>${duration}</td>
           <td><button class="minusBtn" data-minus="-1">-</button> <1 <button class="plusBtn" data-plus="+1">+</button></td>
           <td>${price}euro;</td>
           </tr>`

                           // fonction qui va supprimer et ajouter la quantité de services
        var calculA = 1
                           var suppr= document.querySelectorAll("button[data-minus]")
                           var ajouter= document.querySelectorAll("button[data-plus]")
                           suppr.forEach (element => {
                           element.addEventListener("click", function(){
                               let soustrait = parseInt(this.dataset.minus)
                               var resultatA= (calculA + soustrait);
                               calculA= eval(resultatA);
                               console.log(calculA)
                                 })
                                })
                       ajouter.forEach (element => {
                        element.addEventListener("click", function(){
                            let ajoute = parseInt(this.dataset.plus)
                            console.log(typeof ajoute)
                            var resultatB= (1 + ajoute);
                            console.log(resultatB)

                        })
                    })
        })
    })



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
                                <button class="button1" type="button" data-name="${element.name}" data-duration="${element.duration}" data-price="${element.price}" class=" btn btn-danger">Ajouter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        });
        let b = document.querySelectorAll("button[data-name]")

        console.log(b)
    
        b.forEach (element => {
            console.log("pp")
            element.addEventListener ("click", function (){
                console.log("ok")
              let name = this.dataset.name
              let duration = this.dataset.duration
              let price = this.dataset.price
               console.log(name)
               
               let tableau = document.getElementById("tableau")
               tableau.innerHTML += `
               <tr>
               <th>${name}</th>
               <td>${duration}</td>
               <td><button class="minusBtn" data-minus="-1">-</button> <button class="plusBtn" data-plus="+1">+</button></td>
               <td><div class="quantité"></div></td>
               <td>${price}euro;</td>
               </tr>`

                                           // fonction qui va supprimer et ajouter la quantité de services
        var calculA = 1
        var suppr= document.querySelectorAll("button[data-minus]")
        var ajouter= document.querySelectorAll("button[data-plus]")
        let affiche = document.querySelector(".quantité")
        console.log(affiche)
        suppr.forEach (element => {
        element.addEventListener("click", function(){
            let soustrait = parseInt(this.dataset.minus)
            var resultatA= (calculA + soustrait);
            calculA= eval(resultatA);
            console.log(calculA)
            affiche.innerHTML(calculA)
            
              })
             })
    ajouter.forEach (element => {
     element.addEventListener("click", function(){
         let ajoute = parseInt(this.dataset.plus)
         var resultatB= (calculA + ajoute);
         calculA= eval(resultatB);
         console.log(calculA)
         })
          })

            })
        })

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
                            <button class="button1" type="button" data-name="${element.name}" data-duration="${element.duration}" data-price="${element.price}" class=" btn btn-danger">Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    });
    let b = document.querySelectorAll("button[data-name]")

    console.log(b)



    b.forEach (element => {
        console.log("pp")
        element.addEventListener ("click", function (){
            console.log("ok")
          let name = this.dataset.name
          let duration = this.dataset.duration
          let price = this.dataset.price
           console.log(name)
           
           let tableau = document.getElementById("tableau")
           tableau.innerHTML += `
           <tr>
           <th>${name}</th>
           <td>${duration}</td>
           <td><button class="minusBtn" data-minus="-1">-</button> 1 <button class="plusBtn" data-plus="+1">+</button></td>
           <td>${price}euro;</td>
           </tr>`

                                           // fonction qui va supprimer et ajouter la quantité de services
                                           var calculA = 1
                                           var suppr= document.querySelectorAll("button[data-minus]")
                                           var ajouter= document.querySelectorAll("button[data-plus]")
                                           suppr.forEach (element => {
                                           element.addEventListener("click", function(){
                                               let soustrait = parseInt(this.dataset.minus)
                                               var resultatA= (calculA + soustrait);
                                               calculA= eval(resultatA);
                                               console.log(calculA)
                                                 })
                                                })
                                       ajouter.forEach (element => {
                                        element.addEventListener("click", function(){
                                            let ajoute = parseInt(this.dataset.plus)
                                            var resultatB= (calculA + ajoute);
                                            calculA= eval(resultatB);
                                            console.log(calculA)
                                            })
                                             })


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


