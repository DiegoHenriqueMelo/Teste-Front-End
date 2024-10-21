document.addEventListener("DOMContentLoaded", function () {
  let qtd = document.getElementById("qtd");
  let n = 0;
  let priceTotal = 0;
  let cart = [];
  let name = "Kit Bodies manga longa Basics Carters 4 peças";

  class ItenCart {
    name;
    qtd;
    priceUni;
    priceTotal;

    constructor(name, qtd, priceUni, priceTotal) {
      (this.name = name),
        (this.qtd = qtd),
        (this.priceUni = priceUni),
        (this.priceTotal = priceTotal);
    }
  }

  function aumentaQtd() {
    n++;
    qtd.innerText = `${n}`;
    priceTotal = (n * 75.9).toFixed(2);
    localStorage.setItem("name", name);
    localStorage.setItem("qtd", n);
    localStorage.setItem("priceTotal", priceTotal);
    const iten = new ItenCart(name, n, 75.9, priceTotal);
    cart.push(iten);
    console.log(cart);
  }
  function diminuiQtd() {
    if (n > 0) {
      n--;
      qtd.innerText = `${n}`;
      priceTotal = (n * 75.9).toFixed(2);
      localStorage.setItem("name", name);
      localStorage.setItem("qtd", n);
      localStorage.setItem("priceTotal", priceTotal);
      const iten = new ItenCart(name, n, 75.9, priceTotal);
      cart.push(iten);
    }
  }

//   function meunDropdown(){

//   }

//   document.getElementsByClassName("gaveta").addEventListener("click", meunDropdown());
  document.getElementById("aumentar").addEventListener("click", aumentaQtd);
  document.getElementById("diminuir").addEventListener("click", diminuiQtd);
//   document.getElementById("buy").addEventListener("click", buyItenCart);
//   document.getElementById("delete").addEventListener("click", deleteItenCart);
});
