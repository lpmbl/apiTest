const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

/*
var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:8080/events', true);
apiGet(request);*/

function print_Object(message) {

  const card = document.createElement('div');
  card.setAttribute('class', 'card');

  const h1 = document.createElement('h1');
  h1.textContent = message.Title;

  container.appendChild(card);
  card.appendChild(h1);

}

function getAll() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:8080/events', true);
  apiGet(request);
}

function getFirst() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:8080/events/1', true);
  apiGet(request);
}

function apiGet(request){
  request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {

      if (Array.isArray(data)) {
        data.forEach(movie => {
          print_Object(movie)
        });
      }
      else if (typeof (data) === 'object') {
        print_Object(data)
      }


    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Gah, it's not working!`;
      app.appendChild(errorMessage);
    }
  }
  request.send();
}

