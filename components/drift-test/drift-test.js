new gridjs.Grid({
    columns: ["Drone ID", "Suitable for use?", "x_inital (cm)", "x_final (cm)","∆x (cm)","y_inital (cm)","y_final (cm)", "∆y (cm)"],
    data: [
      ["CF19", "Yes", "0", "110.0", "10.0", "0", "9.5",  "9.5"],
      ["CF17", "Yes", "0", "110.5", "10.5", "0", "7.5",  "7.5"],
      ["CZ01", "Yes", "0", "115.0", "15.0", "0", "10.0", "10.0"],
      ["CZ02", "Yes", "0", "123.2", "23.2", "0", "9.5",  "9.5"],
      ["CZ03", "Yes", "0", "97.4" , "-2.6", "0", "14.5", "14.5"],
      ["CF34", "Yes", "0", "81.6" , "19.4", "0", "4.0",  "4.0"],
    ],
  }).render(document.getElementById("drift-test"));
  
  class TableComponent extends HTMLElement {
    static get observedAttributes() {
      return ["subtitle"];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(name, _, newValue) {
      this[name] = newValue;
    }
  
    render() {
      const div = document.createElement("div");
      div.innerHTML = `
      <slot></slot>
      <sub>${this.subtitle}</sub>
      <style>
        :host {
          display: block;
          text-align: center;
        }
  
        sub {
          font-size: 1rem;
          font-style: italic;
        }
      </style>
    `;
  
      this.shadowRoot.appendChild(div);
    }
  }
  
  customElements.define("drift-test", TableComponent);
  