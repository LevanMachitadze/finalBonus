const url = 'https://api.chucknorris.io/jokes/random';
const joke = document.getElementById('joke');
const like = document.getElementById('like');
const disslike = document.getElementById('disslike');
let point = document.getElementById('total');
let totalPoint = 0;
const refreshBtn = document.getElementById('newJoke');

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    joke.textContent = data.value;
  });

refreshBtn.addEventListener('click', function (event) {
  window.location.reload();
});

like.addEventListener('click', function () {
  totalPoint++;
  point.textContent = totalPoint;
});

disslike.addEventListener('click', function () {
  totalPoint--;
  point.textContent = totalPoint;
});
