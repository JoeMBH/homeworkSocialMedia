import { doApiSearch } from "./manager.js";

export const declareBodyEvent = () => {
  let input = document.querySelector("#id_input");
  let search_btn = document.querySelector("#search_btn");

  search_btn.addEventListener("click", (e) => {
    let input_val = document.querySelector("#id_input").value;
    doApiSearch(input_val);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      let input_val = document.querySelector("#id_input").value;
      doApiSearch(input_val);
    }
  });
};
