import { doApi } from "./manager.js";
import { declareBodyEvent } from "./event.js";
import { allLightBox } from "./lightBox.js";
import { checkEmail } from "./email.js";

const init = () => {
  doApi();
  declareBodyEvent();
  allLightBox();
  checkEmail();
};

init();
