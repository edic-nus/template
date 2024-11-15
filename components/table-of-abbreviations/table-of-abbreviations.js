new gridjs.Grid({
    columns: ["Abbreviation", "Description"],
    data: [
      ["SAFMC", "Singapore Amazing Flying Machine Competition"],
      ["DSO", "Defence Science Organisation"],
      ["LOS", "Line of Sight"],
      ["MSBA", "Modified Swarm Bug Algorithm"],
      ["ToF", "Time-of-Flight"],
      ["ROS", "Robot Operating System"],
      ["FPS", "Frames Per Second"],
      ["CNN", "Convolutional Neural Networks"],
      ["iDP", "Innovation and Design Programme"],
    ],
  }).render(document.getElementById("table-of-abbreviation"));
  
  class TableOfAbbreviations extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const div = document.createElement("div");
      div.innerHTML = `
      <slot></slot>
      <style>
        :host {
          display: block;
          text-align: center;
        }
      </style>
    `;
  
      this.shadowRoot.appendChild(div);
    }
  }
  
  customElements.define("table-of-abbreviations", TableOfAbbreviations);
  