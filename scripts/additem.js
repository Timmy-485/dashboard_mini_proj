let retrievedData = localStorage.getItem(0);
let retrievedArray = JSON.parse(retrievedData);

//clear inputs
let clearInputs = () => {
    let inputs = document.getElementsByTagName("input")
    for (x of inputs) {
        x.value = ""
    }
}


//function to execute on click event
let addItem = () => {
    let inputs = document.getElementsByTagName("input")
    const itemName = inputs[0].value.toUpperCase()
    const description = inputs[1].value.toUpperCase()
    const quantity = parseInt(inputs[2].value)
    const category = document.getElementById("category").value

    if (itemName == "" || description == "" || quantity < 0) {
        alert("Fill in the empty fields")
        return
    } else {
        let inputsObj = {
            itemName,
            description,
            category,
            quantity
        }
        retrievedArray.push(inputsObj)
        localStorage.setItem(0, JSON.stringify(retrievedArray));
    }
    
    clearInputs()
}




//event listeners
let addItemBtn = document.getElementById("addBtn")
addItemBtn.addEventListener("click", addItem)