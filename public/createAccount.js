let labelFirstName = document.createElement("label")
labelFirstName.innerHTML=("First Name")
let firstName = document.createElement('input')
firstName.setAttribute ("type","text")
firstName.setAttribute ("class","flex-item")
firstName.setAttribute("id", "firstName")
labelFirstName.append(firstName)
formCreateUser.append(labelFirstName)
// value.appendChild(firstName);

let labelLastName = document.createElement("label")
labelLastName.innerHTML=("Last Name")
let lastName = document.createElement('input')
lastName.setAttribute ("type","text")
lastName.setAttribute ("class","flex-item")
lastName.setAttribute("id", "lastName")
labelLastName.append(lastName)
formCreateUser.append(labelLastName);

let labelEmail = document.createElement("label")
labelEmail.innerHTML=("Email")
let email = document.createElement('input')
email.setAttribute ("type","email")
email.setAttribute ("class","flex-item")
email.setAttribute("id", "email")
labelEmail.append(email)
formCreateUser.append(labelEmail);


let labelStreetAddress = document.createElement("label")
labelStreetAddress.innerHTML=("Street Address")
let streetAddress = document.createElement('input')
streetAddress.setAttribute ("type","text")
streetAddress.setAttribute ("class","flex-item")
streetAddress.setAttribute("id", "streetAddress")
labelStreetAddress.append(streetAddress)
formCreateUser.append(labelStreetAddress);


let labelCity = document.createElement("label")
labelCity.innerHTML=("City")
let city = document.createElement('input')
city.setAttribute ("type","text")
city.setAttribute ("class","flex-item")
city.setAttribute("id", "city")
labelCity.append(city)
formCreateUser.append(labelCity)


let labelStateProvince = document.createElement("label")
labelStateProvince.innerHTML=("State or Province")
let stateProvince = document.createElement('select')
// stateProvince.setAttribute ("type","option")
stateProvince.setAttribute ("class","flex-item")
stateProvince.setAttribute("id", "stateProvince")
labelStateProvince.append(stateProvince)
formCreateUser.append(labelStateProvince);

let dropdownState = document.getElementById('stateProvince');
dropdownState.length = 0;

let defaultOptionState = document.createElement('option');
defaultOptionState.text = 'Choose State/Province';

dropdownState.add(defaultOptionState);
dropdownState.selectedIndex = 0;

const urlStates = 'http://localhost:3000/public/states.JSON';

const requestStates = new XMLHttpRequest();
requestStates.open('GET', urlStates, true);

requestStates.onload = function() {
  if (requestStates.status === 200) {
    const data = JSON.parse(requestStates.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].name;
    //   option.value = data[i].abbreviation;
      dropdownState.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

requestStates.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + urlStates);
};

requestStates.send();

let labelCountry = document.createElement("label")
labelCountry.innerHTML=("Country")
let country = document.createElement('select')
// country.setAttribute ("type","option")
country.setAttribute ("class","flex-item")
country.setAttribute("id", "country")
labelCountry.append(country)
formCreateUser.append(labelCountry);

let dropdownCountry = document.getElementById('country');
dropdownCountry.length = 0;

let defaultOptionCountry = document.createElement('option');
defaultOptionCountry.text = 'Choose Country';

dropdownCountry.add(defaultOptionCountry);
dropdownCountry.selectedIndex = 0;

const urlCountries = 'http://localhost:3000/public/countries.JSON';

const requestCountries = new XMLHttpRequest();
requestCountries.open('GET', urlCountries, true);

requestCountries.onload = function() {
  if (requestCountries.status === 200) {
    const data = JSON.parse(requestCountries.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].name;
    //   option.value = data[i].abbreviation;
      dropdownCountry.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

requestCountries.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + urlCountries);
};

requestCountries.send();

let labelZipPostalCode = document.createElement("label")
labelZipPostalCode.innerHTML=("Zip or Postal Code")
let zipPostalCode = document.createElement('input')
zipPostalCode.setAttribute ("type","text")
zipPostalCode.setAttribute ("class","flex-item");
zipPostalCode.setAttribute("id", "zipPostalCode")
labelZipPostalCode.append(zipPostalCode)
formCreateUser.append(labelZipPostalCode);

let labelDOB = document.createElement("label")
labelDOB.innerHTML = ("Date of Birth")
let DOB = document.createElement('input')
DOB.setAttribute ("type","date")
DOB.setAttribute ("class","flex-item")
DOB.setAttribute("id", "DOB")
labelDOB.append(DOB)
formCreateUser.append(labelDOB);

let labelGender = document.createElement("label")
labelGender.innerHTML=("Gender")
let gender = document.createElement('select')
// gender.setAttribute ("type","option")
gender.setAttribute ("class","flex-item")
gender.setAttribute("id", "gender")
labelGender.append(gender)
formCreateUser.append(labelGender);

let dropdownGender = document.getElementById('gender');
dropdownGender.length = 0;

let defaultOptionGender = document.createElement('option');
defaultOptionGender.text = 'Choose Gender';

dropdownGender.add(defaultOptionGender);
dropdownGender.selectedIndex = 0;

const urlGenders = 'http://localhost:3000/public/genders.JSON';

const requestGenders = new XMLHttpRequest();
requestGenders.open('GET', urlGenders, true);

requestGenders.onload = function() {
  if (requestGenders.status === 200) {
    const data = JSON.parse(requestGenders.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].name;
    //   option.value = data[i].abbreviation;
      dropdownGender.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

requestGenders.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + urlGenders);
};

requestGenders.send();

let createAccount = document.createElement('button')
createAccount.setAttribute("class", "btn btn-info")
createAccount.setAttribute("type", "submit")
createAccount.setAttribute("id", "btn-create-account")
createAccount.innerText = "Create User Account"
formCreateUser.append(createAccount)
// createAccount.setAttribute("href", "http://localhost:3000/checkout")

let vfirstName = document.getElementById("firstName").value
let vlastName = document.getElementById("lastName").value
let vemail = document.getElementById("email").value
let vstreetAddress = document.getElementById("streetAddress").value
let vcity = document.getElementById("city").value
let vstateProvince = document.getElementById("stateProvince").value
let vcountry = document.getElementById("country").value
let vzipPostalCode = document.getElementById("zipPostalCode").value
let vDOB = document.getElementById("DOB").value
let vgender = document.getElementById("gender").value
createAccount.onclick = function(){
    axios.post('http://localhost:3000/createaccount', {
        firstName:vfirstName,
        lastName:vlastName,
        email:vemail,
        streetAddress:vstreetAddress,
        city:vcity, 
        stateProvince:vstateProvince,country:vcountry,
        zipPostalCode:vzipPostalCode,DOB:vDOB,
        gender:vgender
    }) 

}


