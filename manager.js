import peopleClass from "./class.js";

export const doApi = async () => {
  let url = "https://randomuser.me/api/?results=10&seed=google";
  //API Execution
  try {
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data.results);
    createList(data.results);
  } catch (err) {
    console.log(err);
    alert("There is a problem. Come back later.");
  }
};

const createList = (_ar) => {
  document.querySelector("#id_row").innerHTML = "";
  _ar.forEach((item) => {
    let people = new peopleClass("#id_row", item);
    people.render();
  });
};

export const doApiSearch = async (searchQ) => {
  document.querySelector("#id_row").innerHTML = `<h2>Loading...</h2>`;
  let url = `https://randomuser.me/api/?results=10&seed=${searchQ}`;
  try {
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data.results);
    createList(data.results);
  } catch (err) {
    console.log(err);
    alert("There is a problem. Come back later.");
  }
};
