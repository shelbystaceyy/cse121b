/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");

const templesList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temp => {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = temp.templeName
    const img = document.createElement('img');
    img.src = temp.imageUrl;
    img.alt = temp.location;
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
    })
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
            const data = await response.json();
            templesList.push(...data);
            displayTemples(data);
    };

/* reset Function */
const reset = () => {
    while (templesElement.firstChild) {
      templesElement.removeChild(templesElement.firstChild);
    }
  };
  

/* sortBy Function */
const sortBy = () => {
    reset()
    const filter = document.getElementById('sortBy').value;
    switch (filter) {
        case 'utah':
            const utahTemples = templesList.filter(sort => sort.location.includes("Utah"));
            displayTemples(utahTemples);
            break;

         case 'notutah':
            const notUtahTemples = templesList.filter(sort => !sort.location.includes("Utah"));
            displayTemples(notUtahTemples);
            break;

        case 'older':
            const olderTemples = templesList.filter(sort => new Date(sort.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;

        case 'all':
            displayTemples(templesList);
            break;
    }

}

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templesList)});