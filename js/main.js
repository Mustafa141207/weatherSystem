let btnSearch = document.getElementById("btnSearch");
let input = document.getElementById("search");
let loc = document.getElementById("x");
let x = [];
input.addEventListener('keyup', function (e) {
  weather(this.value)
});
weather("alexandria");
btnSearch.addEventListener("click", function () {
  weather(input.value);
});
async function weather(x) {
    let data = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=c8623112b7c84165bd9152907241501&q=${x}&days=3&aqi=no&alerts=no`
    );
  let res = await data.json();
 let  m = res.forecast.forecastday;
  displayCurent(res.location, res.current);
  displaytow(m);
};
function displayCurent(one, two) {
  let cartona = `
       <div class="col-4" >
                        <div class="content rounded-3 shadow-lg shadow">
                            <div class="card text-white" style="background-color: rgba(0, 0, 0, 0.6);">
                                <div class="card-header d-flex justify-content-between fw-bold ">
                                    <div class="right">${dayName}</div>
                                    <div class="left">
                                        <p>${dayNum} <span>${month}</span></p>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <p>${one.name}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="left" style="font-size:60px;">
                                             <p>${two.temp_c} <span>C</span> </p>
                                        </div>
                                        <div class="right fs-1 fw-bolder">
                                        <img src="${two.condition.icon}"  alt="">
                                           
                                        </div>
                                    </div>
                                    <p>${two.condition.text}</p>
                                </div>
                                <div class="card-footer">
                                <span class=" text-secondary"><i class="fa-solid fa-umbrella"></i> 20%</span>
                                <span class=" mx-2 text-secondary"><i class="fa-solid fa-wind"></i> 18M/H</span>
                                <span class=" text-secondary"><i class="fa-solid fa-compass"></i> East</span>
                                </div>
                            </div>
                        </div>
                    </div>
  `;
  document.getElementById('row').innerHTML = cartona;
  
}


function displaytow(x) {
  let box = ``;
  for (var i = 1; i < x.length; i++){
    box += `
  <div class="col-4" >
                        <div class="content rounded-3 shadow-lg shadow">
                            <div class="card text-white text-center" style="background-color: rgba(0, 0, 0, 0.6);">
                                <div class="card-header text-center fw-bold ">
                                    <p>${x[i].date}</p>
                                </div>
                                <div class="card-body ">
                                <img src="${x[i].day.condition.icon}"></img>
                                <p style="font-size:60px;" class=" mt-3 ">${x[i].day.avgtemp_c} c</p>
                                 <p>${x[i].day.condition.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
    `;
  }
  document.getElementById("row").innerHTML += box;

}


let date = new Date();
date.toLocaleString('en',{})
var dayName = date.toLocaleString('en', { weekday: 'long' });
let month = date.toLocaleString('en', { month: 'long' });
let dayNum = date.toLocaleString('en', { day:'2-digit' });


// const weekday = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// const d = new Date();
// let dayx = weekday[d.getDay()];
// console.log(dayx)


