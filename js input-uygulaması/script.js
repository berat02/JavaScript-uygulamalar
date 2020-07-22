function boyutlandır() {
  // hmtl elementlerini değişkenlere atama
  var img_width_input_element = document.getElementById("img-genislik");
  var img_heigth_input_element = document.getElementById("img-yukseklik");
  var img_src_input_element = document.getElementById("img");
  var result_panel = document.getElementById("img-panel");

  // kullanıcını girdiği değerleri değişkenlere atama
  var genislik = Number(img_width_input_element.value);
  var yukseklik = Number(img_heigth_input_element.value);
  var img_src = img_src_input_element.value;

  // kullanıcının girdiği değerleri boş olma durumunu kontrol etme
  if (genislik == 0) {
    alert("Genişlik Değerini Giriniz");
    return;
  } else if (yukseklik == 0) {
    alert("Yükseklik Değerini Giriniz");
    return;
  }

  //resim oluşturma
  var resim = document.createElement("img");
    resim.style.height = yukseklik + "px";
    resim.style.width = genislik + "px";
    resim.src = img_src;

  // oluşan resmi result_panel içerine ekleme
  result_panel.appendChild(resim);
}

function olustur() {
  var genislik = Number(document.getElementById("genislik").value);
  var yukseklik = Number(document.getElementById("yukseklik").value);
  var renk = document.getElementById("renk").value;

  document.getElementById("daire").style.width = genislik + "px";
  document.getElementById("daire").style.height = yukseklik + "px";
  document.getElementById("daire").style.backgroundColor = renk;

  if (genislik == 0) {
    alert("Genişlik Değerini Giriniz");
  } else if (yukseklik == 0) {
    alert("Yükseklik Değerini Giriniz");
  } else if (renk == 0) {
    alert("Renk Giriniz");
  }
}

function degistir() {
  var text1 = document.getElementById("text1").value;
  var text2 = document.getElementById("text2").value;
  var text3 = document.getElementById("text3").value;
  var text4 = document.getElementById("text4").value;

  document.getElementById("yazi1").style.color = text1;
  document.getElementById("yazi2").style.fontFamily = text2;
  document.getElementById("yazi3").style.backgroundColor = text3;
  document.getElementById("yazi4").style.fontSize = text4 + "px";

  if (text1 == 0) {
    alert("1)Yazının Rengini Giriniz");
  } else if (text2 == 0) {
    alert("2)Yazının Stilini Giriniz");
  } else if (text3 == 0) {
    alert("3)Yazının Arka Plan Rengini Giriniz");
  }
}

function topla() {
  var deger1 = Number(document.getElementById("deger1").value);
  var deger2 = Number(document.getElementById("deger2").value);
  sonuc = deger1 + deger2;
  document.getElementById("sonuc").value = sonuc;
}

function cıkar() {
  var deger1 = Number(document.getElementById("deger1").value);
  var deger2 = Number(document.getElementById("deger2").value);
  sonuc = deger1 - deger2;
  document.getElementById("sonuc").value = sonuc;
}

function carp() {
  var deger1 = Number(document.getElementById("deger1").value);
  var deger2 = Number(document.getElementById("deger2").value);
  sonuc = deger1 * deger2;
  document.getElementById("sonuc").value = sonuc;
}

function bol() {
  var deger1 = Number(document.getElementById("deger1").value);
  var deger2 = Number(document.getElementById("deger2").value);
  sonuc = deger1 / deger2;
  document.getElementById("sonuc").value = sonuc;
}
