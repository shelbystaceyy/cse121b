/* final project */

/* scripture array */
const scriptureElement = document.getElementById("scriptures");

const scriptureList = [];

/* displaying the scripture */
const displayScripture = (scriptures) => {
    if (Array.isArray(scriptures)) {
        scriptures.forEach(script => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const title = script.book + ' ' + script.chapter + ':' + script.verse;
        h3.textContent = title;
        const p = document.createElement('p');
        p.textContent = script.scripture;
        const img = document.createElement('img');
        img.src = script.image;
        img.alt = title;
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(img);
        scriptureElement.appendChild(article);
        })
    } else {
        console.error("No valid scriptures data to display.");
}}

/* connecting the JSON file */
const getScriptures = async () => {
    const response = await fetch('https://raw.githubusercontent.com/shelbystaceyy/scriptures/main/scriptures.json')
        const data = await response.json();
        scriptureList.push(...data);
        displayScripture(data);
        console.log(data);
};

/* button code */
const reset = () => {
    while (scriptureElement.firstChild) {
      scriptureElement.removeChild(scriptureElement.firstChild);
    }
  };

const button = document.getElementById('button');
button.addEventListener("click", () => {
    reset();
    const randomIndex = Math.floor(Math.random() * scriptureList.length);
    const randomScripture = scriptureList[randomIndex];
    console.log("Random Scripture Selected:", randomScripture);
    displayScripture(randomScripture)
    /*getScriptures();*/
    button.classList.add("hidden");
});