//load view.js before running this
//var apiUrl = "http://wow.iwanttorule.space:7001";
var apiUrl = "http://localhost:7001";

var internetOff = false;

var app = {
  userId: null,


  Init: function() {
  	app.GetUserId(function(){
  		view.SetupView(app.GetDisplay);
  	});
  },


  GetUserId:function(callback) {
    AjaxCall("/join", {sendState: false}, function(data) {
      userId = data.id;
      CallCallback(callback);
    });
  },
  GetDisplay: function(callback) {
  	AjaxCall("/sendState", {id: userId}, function(data){
      view.Draw(data.world);
  		CallCallback(callback);
  	});
  },
  SendCommand: function(command){
  	AjaxCall("/action", {id: userId, action: command, sendState:true}, function(data){ 
      view.Draw(data.world);
  	});
  }
}

function CallCallback (callback){
  if(callback != null) {
    callback();
  }
}


function AjaxCall(endpoint, data, callback){
  if(internetOff){
    callback(testData);    
  }

  var ajax = $.ajax({
    method: "GET",
    url: apiUrl + endpoint,
    data: data,
  });
  ajax.done(function(data) {
    console.log("from " + apiUrl + endpoint + " returned: " + data);
    callback(data);
  });
  ajax.fail(function(req, status, error){
    console.log("bad req to " + apiUrl + endpoint + ":  " + status + " | " + error);
  });
}

var testData = {"id":"49f282b5-6ac9-4705-a692-fa1c23809f87","world":[["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!","!"],["h","p",":"," ","1","0","0"," ","o","r","e",":"," ","0"," ","r","o","w",":"," ","2","4"," ","c","o","l",":"," ","2","4"," "]]}


$(app.Init);