var sendNotification = function(data) {
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": "Basic OTQ4ZGUwYTktYjFmNS00MjUwLWJjNDgtMGRmMDE0NWVkMDRi"
  };
  
  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers
  };
  
  var https = require('https');
  var req = https.request(options, function(res) {  
    res.on('data', function(data) {
      console.log("Response:");
      console.log(JSON.parse(data));
    });
  });
  
  req.on('error', function(e) {
    console.log("ERROR:");
    console.log(e);
  });
  
  req.write(JSON.stringify(data));
  req.end();
};

var message = { 
  app_id: "fd977379-09d6-4638-af0b-1db4ce5ee459",
  contents: {"en": "English Message"},
  // content_available=true,
  data :{"abc": "123", "foo": "bar"},
  url : "http://www.google.com",
  // included_segments: ["All"]
  include_player_ids : ["972d8605-5b35-4905-bd95-3fcbf2e1dfb3"],
};

sendNotification(message);