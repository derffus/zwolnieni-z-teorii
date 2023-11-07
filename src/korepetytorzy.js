import { shuffle } from "./filmyYTLinki";
let korepetytorzy = [
  {
    imie: "Alicja",
    nazwisko: "Kras",
    miejscowosc: "Piastów",
    numerTelefonu: "105255909",
    mail: "alinakwasowska@gmail.com",
  },
  {
    imie: "Krystian",
    nazwisko: "Kras",
    miejscowosc: "Legionowo",
    numerTelefonu: "505505505",
    mail: "krysti@gmail.com",
  },
  {
    imie: "Julia",
    nazwisko: "Olak",
    miejscowosc: "Warszawa",
    numerTelefonu: "420420420",
    mail: "julitajulita@gmail.com",
  },
  {
    imie: "Zosia",
    nazwisko: "Warzybok",
    miejscowosc: "Gdańsk",
    numerTelefonu: "123555999",
    mail: "hejkaTuZosia@wp.pl",
  },
  {
    imie: "Monika",
    nazwisko: "Kociołek",
    miejscowosc: "Władysławowo",
    numerTelefonu: "251909555",
    mail: "moniaDzieloSztuki@gmail.com",
  },
  {
    imie: "Czaro",
    nazwisko: "NBA",
    miejscowosc: "Łódź",
    numerTelefonu: "509315872",
    mail: "czaro.to.kox@wp.pl",
  },
  {
    imie: "Friz",
    nazwisko: "Wiśniewski",
    miejscowosc: "Kraków",
    numerTelefonu: "665544332",
    mail: "friz.kontakt@gmail.com",
  },
];
korepetytorzy = shuffle(korepetytorzy);
export default korepetytorzy;
