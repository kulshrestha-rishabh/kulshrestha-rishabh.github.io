//if User hits the button ,adding it to localStorage
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="note-Card my-2 mx-2 card"style="width:18rem">
            <div class="card-body">
                <h5 class="card-title">Note ${index+1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>
        `
    }
    );
    let notesElm=document.getElementById('notes');
    if(notesObj.length!=0)
    {
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`Nothing to show use "add Notes" section  from above to add notes.`;
    }
}
//function to delete a node
function deleteNode(index)
{
    console.log('i am deleting',index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();

}
//Implementing the search bar 
let search=document.getElementById("searchTxt");
search.addEventListener("input",function(){
    let inputVal=search.value.toLowerCase();
    console.log('INput event fired',inputVal);
    let notescards=document.getElementsByClassName("note-Card");
    Array.from(notescards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerHTML;
        console.log(cardTxt);
        if(cardTxt.includes(inputVal))
        {
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
        console.log(cardTxt);
    })
})