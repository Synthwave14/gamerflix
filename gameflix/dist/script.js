var exibir = document.getElementById("exibirJogos");

var listaJogos = ["https://s2.gaming-cdn.com/images/products/8893/orig/horizon-forbidden-west-ps5-playstation-5-jogo-playstation-store-cover.jpg", "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7", "https://www.instant-gaming.com/images/products/8560/271x377/8560.jpg", "https://s1.gaming-cdn.com/images/products/1767/271x377/jogo-steam-stardew-valley-cover.jpg", "https://s3.gaming-cdn.com/images/products/5972/271x377/hades-pc-mac-jogo-steam-cover.jpg", "https://s3.gaming-cdn.com/images/products/6329/271x377/resident-evil-village-pc-jogo-steam-cover.jpg"
];

for (var i = 0; i < listaJogos.length; i++) {
  exibir.innerHTML += "<img src=" + listaJogos[i] + ">";
  // document.write("<img src=" + listaJogos[i] + ">");
}

function Adicionar() {
  var capaAdicionada = document.getElementById("capaAdicionada").value;
  listaJogos.push(capaAdicionada);
  exibir.innerHTML =
    exibir.innerHTML +
    "<img width= '250px' height='250px' margin-top='15px' margin-left='30' padding-bottom='30px' src=" +
    capaAdicionada +
    ">";
}