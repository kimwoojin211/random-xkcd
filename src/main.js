import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// <!-- comics 1-2422 -->
$('#Random').click(function () {
  let currentComic = `http://xkcd.com/info.0.json`
  const comicNum = Math.floor(Math.random() * currentComic.num);
  let promise = new Promise(function(resolve,reject){
    let request = new XMLHttpRequest();
    const url = `http://xkcd.com/${comicNum}/info.0.json`;
    request.onload = function () {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(request.response);
      }
    }
    request.open("GET", url, true);
    request.send();
  });
  promise.then(function (response) {
    const body = JSON.parse(response);
    }, function (error) {
  });
});



// let currentComic = `http://xkcd.com/info.0.json`
// currentComic.num