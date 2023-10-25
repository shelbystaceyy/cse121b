/* final project */

/* scripture array */
const scriptureElement = document.getElementById("scriptures");

const scriptureList = [];

/* displaying the scripture */
const displayScripture = (scriptures) => {
    scriptures.forEach(script => {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    const title = "book: ${script.book}, chapter: ${script.chapter}, verse: ${script.verse}";
    h3.textContent = title;
    const p = document.createElement('p');
    p.textContent = script.scripture;
    const img = document.createElement('img');
    img.src = script.image;
    img.alt = title;
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(img);
    templesElement.appendChild(article);
    })
};

/* connecting the JSON file */
const getScriptures = async () => {
    const response = await fetch('https://raw.githubusercontent.com/shelbystaceyy/scriptures/main/scriptures.json')
        const data = await response.json();
        templesList.push(...data);
        displayTemples(data);
};
