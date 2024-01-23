let number = 0; 
let data = []; // ajax.jsonから取得したデータを格納するための変数を追加
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() { 
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if(request.status == 200) {
          data = request.response;//取得したデータを変数に格納
          changeVideo();
        }
      }
    }
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
  }

function changeVideo() {
    titleArea.innerHTML = request.response[number].title;
    contentArea.innerHTML = request.response[number].content;
    videoArea.setAttribute("src", request.response[number].url);
    number == 2 ? number = 0 : number++;
}
button.addEventListener('click', changeVideo)

window.onload = getData;