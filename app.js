var inputArea = document.querySelector("#inputArea");
var outputArea = document.querySelector("#outputArea");
var translate = document.querySelector("#translate");
var serverApi = "https://api.funtranslations.com/translate/groot.json";

function getTranslatedURL(text) {
  return serverApi + "?text=" + text;
}

function errorHandler(error) {
  alert("server overload , try after some time ");
}

function clickHandler() {
  var inpTxt = inputArea.value;
  var translatedURL = getTranslatedURL(inpTxt);
  fetch(translatedURL)
    .then(function getJSON(response) {
      return response.json();
    })
    .then(function outputTranslatedText(json) {
      outputArea.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}

translate.addEventListener("click", clickHandler);
