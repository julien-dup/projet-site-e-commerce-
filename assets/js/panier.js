let allBtns = document.querySelectorAll("button[data-name]")

allBtns.forEach(element => {
    element.addEventListener("click", function () {
        let name = this.dataset.name;
        let duration = this.dataset.duration;
        let price = this.dataset.price;

        tableau.insertAdjacentHTML('afterbegin', `
        <tr>
        <th>${name}</th>
        <td>${duration}</td>
        <td><button class="minusBtn" data-value="minus">-</button><button class="plusBtn" data-value="plus">+</button></td>
        <td data-value="tdQuantite"></td>
        <td>${price}&euro;</td>
        </tr>`);

        // fonction qui va supprimer et ajouter la quantité de services
        const minusBtn = document.querySelectorAll('button[data-value="minus"]');
        const plusBtn = document.querySelectorAll('button[data-value="plus"]');
        const tdQuantite = document.querySelectorAll('td [data-value="tdQuantite"]');

        /*let mySpan = document.createElement("span");
        mySpan.setAttribute('data-quantite','1');
        mySpan.textContent = "ok";
        tdQuantite.append(mySpan);*/

        myQuantite = 1;

        minusBtn.forEach(element => {
            element.addEventListener("click", function () {
                myQuantite--;
                console.log("ok");
            });
        })
        plusBtn.forEach(element => {
            element.addEventListener("click", function () {
                myQuantite++;
                console.log("ok");
            });
        })
    })
})