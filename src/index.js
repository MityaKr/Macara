let macData = {
  "tonaj": 4,
  "lungime": 100,
  "model": "mod1"
}


class Macara {
  constructor(tonaj, lungime, model) {
    this.tonaj = tonaj;
    this.lungime = lungime;
    this.model = model;
    this.grContainer = 0;
  }

  ridica(grContainer) {
    this.grContainer = grContainer;
    console.log("Greutatea conteinerului este " + this.grContainer);
    this.tonaj < this.grContainer
      ? console.log("Container este prea greu")
      : console.log("Container este dus");
  }

  coboara() {
    //return grContainer = 0;
  }
  info() {
    return `
      tonaj = ${this.tonaj}
      lungime = ${this.lungime}
      model = ${this.model}
      grContainer = ${this.grContainer}
    `;
  }
  moveVas() {
    //console.log("Macara se duce la vas");
  }
  moveDoc() {
    //console.log("Macara se duce la doc");
  }
}

const mac = new Macara(macData.tonaj, macData.lungime, macData.model);

let container = [2, 4, 5, 3, 1];
let i = 0;
while(i<container.length){
  mac.moveVas();
  mac.ridica(container[i]);
  if(container[i]>mac.tonaj) i = container.length;
  else mac.moveDoc();
  i++;
}
