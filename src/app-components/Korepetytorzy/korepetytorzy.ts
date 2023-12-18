import { shuffle } from "../Materialy/filmyYTLinki.ts";

export interface Korepetytor {
  imie: string;
  nazwisko: string;
  miejscowosc: string;
  numerTelefonu: string;
  mail: string;
}

let korepetytorzy: Korepetytor[] = [
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
];
korepetytorzy = shuffle(korepetytorzy);
export default korepetytorzy;
