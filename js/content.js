// Declare Variables
let sizes = document.querySelector('#sizes');
let colors = document.querySelector('#colors');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const address1 = document.querySelector('#address1');
let address2 = document.querySelector('#address2');
const city = document.querySelector('#city');
const state = document.querySelector('#state');
const zip = document.querySelector('#zip');
const country = document.querySelector('#country');
const submit = document.querySelector('button');
let productName = document.querySelector('#productName');
let container = document.querySelector('#container');
let productSizeContent = '';
let productColorContent = '';


// Event Listeners
sizes.addEventListener('click', function(e) {
    productSizeContent = '';
    if(e.target.className == 'size' || e.target.parentElement.nodeName == 'DIV'){
        if(e.target.id !== ""){
            toggleColor(e.target.id);
            productSizeContent += document.getElementById(e.target.id).id[0].toUpperCase()
            + document.getElementById(e.target.id).id.substring(1);
        } else {
            toggleColor(e.target.parentElement.id);
            productSizeContent += document.getElementById(e.target.parentElement.id).id[0].toUpperCase()
            + document.getElementById(e.target.parentElement.id).id.substring(1);
        }
    }
}, false);

colors.addEventListener('click', function(e) {
    productColorContent = '';
    if(e.target.className == 'color' || e.target.parentElement.nodeName == 'DIV'){
        if(e.target.id !== ""){
            toggleColor(e.target.id);
            productColorContent += document.getElementById(e.target.id).id[0].toUpperCase()
            + document.getElementById(e.target.id).id.substring(1);
        } else {
            toggleColor(e.target.parentElement.id);
            productColorContent += document.getElementById(e.target.parentElement.id).id[0].toUpperCase()
            + document.getElementById(e.target.parentElement.id).id.substring(1);
        }
    }
    if(!productName.innerHTML){
        productName.innerHTML = productSizeContent + " " + productColorContent + ' Shirt';
    } else {
        productName.innerHTML = null;
        productName.innerHTML = productSizeContent + " " + productColorContent + ' Shirt';
    }
}, false);

window.addEventListener('load', function() {
    name.value = '';
    email.value = '';
    address1.value = '';
    address2.value = '';
    city.value = '';
    state.value = '';
    zip.value = '';
    country.selectedIndex = 0;
}, false);

name.addEventListener('input', function() {
    let enteredName = document.querySelector('#enteredName');
    enteredName.innerHTML = '<p>' + name.value + '</p>';
}, false);

email.addEventListener('input', function() {
    let enteredEmail = document.querySelector('#enteredEmail');
    enteredEmail.innerHTML = '<p>' + email.value + '</p>';
}, false);

address1.addEventListener('input', function() {
    let enteredAddress1 = document.querySelector('#enteredAddress1');
    enteredAddress1.innerHTML = '<p>' + address1.value + '</p>';
}, false);

address2.addEventListener('input', function() {
    let enteredAddress2 = document.querySelector('#enteredAddress2');
    enteredAddress2.innerHTML = '<p>' + address2.value + '</p>';
}, false);

city.addEventListener('input', function() {
    let enteredCity = document.querySelector('#enteredCity');
    enteredCity.innerHTML = '<p>' + city.value + ", " + '</p>';
}, false);

state.addEventListener('input', function() {
    let enteredState = document.querySelector('#enteredState');
    enteredState.innerHTML = '<p>' + state.value + '</p>';
}, false);

zip.addEventListener('input', function() {
    let enteredZip = document.querySelector('#enteredZip');
    enteredZip.innerHTML = '<p>' + zip.value + '</p>';
}, false);

country.addEventListener('input', function() {
    let enteredCountry = document.querySelector('#enteredCountry');
    enteredCountry.innerHTML = '<p>' + country.value + "</p>";
}, false);

