var el1 = document.getElementById("showResult");
var el2 = document.getElementById("text");
var el3 = document.getElementById("showTag");
var el4 = document.getElementById("phrase");

function search(mot){
  for (var i=0, n=bob.length; i < n; i++){
    if(mot === bob[i].mot){
      return bob[i];
    }
  }
}

function show(){
  var result = search(el2.value);
  el1.innerHTML = result.mot + "<br>" + result.variantes[0].orthographes[0].formes[0].catgram + "<br>" + result.definitions[0].division[0].contenu[0].texte;
}

function show2() {
  el1.innerHTML = parcourirObjet(search(el2.value));
}

function parcourirObjet(objet){
  var res = "";
  function addTab(i) {
    let tab = "";
    for (var j=0; j < i; j++){
      tab += "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
    return tab;
  }
  function parcourirObjet2(objet, index){
    index++;
    for (var prop in objet) {
      if(Array.isArray(objet[prop])){
        res += "<br>" + addTab(index) + `${prop} :`;
        parcourirObjet2(objet[prop],index);
      } else if (typeof objet[prop] === "object"){
        parcourirObjet2(objet[prop],index);
      } else {
        res += "<br>" + addTab(index) + `${prop} : ${objet[prop]}`;
      }
    }
  }
  parcourirObjet2(objet, -1);
  return res;
}



function showTag() {
  /*var array = el4.value.split(" ");
  var arrayResult = [];

  for (var i=0, n=array.length; i < n; i++){
    let obj = search(array[i]);
    if(obj && obj.orthographes[0].variantes[0].catgram.substring(0,3) == "nom"){
      arrayResult.push(obj.orthographe);
    }
  }
  el3.innerHTML = arrayResult.join(" ");*/

 /* var arrayResult = [];
  let xhr = new XMLHttpRequest();
  xhr.open('POST', "http://localhost:3000/gramma", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)){
      let result = JSON.parse(xhr.responseText);
      console.dir(result);
      for (var i = 0; i < result.mots.length; i++) {
        for (var j = 0; j < result.mots[i][j].length; j++) {
            if(
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "article" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "article indéfini" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "article défini" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "adjectif démonstratif" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "adjectif numéral cardinal" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "adjectif numéral ordinal" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "adjectif indéfini" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "adjectif numéral" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "adjectif relatif" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "adjectif possessif" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "adjectif exclamatif" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "adjectif interrogatif" 
            ) {
              arrayResult.push(result.mots[i][0].mot);
            }


          }


          A FAIRE AVEC MONGODB !!!!!!!







        if(





          result.mots[i][0] && result.mots[i][0].variantes[0].orthographes[0].formes[0].catgram == "nom"
         && result.mots[i - 1]){

          for (var j = 0; j < result.mots[i-1].length; j++) {
            if(
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "article" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "article indéfini" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "article défini" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "adjectif démonstratif" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "adjectif numéral cardinal" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "adjectif numéral ordinal" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "adjectif indéfini" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "adjectif numéral" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "adjectif relatif" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "adjectif possessif" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "adjectif exclamatif" ||
              result.mots[i-1][j].variantes[0].orthographes[0].formes[0].catgram == "adjectif interrogatif" 
            ) {
              arrayResult.push(result.mots[i][0].mot);
            }


          }

          
        }
      }
      el3.innerHTML = arrayResult.join(" ");
    }
  };
  xhr.send(JSON.stringify({phrase:el4.value}));
*/
}

























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

	var userRequestElement = document.getElementById("user-request");

  userRequestElement.onkeydown = function(event) {
	    if (event.keyCode === 13)
	    {	
	    	event.preventDefault();
	    	let userRequest = this.value;
	    	this.value = "";
	    	//recherche(userRequest.split(" "));
	    	sendData({phrase:userRequest});
	    }
	};

	var sendData = function(data){
		let xhr = new XMLHttpRequest();
		xhr.open('POST', "http://localhost:3000/gramma", true);
		xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhr.onreadystatechange = ()=>{
			if(xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)){
				console.dir(JSON.parse(xhr.responseText));
        return JSON.parse(xhr.responseText);
			}
		};
		xhr.send(JSON.stringify(data));
	};

	/*recherche = function(phrase) {
		let result = {
			mots: [],
			context: ""
		};
		phrase = "La voiture est rouge.".split(" ");
		phrase.forEach((mot, index)=>{
			let motObj = {
				valeur: mot,
				position: index
			};
			result.mots.push(motObj);
		});
		console.dir(result);
		return result;
	};*/


};