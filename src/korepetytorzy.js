class Korepetytor {
  constructor(imie, nazwisko, miejscowosc, numerTelefonu, mail) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.miejscowosc = miejscowosc;
    this.numerTelefonu = numerTelefonu;
    this.mail = mail;
  }
}

function stworzKorepetytora(imie, nazwisko, miejscowosc, numerTelefonu, mail) {
  const korepetytor = new Korepetytor(
    imie,
    nazwisko,
    miejscowosc,
    numerTelefonu,
    mail
  );
  return korepetytor;
}

let korepetytorzy = [
  stworzKorepetytora(
    "Alicja",
    "Kras",
    "Piastów",
    "123123123",
    "alakras@gmail.com"
  ),
  stworzKorepetytora(
    "Krystian",
    "Kras",
    "Legionowo",
    "505505505",
    "krysti@gmail.com"
  ),
  stworzKorepetytora(
    "Julia",
    "Olak",
    "Warszawa",
    "420420420",
    "julitajulita@gmail.com"
  ),
  stworzKorepetytora(
    "Zosia",
    "Warzybok",
    "Gdańsk",
    "123555999",
    "hejkaTuZosia@wp.pl"
  ),
  stworzKorepetytora(
    "Monika",
    "Kociołek",
    "Władysławowo",
    "251909555",
    "moniaDzieloSztuki@gmail.com"
  ),
  stworzKorepetytora("Czaro", "NBA", "Łódź", "509315872", "czaro.to.kox@wp.pl"),
  stworzKorepetytora(
    "Friz",
    "Wiśniewski",
    "Kraków",
    "665544332",
    "friz.kontakt@gmail.com"
  ),
];

export default korepetytorzy;
