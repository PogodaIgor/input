function zmien() {
  var liczba = document.getElementById("liczba").value;
  if (liczba < 10) {
    document.getElementById("body").style.backgroundColor = "red";
  } else {
    document.getElementById("body").style.backgroundColor = "green";
  }
}
function oblicz() {
  var liczba = parseInt(document.getElementById("licz").value);
  var procent = parseInt(document.getElementById("procent").value);
  var wynik = liczba + liczba * (procent / 100);
  document.getElementById("wynik").innerHTML = wynik;
}
