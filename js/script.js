
const container = document.querySelector(".container");

const limit = 100;
const dividend = 3;
const dividendSec = 5;



for(let i = 1; i <= limit; i++){

  const boxEl = document.createElement("div");

  boxEl.className = "box";
  boxEl.append(i);

  if(!(i % dividend)) {

    boxEl.innerHTML = `Fizz`;
    boxEl.classList.add("box-fizz");

  }else if(!(i % dividendSec)) {

    boxEl.innerHTML = `Buzz`;
    boxEl.classList.add("box-buzz");

  }if (!(i % dividend) && !(i % dividendSec)){

    boxEl.innerHTML = `FizzBuzz`;
    boxEl.classList.add("box-fizzbuzz");

  }

  container.append(boxEl);
}