submit.addEventListener('click', (event) => {
    event.preventDefault();

    let validateName = new CheckValidity(name, "text");
    let validateEmail = new CheckValidity(email, "email");
    let validateAddress1 = new CheckValidity(address1, "text");
    let validateCity = new CheckValidity(city, "text");
    let validateState = new CheckValidity(state, "text");
    let validateZip = new CheckValidity(zip, "text");
    let validateCountry = new CheckValidity(country, "text");

    let nameErrors = validateName.getMessages();
    let emailErrors = validateEmail.getMessages();
    let addressErrors = validateAddress1.getMessages();
    let cityErrors = validateCity.getMessages();
    let stateErrors = validateState.getMessages();
    let zipErrors = validateZip.getMessages();
    let countryErrors = validateCountry.getMessages();

    if(nameErrors.length > 0){
        nameErrors.forEach( (err) => {
            name.insertAdjacentHTML('afterend', '<p class="error" id="nameError">' + err + '</p>')
        })
    }

    if(emailErrors.length > 0){
        emailErrors.forEach( (err) => {
            email.insertAdjacentHTML('afterend', '<p class="error" id="emailError">' + err + '</p>')
        })
    }

    if(addressErrors.length > 0){
        addressErrors.forEach( (err) => {
            address1.insertAdjacentHTML('afterend', '<p class="error" id="addressError">' + err + '</p>')
        })
    }

    if(cityErrors.length > 0){
        cityErrors.forEach( (err) => {
            city.insertAdjacentHTML('afterend', '<p class="error" id="cityError">' + err + '</p>')
        })
    }

    if(stateErrors.length > 0){
        stateErrors.forEach( (err) => {
            state.insertAdjacentHTML('afterend', '<p class="error" id="stateError">' + err + '</p>')
        })
    }

    if(zipErrors.length > 0){
        zipErrors.forEach( (err) => {
            zip.insertAdjacentHTML('afterend', '<p class="error" id="zipError">' + err + '</p>')
        })
    }

    if(countryErrors.length > 0){
        countryErrors.forEach( (err) => {
            country.insertAdjacentHTML('afterend', '<p class="error" id="countryError">' + err + '</p>')
        })
    }

    if(nameErrors == 0 && emailErrors == 0 && addressErrors == 0 && cityErrors == 0 && stateErrors == 0
        && zipErrors == 0 && countryErrors == 0){
        let containerContent = '';

        containerContent += '<div id="success">';
        containerContent += '<h1>' + 'Order Completed' + '</h1>';
        containerContent += document.querySelector('#orderDetails').innerHTML;
        containerContent += '</div>';
        containerContent += '<div id="successCheck">';
        containerContent += '<img src=images/circle-check.svg ';
        containerContent += 'alt=success />';
        containerContent += '</div>';

        container.innerHTML = containerContent;
        let success = document.querySelector('#success');

        success.removeChild(document.getElementById('btn'));
        document.body.style.backgroundColor = 'white';
    }
});

name.addEventListener('blur', function() {
    let validateName = new CheckValidity(name, "text");
    let nameErrors = validateName.getMessages();
    let parent = name.parentElement;

    if(nameErrors.length > 0){
        // Remove any error messages currently present before adding new ones.
        if(document.querySelector('#nameError')){
            parent.removeChild(document.querySelector('#nameError'));
        }

        //Add errors to DOM
        nameErrors.forEach( (err) => {
            name.insertAdjacentHTML('afterend', '<p class="error" id="nameError">' + err + '</p>')
        });
        name.style.borderColor = 'red';
    } else {
        if(document.querySelector('#nameError')){
            parent.removeChild(document.querySelector('#nameError'));
        }
    }
});

email.addEventListener('blur', function() {
    let validateEmail = new CheckValidity(email, "email");
    let emailErrors = validateEmail.getMessages();
    let parent = email.parentElement;

    if(emailErrors.length > 0){
        // Remove any error messages currently present before adding new ones.
        if(document.querySelector('#emailError')){
            parent.removeChild(document.querySelector('#emailError'));
        }

        //Add errors to DOM
        emailErrors.forEach( (err) => {
            email.insertAdjacentHTML('afterend', '<p class="error" id="emailError">' + err + '</p>')
        });
        email.style.borderColor = 'red';
    } else {
        if(document.querySelector('#emailError')){
            parent.removeChild(document.querySelector('#emailError'));
        }
    }
});

address1.addEventListener('blur', function() {
    let validateAddress = new CheckValidity(address1, "text");
    let addressErrors = validateAddress.getMessages();
    let parent = address1.parentElement;

    if(addressErrors.length > 0){
        // Remove any error messages currently present before adding new ones.
        if(document.querySelector('#addressError')){
            parent.removeChild(document.querySelector('#addressError'));
        }

        //Add errors to DOM
        addressErrors.forEach( (err) => {
            address1.insertAdjacentHTML('afterend', '<p class="error" id="addressError">' + err + '</p>')
        });
        address1.style.borderColor = 'red';
    } else {
        if(document.querySelector('#addressError')){
            parent.removeChild(document.querySelector('#addressError'));
        }
    }
});

