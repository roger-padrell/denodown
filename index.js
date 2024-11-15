let body = document.body;
async function getDataFromDB(){
  const myHeaders = new Headers();
myHeaders.append("X-Master-Key", "$2b$10$i3qJgSD.qkNJRnyjAWq0ZePymTTWgzaBSJzm2nEJn4KpSb6S3/T7K");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

  const response = await fetch("https://api.jsonbin.io/v3/b/67366747acd3cb34a8a8b940/?meta=false", requestOptions);
  const result = await response.json();
   return result;
}
function sendCommand(ip, command){
  let c = command.replaceAll(",", " ");
}

function prevSendComm(e){
  console.log("sended")
}
  
function loadUI(){
  for(let a in dt.all){
    body.innerHTML += "<div><p>" + dt.names[a] + "</p><button onclick='prevSendComm(e)'>Send</button></div>";
  }
}

window.onload = async function(){
  window.dt = await getDataFromDB();
  loadUI()
}
