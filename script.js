let User = "..";
function btnSend() {
    // let message = document.getElementById("myText").value;
    let message = {
        "text" : document.getElementById("myText").value,
        "user" : User
    }
    console.log(JSON.stringify( message ));
    $.ajax({
        url         : 'http://localhost:3000/postMessage',
        dataType    : 'json',
        type        : 'post',
        contentType : 'application/json',
        data        : JSON.stringify(message),
        processData : false,
        success: function( data, textStatus, jQxhr ){
            console.log( JSON.stringify( data ) );
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
}

function onload(){
    // User = prompt("Please enter your name:", "");
    //GET pour optennir la date du jour
    fetch('http://localhost:3000/dateDuJour')
    .then(response => response.json())
    .then(response => {
        document.getElementById("conv").innerHTML = "la date du jour : " + response.date;
        console.log("GET pour optenir la date du jour : ");
        console.log(response.date);
    })
}


function getMessage(){
    //POST pour envoyer les données a la db 
    
}