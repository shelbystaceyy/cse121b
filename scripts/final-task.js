/* final project */

/* scripture array */
const scriptureElement = document.getElementById("scriptures");

const scriptureList = [];

/* displaying the scripture */
const displayScripture = (scriptures) => {
    if (Array.isArray(scriptures) && scriptures.length > 0) {
        scriptures.forEach(script => {
            const article = document.createElement('article');
            const h3 = document.createElement('h3');
            const title = `${script.book} ${script.chapter}:${script.verse}`;
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
        });
    } else {
        console.error("No valid scriptures data to display.");
}}

/* connecting the JSON file */
const getScriptures = async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/shelbystaceyy/scriptures/main/scriptures.json')
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomScripture = data[randomIndex];
        console.log("Random Scripture Selected:", randomScripture);
        displayScripture([randomScripture]);
    } catch (error) {
        console.error("Error fetching JSON data:", error);
    }
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
    getScriptures();
    button.classList.add("hidden");
});