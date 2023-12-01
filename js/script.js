// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sotto forma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!



const teamMembers = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & Ceo",
        "foto": "img/wayne-barnett-founder-ceo.jpg", 
    },
    {
        "nome": "Angela Carroll",
        "ruolo": "Chief Editor",
        "foto": "img/angela-caroll-chief-editor.jpg", 
    },
    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "foto": "img/walter-gordon-office-manager.jpg", 
    },
    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "foto": "img/angela-lopez-social-media-manager.jpg", 
    },
    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "foto": "img/scott-estrada-developer.jpg",
    },
    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "foto": "img/barbara-ramos-graphic-designer.jpg",
    },
];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// versione con ciclo for in 
for (let member in teamMembers){
    console.log(teamMembers[member]);
}

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sotto forma di stringhe

// creo una const che contenga l'elemento padre
const teamContainer = document.querySelector("div.container");

// creo un ciclo for per stampare gli elementi dell'array dentro a un div che andrà dentro div.container
for (let i = 0; i < teamMembers.length; i++) {
    // Creo un div per ogni membro del team
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("Member");

    // Creo un paragrafo con le informazioni del membro
    const memberInfo = document.createElement("p");
    memberInfo.textContent = `Nome: ${teamMembers[i].nome}, Ruolo: ${teamMembers[i].ruolo}`;

    // Aggiungo il paragrafo al div del membro
    memberDiv.appendChild(memberInfo);

    // Aggiungo il div del membro al contenitore del team
    teamContainer.appendChild(memberDiv);  
}





