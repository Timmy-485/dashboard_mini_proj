let retrievedData = localStorage.getItem(0);
let retrievedArray = JSON.parse(retrievedData);

let updateQuantity = () => {
    let inputs = document.getElementsByTagName("input")
    const itemName = inputs[0].value.toUpperCase()


    let found = false;
    for (let i = 0; i < retrievedArray.length; i++) {
        if (retrievedArray[i].itemName == itemName) {
            retrievedArray.splice(i,1)
            found = true;
        }
    }
    localStorage.setItem(0, JSON.stringify(retrievedArray));
    clearInputs()
    err(found)
}



//clear inputs
let clearInputs = () => {
    let inputs = document.getElementsByTagName("input")
    for (x of inputs) {
        x.value = ""
    }
}


//error msg output
let err = (flag) => {
    if(!flag){
        alert("Invalid Item Name")
    }
}




//event listeners
let addItemBtn = document.getElementById("addBtn")
addItemBtn.addEventListener("click", updateQuantity)