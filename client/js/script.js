/*var endpointUsers = "http://localhost:3000/users/" 


////////// CLEAN - BEGIN

// CREATE
var requestCreateUser = function(user){
$.ajax({
method : "POST",
url: endpointUsers,
data: user,
success : function(data, textStatus, xhr){
console.log("done : " + JSON.stringify(data));
window.location.reload(true);
},
error: function(xhr, textStatus, errorThrown){
console.log("fail : " + errorThrown);
}
});
};

$('#ModalAdd').on('show.bs.modal', function (event) {
var button = $(event.relatedTarget) // Button that triggered the modal
var userid = button.data('userid') // Extract info from data-* attributes

var modal = $(this)

modal.find('.modal-footer #BtnCreateUser').click(function(e){
var user = {};
user.firstname = modal.find('.modal-body #firstname').val();
user.lastname = modal.find('.modal-body #lastname').val();
requestCreateUser(user);
});  
})

// DELETE
var requestDeleteUser = function(userid){
console.log("requestDeleteUser :" + userid);
url = endpointUsers + userid;
$.ajax({
method : "DELETE",
url: url,
success : function(data, textStatus, xhr){
console.log("done : " + data);
window.location.reload(true);
},
error: function(xhr, textStatus, errorThrown){
console.log("fail : " + errorThrown);
}
});
};


// READ  
function requestGetUser(userId){
url = endpointUsers + userId
return $.ajax({
method : "GET",
url: url,
dataType: "text",
success : function(data){
console.log("requestGetUser done : " + data);
return data;
},
error: function(){
console.log("fail");
}
});
};

$('#ModalDetails').on('show.bs.modal', function (event) {
var button = $(event.relatedTarget) // Button that triggered the modal
var userid = button.data('userid') // Extract info from data-* attributes
var modal = $(this);

requestGetUser(userid).done(function(data){
data = JSON.parse(data);
modal.find('.modal-body textarea').val(data.firstname + ' ' + data.lastname) ;
}    
).fail(function(){
modal.find('.modal-body textarea').val("error");}
);
})

// READ ALL
function requestGetUsers(){
return $.ajax({
method : "GET",
url: endpointUsers,
dataType: "text",
success : function(data){
return data;
},
error: function(){
console.log("fail");
}
});
};

function DisplayUsers(){
requestGetUsers().done(
function(data){
$("#Users").empty();
$.each(JSON.parse(data), function(idx, obj){
$("#Users").append('<li class="list-group-item">' + obj.firstname + ' ' + obj.lastname +  
'<button type="button" class="btn btn-default" aria-label="Details" data-toggle="modal" data-target="#ModalDetails" data-userid="'+ obj._id +'"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></button>' +
'<button type="button" class="btn btn-default" aria-label="Edit" data-toggle="modal" data-target="#ModalUpdate" data-userid="'+ obj._id +'"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>' +
'<button type="button" class="btn btn-default" aria-label="Delete" onclick="requestDeleteUser(\''+ obj._id +'\');"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>' +
'</li>');
})
}
).fail(
function(){
//TODO
}
)
}

// UPDATE
function requestUpdateUser(userid, user){
url = endpointUsers + userid;
return $.ajax({
method : "PUT",
url: url,
data: user,
success : function(data, textStatus, xhr){
console.log("done : " + data);
},
error: function(xhr, textStatus, errorThrown){
console.log("fail : " + errorThrown);
}
});
}

////////// CLEAN - END



$('#ModalUpdate').on('show.bs.modal', function (event) {
var button = $(event.relatedTarget) // Button that triggered the modal
var userid = button.data('userid') // Extract info from data-* attributes
var modal = $(this)

requestGetUser(userid).done(function(data){
data = JSON.parse(data);
modal.find('.modal-body #lastnameupdate').val(data.lastname);
modal.find('.modal-body #firstnameupdate').val(data.firstname);
modal.find('.modal-footer #BtnUpdateUser').click( function(e){
var user = {};
user.firstname = modal.find('.modal-body #firstnameupdate').val();
user.lastname = modal.find('.modal-body #lastnameupdate').val();
requestUpdateUser(userid, user).done(function(){
window.location.reload(true);
}).fail(function(){
//TODO
});
});
}).fail(function(){
modal.find('.modal-body textarea').val("error");}
);
})


$( document ).ready(function() {
DisplayUsers();

$("#BtnGetUsers").click( function(e){
e.preventDefault();
DisplayUsers();
});
});

*/

























window.onload = function(){

    const urlApi = "http://localhost:3000/gramma";

    var userRequestElement = document.getElementById("user-request");

    userRequestElement.onkeydown = function(event) {
        if (event.keyCode === 13) {	
            event.preventDefault();
            let userRequest = {
                data: this.value
            };
            this.value = "";
            sendData(userRequest);
        }
    };

    var sendData = function(data){
        let xhr = new XMLHttpRequest();
        xhr.open('POST', urlApi, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)){
                callback(JSON.parse(xhr.responseText));
            }
        };
        xhr.send(JSON.stringify(data));
    };

    var callback = function(data){
        console.dir(JSON.stringify(data));
        let tags = [];
        data.mots.forEach((obj, index) => {
            let isNom = false;
            let isArtAdj = false;

            obj.results.forEach((e)=> {
                if(e.catgram == "nom") {
                    isNom = true;
                }
            });

            if( data.mots[index-1] ) {
                data.mots[index-1].results.forEach((e)=> {
                    if(
                        e.catgram == "article"                   ||
                        e.catgram == "article indéfini"          ||
                        e.catgram == "article défini"            ||
                        e.catgram == "adjectif démonstratif"     ||
                        e.catgram == "adjectif numéral cardinal" ||
                        e.catgram == "adjectif numéral ordinal"  ||
                        e.catgram == "adjectif indéfini"         ||
                        e.catgram == "adjectif numéral"          ||
                        e.catgram == "adjectif relatif"          ||
                        e.catgram == "adjectif possessif"        ||
                        e.catgram == "adjectif exclamatif"       ||
                        e.catgram == "adjectif interrogatif"
                        ) {
                        isArtAdj = true;
                }
            })
            }

            if(isNom && isArtAdj){
                tags.push(obj);
            }
        });
        tags.forEach((e) => {
            document.getElementById("keywords").style.transform = "translate3d(-50%,-50%,0) scale3d(1,1,1)";
            var newDiv = document.createElement("div");
            var newContent = document.createTextNode(e.results[0].valeur);
            newDiv.style.background = "cyan";
            newDiv.style.width = "fit-content";
            newDiv.style.borderRadius = "22px";
            newDiv.style.padding = ".5em";
            newDiv.style.boxShadow = "1px 1px 8px -2px black";
            newDiv.style.margin = ".5em";
            newDiv.style.display = "inline-block";
            newDiv.style.transition = "ease .2s all";
            newDiv.style.transform = "scale3d(0,0,0)";
            newDiv.classList.add("keyword") ;
            newDiv.appendChild(newContent);
            document.getElementById("keywords").appendChild(newDiv);
        })
        Array.from(document.getElementsByClassName("keyword")).forEach((e,i)=>{
            setTimeout(()=>{
                e.style.transform = "scale3d(1,1,1)";
            },i*100);
        });
    };
};