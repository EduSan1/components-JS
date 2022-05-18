"use strict";

class card extends HTMLElement {
  constructor() {
    super();
    this.build();
  }
  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.style());
    shadow.appendChild(this.creatCard());
  }

  style() {
    const style = document.createElement("style");
    style.textContent = `
       
.card {
    width: 350px;
    height:350px;
    background-color: ${this.bgcolor()};
    border-radius: 15px;
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    transition: .5s;
    cursor: pointer;

}
.card:hover {
    box-shadow: 0 0 10px #ccccff;
}

.card-text {
    width: 80%;
    color: #ccccff;
    text-align: center;
    height: auto;
    border-radius: 12px;
    border: 1px solid #ccccff;
    padding: 10px;
    box-shadow: 0 0 8px #ccccff;
    transition: .5s;
}

.card-text:hover {
    color: #151f3f;
    background-color: #ccccff;
    box-shadow: 0 0 12px #ccccff;
}

.card-image {
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background-size: cover;
    background-image: url(${this.image()});
    box-shadow: inset 0 0 30px #000;
    transition: .5s;
}

.card-image:hover {
    box-shadow: inset 0 0 5px #000;
}`;

    return style;
  }

  creatCard() {
    const card = document.createElement("card");
    card.classList.add("card");
    card.innerHTML = `
        <div class="card-text">
        <p>${this.name()}</p>
     </div>
     <div class="card-image"></div>
     <div class="card-text">
         <p>${this.team()}</p>
     </div>
        `;
    return card;
  }

  bgcolor() {
    const status = this.getAttribute("data-bgcolor") ?? "";
    let color = "#344578"
    if(status == "aprovado"){
      color = "#344578"
    }else if (status == "reprovado") {
      color = "#ff5577"
    }else if (status == "desistente") {
      color = "#09420a"
    }
    return color
  }

  name() {
    const name = this.getAttribute("data-nome") ?? "";
    return name;
  }

  team() {
    const team = this.getAttribute("team") ?? "Sem Sala";
    return team;
  }
  image() {
    const image = this.getAttribute("image") ?? "../img/hinata.jpg";
    return image;
  }
}

customElements.define("card-aluno", card);