city.addEventListener('blur', function() {
    let validateCity = new CheckValidity(city, "text");
    let cityErrors = validateCity.getMessages();
    let parent = city.parentElement;

    if(cityErrors.length > 0){
        // Remove any error messages currently present before adding new ones.
        if(document.querySelector('#cityError')){
            parent.removeChild(document.querySelector('#cityError'));
        }

        //Add errors to DOM
        cityErrors.forEach( (err) => {
            city.insertAdjacentHTML('afterend', '<p class="error" id="cityError">' + err + '</p>')
        });
        city.style.borderColor = 'red';
    } else {
        if(document.querySelector('#cityError')){
            parent.removeChild(document.querySelector('#cityError'));
        }
    }
});

state.addEventListener('blur', function() {
    let validateState = new CheckValidity(state, "text");
    let stateErrors = validateState.getMessages();
    let parent = state.parentElement;

    if(stateErrors.length > 0){
        // Remove any error messages currently present before adding new ones.
        if(document.querySelector('#stateError')){
            parent.removeChild(document.querySelector('#stateError'));
        }

        //Add errors to DOM
        stateErrors.forEach( (err) => {
            state.insertAdjacentHTML('afterend', '<p class="error" id="stateError">' + err + '</p>')
        });
        state.style.borderColor = 'red';
    } else {
        if(document.querySelector('#stateError')){
            parent.removeChild(document.querySelector('#stateError'));
        }
    }
});

zip.addEventListener('blur', function() {
    let validateZip = new CheckValidity(zip, "text");
    let zipErrors = validateZip.getMessages();
    let parent = zip.parentElement;

    if(zipErrors.length > 0){
        // Remove any error messages currently present before adding new ones.
        if(document.querySelector('#zipError')){
            parent.removeChild(document.querySelector('#zipError'));
        }

        //Add errors to DOM
        zipErrors.forEach( (err) => {
            zip.insertAdjacentHTML('afterend', '<p class="error" id="zipError">' + err + '</p>')
        });
        zip.style.borderColor = 'red';
    } else {
        if(document.querySelector('#zipError')){
            parent.removeChild(document.querySelector('#zipError'));
        }
    }
});

country.addEventListener('blur', function() {
    let validateCountry = new CheckValidity(zip, "text");
    let countryErrors = validateCountry.getMessages();
    let parent = country.parentElement;

    if(countryErrors.length > 0){
        // Remove any error messages currently present before adding new ones.
        if(document.querySelector('#countryError')){
            parent.removeChild(document.querySelector('#countryError'));
        }

        //Add errors to DOM
        countryErrors.forEach( (err) => {
            country.insertAdjacentHTML('afterend', '<p class="error" id="countryError">' + err + '</p>')
        });
        country.style.borderColor = 'red';
    } else {
        if(document.querySelector('#countryError')){
            parent.removeChild(document.querySelector('#countryError'));
        }
    }
});

// Functions
function toggleColor(divId){
    if(document.getElementById(divId).style.border == 'none' || document.getElementById(divId).style.border == ''
    || document.getElementById(divId).style.border == 'medium none'){
        document.getElementById(divId).style.border = '3px solid blue';
    } else {
        document.getElementById(divId).style.border = 'none';
    }
    checkChildren(divId);
}

function checkChildren(divId){
    let parent = document.getElementById(divId).parentElement;
    let children = parent.getElementsByTagName('*');

    for(let i = 0; i < children.length; i++){
        if(children[i].style.border == '3px solid blue' && children[i].id !== divId){
            children[i].style.border = 'none';
        }
    }
}

// Create validity class
class CheckValidity {
    constructor(input, type){
        this.input = input;
        this.type = type;
        this.error = [];
    }

    addError(message) {
        this.error.push(message)
    }

    getMessages() {
        const status = this.input.validity;

        if(status.valueMissing) {
            this.addError("Field can not be left blank.");
        }

        if(status.patternMismatch) {
            this.addError("Entry does not match the field type.");
        }

        return this.error;
    }
}