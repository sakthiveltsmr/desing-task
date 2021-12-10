async function page(set, get) {
  const data = await fetch(
    "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
  );
  const fullDetails = await data.json(); //convertion of json of js.
  console.table(fullDetails);
  document.body.innerHTML = ``;
  tableHead();
  for (i = 0; i < fullDetails.length; i++) {
    if (i >= set && i <= get) {
      userDetails(fullDetails[i]);
      console.log(fullDetails[i]);
    }
  }
  document.body.append(buttons);
}
function tableHead() {
  const table_Head = document.createElement("table"); //table creation.
  table_Head.className = "thead";
  table_Head.innerHTML = `
  <tr>
  <th class="head">ID</th>
  <th class="head">Name</th>
  <th class="head">Email</th>
  </tr>`;
  document.body.append(table_Head);
}
function userDetails(datas) {
  const t_body = document.createElement("tbody"); //table body created.
  t_body.className = "table";
  t_body.innerHTML = ` <tr>
  <td class="Details">${datas.id}</td>
  <td class="Details">${datas.name}</td>
  <td class="Details">${datas.email}</td>
  </tr>
  `;
  const container = document.querySelector("table");
  container.append(t_body); //table appended.
  console.log(container);
}
let n;
function one() {
  page(0, 9);
  n = 1;
}
function two() {
  page(10, 19);
  n = 2;
}
function three() {
  page(20, 29);
  n = 3;
}
function four() {
  page(30, 39);
  n = 4;
}
function five() {
  page(40, 49);
  n = 5;
}
function six() {
  page(50, 59);
  n = 6;
}
function seven() {
  page(60, 69);
  n = 7;
}
function eight() {
  page(70, 79);
  n = 8;
}
function nine() {
  page(80, 89);
  n = 9;
}
function ten() {
  page(90, 99);
  n = 10;
}
let numbers = {
  1: one,
  2: two,
  3: three,
  4: four,
  5: five,
  6: six,
  7: seven,
  8: eight,
  9: nine,
  10: ten,
};
function previous() {
  if (n !== 0) {
    numbers[n - 1]();
  }
}
function next() {
  if (n !== 10) {
    numbers[n + 1]();
  }
}
let buttons = document.createElement("div");
buttons.className = "pagination";
buttons.innerHTML = `
 <br>
 <button class="previous & next" onclick="previous()">Previous</button>
 <button class="num_button" onclick="one()">1</button>
 <button class="num_button" onclick="two()">2</button>
 <button class="num_button" onclick="three()">3</button>
 <button class="num_button" onclick="four()">4</button>
 <button class="num_button" onclick="five()">5</button>
 <button class="num_button" onclick="six()">6</button>
 <button class="num_button" onclick="seven()">7</button>
 <button class="num_button" onclick="eight()">8</button>
 <button class="num_button" onclick="nine()">9</button>
 <button class="num_button" onclick="ten()">10</button>
 <button class="previous & next" onclick="next()">next</button>
 `;
document.onload(one());
