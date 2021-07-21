console.log("Hello World!");
shownotes();
let adbtn = document.getElementById("addBtn");
adbtn.addEventListener("click", function (e) {
  let adtxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) notesObj = [];
  else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(adtxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  adtxt.value = "";
  console.log(notesObj);
  shownotes();
});
function shownotes() {
  // body...
  let notes = localStorage.getItem("notes");
  if (notes == null) notesObj = [];
  else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class="notecard my-2 mx-2 card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Note${index + 1}</h5>
    <p class="card-text">${element}</p>
    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Node </button>
  </div>
</div>`;
  });
  let notelm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notelm.innerHTML = html;
  } else {
    notelm.innerHTML = `Nothing to show!! Kindly "Add a note" by clicking above `;
  }
}
function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) notesObj = [];
  else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  shownotes();
}
// for search button
let searchtxt = document.getElementById("searchtxt");
searchtxt.addEventListener("input", function () {
  let val = searchtxt.value.toLowerCase();
  let notecard = document.getElementsByClassName("notecard");
  Arrays.from(notecard).forEach(function (element) {
    let cardtxt = element.getElementsByTagName("p")[0].innerText;
    if (cardtxt.includes(val)) element.style.display = "block";
    else {
      element.style.display = "none";
    }
  });
});
