window.onload = function () {

    let innit = () => {
        if (localStorage.getItem(0) === null) {
            let inputsArray = [{
                    itemName: "RAZOR BLADE 14",
                    description: "14 INCH GAMING LAPTOP",
                    category: "HARDWARE",
                    quantity: 21.
                },
                {
                    itemName: "BLACK DESERT ONLINE",
                    description: "MMO GAME",
                    category: "SOFTWARE",
                    quantity: 2
                },
                {
                    itemName: "RAZOR OPUS X",
                    description: "FANCY HEADPHONES",
                    category: "ACCESSORY",
                    quantity: 0
                }
            ]
            localStorage.setItem(0, JSON.stringify(inputsArray));
        }
    }

    let retrievedData = localStorage.getItem(0);
    let retrievedArray = JSON.parse(retrievedData);

    innit()

    //insert summary values
    document.getElementById("totalItems").innerHTML = retrievedArray.length
    document.getElementById("numberOfCategories").innerHTML = 3
    let inStock = document.getElementById("itemsInStock")
    let count = 0
    for(let i = 0; i<retrievedArray.length; i++){
        if(retrievedArray[i].quantity > 0){
            count++
        }
    }
    inStock.innerHTML = count



    //populate inventory
    const data = document.getElementById('tableBody')
    const displayData = (arr, count) => {
        const tr = document.createElement('tr')
        tr.className = 'tableRow'
        tr.innerHTML = `
    <tr>
        <td>${arr[count].itemName}</td>
        <td>${arr[count].description}</td>
        <td>${arr[count].category}</td>
        <td>${arr[count].quantity}</td>
        <td class="indicator"></td>
    </tr>
    `
        data.append(tr)
    }

    for (let i = 0; i < retrievedArray.length; i++) {
        displayData(retrievedArray, i)
    }


    //Set indicator colors
    let indicators = document.getElementsByClassName("indicator")

    for (let i = 0; i < retrievedArray.length; i++) {

        if (retrievedArray[i].quantity == 0) {
            indicators[i].classList.add("red")
        } else if (retrievedArray[i].quantity > 0 && retrievedArray[i].quantity < 20) {
            indicators[i].classList.add("orange")
        } else {
            indicators[i].classList.add("green")
        }
    }
}