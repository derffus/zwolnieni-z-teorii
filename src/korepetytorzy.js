function Korepetytor(imie, nazwisko, miejscowosc, numerTelefonu, mail) {
  this.imie = imie;
  this.nazwisko = nazwisko;
  this.miejscowosc = miejscowosc;
  this.numerTelefonu = numerTelefonu;
  this.mail = mail;
}
function stworzKorepetytora(imie, nazwisko, miejscowosc, numerTelefonu, mail) {
  const korepetytor = new Korepetytor(
    imie,
    nazwisko,
    miejscowosc,
    numerTelefonu,
    mail
  );
  window[imie + nazwisko] = korepetytor;
  return window[imie + nazwisko];
}
let korepetytorzy = [stworzKorepetytora("Alicja","Kras","Piastów","123123123","alakras@gmail.com"), stworzKorepetytora("Krystian","Kras","Piastów","505505505","krysti@gmail.com"), stworzKorepetytora("Julia","Olak","Warszawa","420420420","julitajulita@gmail.com")];

export default korepetytorzy;
