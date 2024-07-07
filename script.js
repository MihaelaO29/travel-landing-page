
 const boraboraImg = "url('img/borabora.jpg')";
 const baliImg = "url('img/bali.jpg')";
 const palawanImg = "url('img/palawan.jpg')";
 const aboutBoraBora = "Small South Pacific Islan nrthwest of Tahiti in French Polynsia, surrounded by motus.";
 const aboutBali = "Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast.";
 const aboutPalawan = "Palawan’s best-known spots are El Nido and Coron with their spectacular dive sites, but there are also more off-the-beaten-track locations such as Port Barton, Taytay, Roxas, Brooke’s Point and San Vicente to discover. ";
 const boraBoraTitle = "Bora Bora";
 const baliTitle = "Bali";
 const palawanTitle = "Palawan";
const allImage = document.querySelectorAll('.image');

allImage.forEach((img, i) => {
    img.addEventListener('click', function () {
    const aboutIsland = document.querySelector ('.information');
    const title = document.querySelector('.title');
        if (i === 0) {
            document.body.style.backgroundImage = boraboraImg;
            aboutIsland.textContent = aboutBoraBora;
            title.textContent =  boraBoraTitle;
        } else if (i === 1) {
            document.body.style.backgroundImage = baliImg;
            aboutIsland.textContent = aboutBali;
            title.textContent = baliTitle;
        } else {
            document.body.style.backgroundImage = palawanImg;
            aboutIsland.textContent = aboutPalawan;
            title.textContent = palawanTitle;
        }

    })
});