let User = "defuser";

function btnSend() {
    // let message = document.getElementById("myText").value;
    let message = {
        "text": document.getElementById("myText").value,
        "user": User
    }
    console.log(JSON.stringify(message));
    $.ajax({
        url: 'http://localhost:3000/postMessage',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(message),
        processData: false,
        success: function(data, textStatus, jQxhr) {
            console.log(JSON.stringify(data));
        },
        error: function(jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    }).then(
        alert("message envoyer"),
        getMessage()
    );
}

function onload() {
    getMessage();
    User = prompt("Please enter your name:", "thib");
    //GET pour optennir la date du jour
    fetch('http://localhost:3000/dateDuJour')
        .then(response => response.json())
        .then(response => {
            // document.getElementById("date").innerHTML = "la date du jour : " + response.date;
            console.log("GET pour optenir la date du jour : ");
            console.log(response.date);
        })

}


function getMessage() {
    //get pour recupere les messages
    fetch('http://localhost:3000/getMessage')
        .then(response => response.json())
        .then(response => {
            console.log(response);
            let html = "" /*" <tr id='headTable'><th>Message</th><th>envoyer par</th></tr>"*/ ;
            response.forEach(element => {
                let message = "Message : " + element.mesText + " | ecrit par " + element.mesUser
                // html += "<tr> <td> " + element.mesText + "</td><td> " + element.mesUser + "</td></tr>";
                html += "<div class='container'><label class='right'>de :"+element.mesUser+
                        "</label><p>"+
                        element.mesText+
                        "</p><span class='time-left'>"+
                        element.mesDate+
                        "</span></div>"
            });
            console.log(html);
            //sortie affichage
            document.getElementById("conv").innerHTML = html;
        });
}
// style logique
$(function() {
    $('html, body').animate({scrollTop:$(document).height()}, 100);
});