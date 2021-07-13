
let sTot = document.getElementById('sTot');
let tTos = document.getElementById('tTos');

    let showBtn1 = document.getElementById('showBtn1');
    showBtn1.style.display = "none";

    let showBtn2 = document.getElementById('showBtn2');
    showBtn2.style.display = "none";    


sTot.addEventListener('click', function(){
    let showBtn1 = document.getElementById('showBtn1');
    showBtn1.style.display = "block";
    let showBtn2 = document.getElementById('showBtn2');
    showBtn2.style.display = "none"; 
    // showBtn.innerHTML = ``;
});
tTos.addEventListener('click', function(){
    let showBtn2 = document.getElementById('showBtn2');
    showBtn2.style.display = "block";
    let showBtn1 = document.getElementById('showBtn1');
    showBtn1.style.display = "none";
    // showBtn.innerHTML = ``;
});




//Show privious  sarch content 

let speakBtnn = document.getElementById("speakBtn");
// let speakBtnn = document.getElementById("speakBtnn");

speakBtnn.addEventListener('click', function(){
    let textWrite = document.getElementById("textWrite");
    if(textWrite.value.length == 0){

    }
    else{
    let history = localStorage.getItem("history");

    let historyObj;

    if(history == null){
        historyObj = [];
    }
    else{
        historyObj = JSON.parse(history);

    }

    historyObj.push(textWrite.value);

    localStorage.setItem('history', JSON.stringify(historyObj));
}

})


function showHistory() {
    let history = localStorage.getItem("history");
    let notesObj;
    if (history == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(history);
    }

    let html = "";

    notesObj.forEach(function (element, index) {
        html += `
        <div class="col-sm my-2 mx-2">
        <div class="card noteCard" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Your History ${index + 1}</h5>
                <hr class="bg-dark">
                <p class="card-text">${element}</p>
                <button onclick="deleteNotes(this.id);" class="btn btn-primary" id = "${index}">Delete Note</button>
            </div>
        </div>
    </div> `
    });
    
    let myNotes = document.getElementById('history');

    if(notesObj.length != 0){
        myNotes.innerHTML = html;
    }
    else{
        myNotes.innerHTML = `<h3 class = "text-warning mx-auto" style = "text-align:center;">Nothing to show here , please add your notes!</h3>`
    }

}


//to see the history
let seeHistory = document.getElementById('seeHistory');
seeHistory.addEventListener('click', showHistory);



//Delete
function deleteNotes(index){
    // console.log(index);
    let isDelete = confirm("Do you want to delete ? You can't get data after deleting it.");
    if(isDelete){
    let history = localStorage.getItem("history");
    // console.log("Yes" + history);
    let notesObj;
    if (history == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(history);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("history", JSON.stringify(notesObj));
}
    showHistory();

}



//Search History


let search = document.getElementById('searchTxt');
// let search = document.getElementById('searchBtn');
search.addEventListener("input", function(){
    let inputvalue = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    console.log(noteCards);
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        // let cardTxt = element.children[0].getElementsByTagName('p')[0].innerText;

        if(cardTxt.includes(inputvalue)){
            // element.style.display = "block";
            element.parentElement.style.display = "block";
        }
        else
        element.parentElement.style.display = "none";
    })

    
})