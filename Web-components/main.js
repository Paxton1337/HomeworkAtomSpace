class XCounter extends HTMLElement {
  constructor() {
    super();
    this.counter = this.getAttribute("initial");
    this.text = {
      "+": "+",
      "-": "-",
    };
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
    x-counter{
      display: flex;
      justify-content:space-between;
      align-items: center;
      width: 70px;
      box-sizing: border-box;
      margin: 5px 0px;
    }
    button[type="button1"], button[type="button2"]{ 
      box-sizing: border-box;
      width: 20px;
      border-radius: 50%;
      border: 1px solid gray;
      height: 20px;
      display: flex;
      justify-content: center;
    }</style>
    <button type="button1">${this.text["-"]}</button>
    <span>${this.counter}</span>
    <button type="button2">${this.text["+"]}</button>
    `;
    this.querySelector('button[type="button2"]').addEventListener(
      "click",
      () => {
        ++this.counter;
        this.connectedCallback();
      }
    );
    this.querySelector('button[type="button1"]').addEventListener(
      "click",
      () => {
        --this.counter;
        this.connectedCallback();
      }
    );
  }
}
customElements.define("x-counter", XCounter);
class XUserCard extends HTMLElement {
  constructor() {
    super();
    this.image = this.getAttribute("avatar");
    this.name = this.getAttribute("name");
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
    x-user-card{
      max-width: 200px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      margin:10px 0px;
      padding: 6px 5px;
      border-radius: 4px;
      -webkit-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
      box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
    }
    .x-user-img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .x-user-name{
      margin-left: 10px;
    }
    </style>
    <img src='${this.image}' alt='${this.image}' class="x-user-img">
    <span class="x-user-name">${this.name}</span>
    `;
  }
}
customElements.define("x-user-card", XUserCard);
