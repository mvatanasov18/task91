import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }
  constructor() {
    super();
    
    this._beat = new Beat()
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;
    
    this._beat.addListener(Beat.events.BIT, (e) => {
      count %= 6;
      this._create(lyrics[count])
      count++;
    })
  
    this.emit(Application.events.READY);
  }

  _create(mes) {
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = mes;
    document.querySelector(".main").appendChild(message);
  }

}
