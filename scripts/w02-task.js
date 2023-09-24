/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Shelby Stacey';

const currentYear = 2023;

var profilePicture = 'images/shelby.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

var imageElement = document.getElementsByTagName('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}<strong>`;

yearElement.textContent = `${currentYear}`;

imageElement.setAttribute = ('src', profilePicture);

imageElement.setAttribute = ('alt', `Profile image of: ${fullName}`)


/* Step 5 - Array */

const favFood = ['Pasta', 'Cheescake', 'Tacos', 'French Fries'];

foodElement.textContent = `${favFood.join(', ')}`;

var addFavFood = 'Gyros';

favFood.push(addFavFood);

foodElement.innerHTML += `<br>${favFood.join(', ')}`;

favFood.shift();

foodElement.innerHTML += `<br>${favFood.join(', ')}`;

favFood.pop();

foodElement.innerHTML += `<br>${favFood.join(', ')}`;












