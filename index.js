var showresult=document.getElementById("showresult");
var submitbutton=document.getElementById("submitbutton");
var request = new XMLHttpRequest();

function btnclick(){
    var inputsearch = document.getElementById("inputsearch").value;

    request.addEventListener('load',getElement);
    request.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=8318c431b4fc8a2c4762bf2a52c351ee&query='+inputsearch);
    request.send();
}

submitbutton.addEventListener("click",btnclick);

function getElement() {
    var getData = JSON.parse(request.responseText); 
    fetchData(getData.results)
}

function fetchData(element){
    element.forEach((i)=>{
        console.log(i.overview)
        showresult.innerHTML=`<p>Title : ${i.title}</p>
        <p>over view : ${i.overview}</p>
        <p>Release Date :  ${i.release_date}</p>
     `   
    });
}
