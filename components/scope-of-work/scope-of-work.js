new gridjs.Grid({
    columns: ["Subsystem", "Member(s)"],
    data: [
      ["Search Strategy", "Govindanath Samuel Sudharsanan; Low Yan Yew" ],
      ["Simulation", "Low Yan Yew"],
      ["Object Detection", "Foo Shu Hui"],
      ["Collision Avoidance", "Matthew Yip Tze Heng"],
    ],
  }).render(document.getElementById("scope-of-work"));
  
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
  
  customElements.define("scope-of-work", TableComponent);
  