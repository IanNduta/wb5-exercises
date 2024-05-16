"use strict";
const toyCategoryDropDown = document.getElementById("toyCategoryDropDown");
const toyList = document.getElementById("toyList");
const toyDetailRow = document.getElementById("toyDetailRow");
const ToyName = document.getElementById("toyName");
const toyManufacturer = document.getElementById("toyManufacturer");
const ToyAge = document.getElementById("ToyAge");

window.onload = () => {
    toyCategoryDropDown.onchange = onToCategoryDropdownChange;
    toyList.onchange = onToyListChange;
}

function onToCategoryDropdownChange(){
    console.log("nToCategoryDropdownChange")
    let categoryselected = toyCategoryDropDown.value;

    toyList.options.length = 0;

    let toysInCategory= getToysforCategoryCode(categoryselected);


    for(let toy of toysInCategory){
        addToyNameToToyList(toy.name);
    }

}
function addToyNameToToyList(toyName){

        let newOption = document.createElement("option");
        newOption.value = toyName;
        newOption.innerHTML = toyName;
        toyList.appendChild(newOption);
}

function getToysforCategoryCode(categoryCode){

    if(categoryCode == "Action Figures"){
        return toys.Toys["Action Figures"];
    }
    else if(categoryCode == "Educational Toys"){
        return toys.Toys["Educational Toys"];
    }
    else if(categoryCode == "Outdoor Toys"){
        return toys.Toys["Outdoor Toys"];
    }
    else{
        console.log("error");
    }
    return [];
}

function getToyByName(toyName){
    let toys = getToysforCategoryCode();
    let categoryselected = toyCategoryDropDown.value;

    for(let toy of toys){
        if(toy.name == toyName){
            return toy;
        }
    }
}


function onToyListChange(){
    console.log("onToyListChange");
    let selectedToyName = toyList.value;
    // console.log(selectedToy);

    let selectedToy = getToyByName(selectedToyName);
    showDetailRow();

    ToyName.innerHTML = selectedToy.name;
    toyManufacturer.innerHTML = selectedToy.manufacturer;
    ToyAge.innerHTML.selectedToy.age_range;

}

function showDetailRow(){
    toyDetailRow.style.display = "block";
}