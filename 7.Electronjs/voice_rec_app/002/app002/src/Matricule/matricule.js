let h1 = document.getElementById("matinput");
var Matricules = [];

fetch("matricules.json")
  .then((response) => response.json())
  .then((json) => (Matricules = json));

const add = (num) => {
  if (h1.innerHTML.length < 4) h1.innerHTML += num;
};

const clean = () => {
  h1.innerHTML = h1.innerHTML.slice(0, -1);
};

const check = async () => {
  console.log("checking matricule", Matricules);
  //console.log("is it there ?", Matricules.includes(parseInt(h1.textContent)));
  if (Matricules.includes(parseInt(h1.textContent))) {
    ipcRenderer.send("go_to_record");
  }
};
