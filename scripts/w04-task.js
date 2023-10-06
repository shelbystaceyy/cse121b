/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Shelby Stacey",
    photo: "images/shelby.jpg",
    favoriteFoods: [
        "cheesecake",
        "pasta",
        "salad",
        "fish"
    ],
    hobbies: [
        "cooking",
        "music",
        "reading",
        "dancing"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
      place: 'Fontana, CA',
      length: '18 years'
    },
    {
        place: "Rexburg, ID",
        length: "1 year"
    }
  );


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach(item => {
    let dt = document.createElement('dt');
    dt.textContent = item.place;
    let dd = document.createElement("dd");
    dd.textContent = item.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});
