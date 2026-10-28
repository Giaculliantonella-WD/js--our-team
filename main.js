let teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];




function getMemberCard(member) {
  return `<div class="team-card">
                    <div class="card-image">
                        <img src="${member.img}" alt="${member.name}">
                    </div>
                    <div class="card-test">
                        <h3>${member.name}</h3>
                        <h4>${member.role}</h4>
                        <p>${member.email}</p>
                    </div>
                </div>`;

}

function renderTeam(listaMembri) {
  const teamCardsContainer = document.querySelector(".team-container");

  let htmlDaScrivere = "";

  for (const thisMember of listaMembri) {
    htmlDaScrivere += getMemberCard(thisMember);


  }

  teamCardsContainer.innerHTML = htmlDaScrivere;


}



function onFormSubmit(event) {
  event.preventDefault();

  const nameField = document.getElementById("name");
  const roleField = document.getElementById("role");
  const imageField = document.getElementById("image");
  const emailField = document.getElementById("email");

  const newName = nameField.value;
  const newRole = roleField.value;
  const newImage = imageField.value;
  const newEmail = emailField.value;


  if (!newName || !newRole || !newImage || !newEmail) {
    alert("i campi sono obbligatori!!");
    return;
  }

  const newMember = {
    name: newName,
    role: newRole,
    img: newImage,
    email: newEmail
  }


  teamMembers.push(newMember);

  saveMembersToStorage(teamMembers);


  renderTeam(teamMembers);

  event.target.reset();
}

function saveMembersToStorage(memberslist) {
  const datoSerializzato = JSON.stringify(memberslist);
  localStorage.setItem("members", datoSerializzato);
}

function loadMembersFromStorage() {
  const datoSerializzato = localStorage.getItem("members");
  const nuovoArrey = JSON.parse(datoSerializzato);
  return nuovoArrey;
}

const membriSalvati = loadMembersFromStorage();

if (membriSalvati == null) {
  saveMembersToStorage(teamMembers);

} else {
  teamMembers = membriSalvati;
}

renderTeam(teamMembers);

const form = document.getElementById('member-form');

form.addEventListener("submit", onFormSubmit);