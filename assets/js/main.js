// Potrfolio

const time = 3000;
const step = 1;

function outNum(num, elem) {
  let l = document.querySelector('#' + elem);
  let n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    l.innerHTML = n;
  },
    t);
}

outNum(875, 'out-1');


async function fetchData () {
  const response = await fetch('./data.json');
  console.log(response);
  // const data = response.json();
  // console.log(data);
}

fetchData();
