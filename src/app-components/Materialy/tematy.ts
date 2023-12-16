interface Temat {
  podstawa: Record<number, Record<number, Record<number, string>>>;
  rozszerzenie: Record<number, Record<number, Record<number, string>>>;
}

interface Tematy {
  [key: number]: Temat;
}

const tematy: Tematy = {
  1: {
    podstawa: {
      1: {
        1: "Zbiór. Działania na zbiorach",
        2: "Zbiory liczbowe. Oś liczbowa",
        3: "Prawa działań w zbiorze liczb rzeczywistych",
        4: "Przedziały",
        5: "Zbiór liczb naturalnych i zbiór liczb całkowitych",
        6: "Przypomnienie i uzupełnienie wiadomości o równaniach",
        7: "Rozwiązywanie równań metodą równań równoważnych",
        8: "Nierówność z jedną niewiadomą. Rozwiązywanie nierówności metodą nierówności równoważnych",
        9: "Procenty",
        10: "Punkty procentowe",
      },
      2: {
        1: "Potęga o wykładniku naturalnym",
        2: "Pierwiastek arytmetyczny. Pierwiastek stopnia nieparzystego z liczby ujemnej",
        3: "Działania na wyrażeniach algebraicznych",
        4: "Wzory skróconego mnożenia stopnia 2",
        5: "Potęga o wykładniku całkowitym ujemnym",
        6: "Potęga o wykładniku wymiernym",
        7: "Potęga o wykładniku rzeczywistym",
        8: "Określenie logarytmu",
        9: "Zastosowanie logarytmów",
        10: "Zdanie. Zaprzeczenie zdania",
        11: "Zdania złożone. Zaprzeczenia zdań złożonych",
        12: "Definicja. Twierdzenie. Dowód twierdzenia",
        13: "Przekształcanie wzorów",
        14: "Średnie",
      },
      3: {
        1: "Pojęcie funkcji. Funkcja liczbowa. Sposoby opisywania funkcji",
        2: "Wykres funkcji",
        3: "Dziedzina funkcji liczbowej",
        4: "Zbiór wartości funkcji liczbowej. Najmniejsza i największa wartość funkcji",
        5: "Miejsce zerowe funkcji",
        6: "Monotoniczność funkcji",
        7: "Funkcje różnowartościowe",
        8: "Odczytywanie własności funkcji na podstawie jej wykresu",
        9: "Zastosowanie wiadomości o funkcjach do opisywania, interpretowania i przetwarzania informacji wyrażonych w postaci wykresu funkcji",
      },
      4: {
        1: "Proporcjonalność prosta",
        2: "Funkcja liniowa. Wykres i miejsce zerowe funkcji liniowej",
        3: "Znaczenie współczynnika kierunkowego we wzorze funkcji liniowej",
        4: "Własności funkcji liniowej - zadania różne",
      },
      5: {
        1: "Równania pierwszego stopnia z dwiema niewiadomymi",
        2: "Układy równań pierwszego stopnia z dwiema niewiadomymi. Graficzne rozwiązywanie układów równań",
        3: "Rozwiązywanie układów równań pierwszego stopnia z dwiema niewiadomymi metodą podstawiania",
        4: "Rozwiązywanie układów równań pierwszego stopnia z dwiema niewiadomymi metodą przeciwnych współczynników",
        5: "Zastosowanie układów równań do rozwiązywania zadań",
      },
      6: {
        1: "Funkcja kwadratowa",
        2: "Funkcja kwadratowa - zastosowania",
        3: "Proporcjonalność odwrotna",
        4: "Funkcja wykładnicza",
        5: "Funkcja logarytmiczna",
      },
      7: {
        1: "Punkt, prosta, odcinek, półprosta, kąt, figura wypukła, figura ograniczona",
        2: "Wzajemne położenie prostych na płaszczyźnie, odległość punktu od prostej, odległość między prostymi równoległymi, symetralna odcinka, dwusieczna kąta",
        3: "Dwie proste przecięte trzecią prostą. Suma kątów w trójkącie",
        4: "Twierdzenie Talesa",
        5: "Podział trójkątów. Nierówność trójkąta. Odcinek łączący środki boków w trójkącie",
        6: "Twierdzenie Pitagorasa. Twierdzenie odwrotne do twierdzenia Pitagorasa",
        7: "Wysokości w trójkącie. Środkowe w trójkącie",
        8: "Przystawanie trójkątów",
        9: "Podobieństwo trójkątów",
        10: "Podobieństwo trójkątów - zastosowanie w zadaniach",
      },
      8: {
        1: "Określenie sinusa, cosinusa, tangensa i cotangensa w trójkącie prostokątnym",
        2: "Wartości sinusa, cosinusa, tangensa i cotangensa kątów 30°, 45° i 60°",
        3: "Zależności między funkcjami trygonometrycznymi tego samego kąta ostrego",
      },
    },
    rozszerzenie: {
      1: {
        1: "Zbiór. Działania na zbiorach",
        2: "Zbiory liczbowe",
        3: "Prawa działań w zbiorze liczb rzeczywistych",
        4: "Przedziały",
        5: "Zbiór liczb naturalnych i zbiór liczb całkowitych",
        6: "Przypomnienie i uzupełnienie wiadomości o równaniach",
        7: "Rozwiązywanie równań metodą równań równoważnych",
        8: "Nierówność z jedną niewiadomą. Rozwiązywanie nierówności metodą nierówności równoważnych",
        9: "Procenty",
        10: "Punkty procentowe",
        11: "Przybliżenia, błąd bezwzględny i błąd względny, szacowanie",
      },
      2: {
        1: "Potęga o wykładniku naturalnym",
        2: "Pierwiastek arytmetyczny. Pierwiastek stopnia nieparzystego z liczby ujemnej",
        3: "Działania na wyrażeniach algebraicznych",
        4: "Wzory skróconego mnożenia",
        5: "Potęga o wykładniku całkowitym ujemnym",
        6: "Potęga o wykładniku wymiernym",
        7: "Potęga o wykładniku rzeczywistym",
        8: "Określenie logarytmu",
        9: "Zastosowanie logarytmów",
        10: "Zdanie. Zaprzeczenie zdania",
        11: "Zdania złożone. Zaprzeczenia zdań złożonych",
        12: "Definicja. Twierdzenie. Dowód twierdzenia",
        13: "Przekształcanie wzorów",
        14: "Średnie",
      },
      3: {
        1: "Pojęcie funkcji. Funkcja liczbowa. Sposoby opisywania funkcji",
        2: "Wykres funkcji",
        3: "Dziedzina funkcji liczbowej",
        4: "Zbiór wartości funkcji liczbowej. Najmniejsza i największa wartość funkcji",
        5: "Miejsce zerowe funkcji",
        6: "Funkcje równe",
        7: "Monotoniczność funkcji",
        8: "Funkcje różnowartościowe",
        9: "Funkcje parzyste i funkcje nieparzyste",
        10: "Odczytywanie własności funkcji na podstawie jej wykresu. Szkicowanie wykresów funkcji o zadanych własnościach",
        11: "Zastosowanie wiadomości o funkcjach do opisywania, interpretowania i przetwarzania informacji wyrażonych w postaci wykresu funkcji",
      },
      4: {
        1: "Proporcjonalność prosta",
        2: "Funkcja liniowa. Wykres i miejsce zerowe funkcji liniowej",
        3: "Znaczenie współczynnika kierunkowego występującego we wzorze funkcji liniowej",
        4: "Własności funkcji liniowej - zadania różne",
        5: "Zastosowanie własności funkcji liniowej w zadaniach praktycznych",
        6: "Wykresy wybranych funkcji",
      },
      5: {
        1: "Równania pierwszego stopnia z dwiema niewiadomymi",
        2: "Układy równań pierwszego stopnia z dwiema niewiadomymi. Graficzne rozwiązywanie układów równań",
        3: "Rozwiązywanie układów równań pierwszego stopnia z dwiema niewiadomymi metodą podstawiania",
        4: "Rozwiązywanie układów równań pierwszego stopnia z dwiema niewiadomymi metodą przeciwnych współczynników",
        5: "Zastosowanie układów równań do rozwiązywania zadań",
      },
      6: {
        1: "Funkcja kwadratowa",
        2: "Funkcja kwadratowa - zastosowania",
        3: "Proporcjonalność odwrotna",
        4: "Funkcja wykładnicza",
        5: "Funkcja logarytmiczna",
      },
      7: {
        1: "Punkt, prosta, odcinek, półprosta, kąt, figura wypukła, figura ograniczona",
        2: "Wzajemne położenie prostych na płaszczyźnie, odległość punktu od prostej, odległość między prostymi równoległymi, symetralna odcinka, dwusieczna kąta",
        3: "Dwie proste przecięte trzecią prostą, suma kątów w trójkącie, wielokąt, wielokąt foremny, suma kątów w wielokącie",
        4: "Wielokąt. Wielokąt foremny. Suma kątów w wielokącie",
        5: "Twierdzenie Talesa",
        6: "Podział trójkątów. Nierówność trójkąta. Odcinek łączący środki boków w trójkącie",
        7: "Twierdzenie Pitagorasa. Twierdzenie odwrotne do twierdzenia Pitagorasa",
        8: "Wysokości w trójkącie. Środkowe w trójkącie",
        9: "Przystawanie trójkątów",
        10: "Podobieństwo trójkątów",
        11: "Podobieństwo trójkątów - zastosowanie w zadaniach",
        12: "Wektor na płaszczyźnie",
      },
      8: {
        1: "Określenie sinusa, cosinusa, tangensa i cotangensa w trójkącie prostokątnym",
        2: "Wartości sinusa, cosinusa, tangensa i cotangensa kątów 30°, 45° i 60°",
        3: "Zależności między funkcjami trygonometrycznymi tego samego kąta ostrego",
      },
    },
  },
  2: {
    podstawa: {
      1: {
        1: "Wektor w układzie współrzędnych - podstawowe informacje",
        2: "Przesunięcie równoległe. Przesunięcie równoległe względem osi OX",
        3: "Przesunięcie równoległe względem osi OY",
        4: "Symetria osiowa. Symetria osiowa względem osi OX i OY",
        5: "Symetria środkowa. Symetria środkowa względem punktu (0, 0)",
        6: "Zastosowanie wykresów funkcji do rozwiązywania równań i nierówności",
      },
      2: {
        1: "Wartość bezwzględna liczby rzeczywistej",
        2: "Odległość między liczbami na osi liczbowej",
        3: "Geometryczna interpretacja wartości bezwzględnej na osi liczbowej",
        4: "Proste równania z wartością bezwzględną",
        5: "Proste nierówności z wartością bezwzględną",
      },
      3: {
        1: "Przypomnienie wiadomości o funkcji kwadratowej z klasy 1.",
        2: "Związek między wzorem funkcji kwadratowej w postaci ogólnej, a wzorem funkcji kwadratowej w postaci kanonicznej",
        3: "Miejsce zerowe funkcji kwadratowej. Wzór funkcji kwadratowej w postaci iloczynowej",
        4: "Szkicowanie wykresów funkcji kwadratowych. Odczytywanie własności funkcji kwadratowej na podstawie wykresu",
        5: "Wyznaczanie wzoru funkcji kwadratowej na podstawie jej własności",
        6: "Najmniejsza oraz największa wartość funkcji kwadratowej w przedziale domkniętym",
        7: "Badanie funkcji kwadratowej - zadania optymalizacyjne",
        8: "Równania kwadratowe",
        9: "Równania prowadzące do równań kwadratowych",
        10: "Nierówności kwadratowe",
        11: "Zadania prowadzące do równań i nierówności kwadratowych",
      },
      4: {
        1: "Powtórzenie wiadomości z geometrii z klasy 1.",
        2: "Okrąg. Położenie prostej i okręgu",
        3: "Wzajemne położenie dwóch okręgów",
        4: "Koła i kąty",
        5: "Twierdzenie o stycznej i siecznej",
        6: "Symetralne boków trójkąta. Okrąg opisany na trójkącie",
        7: "Dwusieczne kątów trójkąta. Okrąg wpisany w trójkąt",
      },
      5: {
        1: "Trygonometria kąta ostrego - powtórzenie wiadomości z klasy 1.",
        2: "Sinus, cosinus, tangens i cotangens dowolnego kąta płaskiego",
        3: "Podstawowe tożsamości trygonometryczne",
        4: "Wybrane wzory redukcyjne",
      },
      6: {
        1: "Odcinek w układzie współrzędnych",
        2: "Równanie kierunkowe prostej",
        3: "Równanie ogólne prostej",
        4: "Równanie okręgu",
        5: "Wyznaczanie w układzie współrzędnych punktów wspólnych prostych, okręgów i parabol",
        6: "Zastosowanie układów równań do rozwiązywania zadań z geometrii analitycznej",
      },
      7: {
        1: "Twierdzenie sinusów",
        2: "Twierdzenie cosinusów",
        3: "Zastosowanie twierdzenia sinusów i twierdzenia cosinusów do rozwiązywania zadań",
        4: "Pole figury płaskiej",
        5: "Pole trójkąta, część 1",
        6: "Pole trójkąta, część 2",
        7: "Pola trójkątów podobnych",
        8: "Pole koła, pole wycinki koła",
        9: "Zastosowanie pojęcia pola w dowodzeniu twierdzeń",
      },
      8: {
        1: "Wielomiany jednej zmiennej rzeczywistej",
        2: "Dodawanie, odejmowanie i mnożenie wielomianów",
        3: "Równość wielomianów",
        4: "Wzory skróconego mnożenia stopnia 3. Wzór na aⁿ - bⁿ",
        5: "Zastosowanie wzorów skróconego mnożenia w dowodzeniu",
        6: "Podzielność wielomianów",
        7: "Dzielenie wielomianu przez wielomian",
        8: "Pierwiastek wielomianu",
        9: "Pierwiastki wymierne wielomianu",
        10: "Rozkładanie wielomianów na czynniki",
        11: "Równania wielomianowe",
        12: "Zadania prowadzące do równań wielomianowych",
      },
    },
    rozszerzenie: {
      1: {
        1: "Wektor na płaszczyźnie",
        2: "Wektor w układzie współrzędnych",
        3: "Przesunięcie równoległe. Przesunięcie równoległe względem osi OX",
        4: "Przesunięcie równoległe względem osi OY",
        5: "Symetria osiowa. Symetria osiowa względem osi OX i OY",
        6: "Symetria środkowa. Symetria środkowa względem punktu (0, 0)",
        7: "Wykres funkcji y = |f(x)| oraz y = f(|x|)",
        8: "Wykres funkcji y = k * f(x) oraz y = f(k * x), gdzie k ≠ 0",
        9: "Szkicowanie wykresów funkcji do rozwiązywania równań i nierówności",
        10: "Zastosowanie wykresów funkcji do rozwiązywania równań i nierówności",
      },
      2: {
        1: "Wartość bezwzględna liczby rzeczywistej",
        2: "Odległość między liczbami na osi liczbowej",
        3: "Geometryczna interpretacja wartości bezwzględnej na osi liczbowej",
        4: "Proste równania z wartością bezwzględną",
        5: "Proste nierówności z wartością bezwzględną",
        6: "Własności wartości bezwzględnej",
        7: "Równania z wartością bezwzględną",
        8: "Nierówności liniowe z parametrem",
        9: "Układy równań pierwszego stopnia z dwiema niewiadomymi z parametrem",
      },
      3: {
        1: "Przypomnienie wiadomości o funkcji kwadratowej z klasy 1.",
        2: "Związek między wzorem funkcji kwadratowej w postaci ogólnej, a wzorem funkcji kwadratowej w postaci kanonicznej",
        3: "Miejsce zerowe funkcji kwadratowej. Wzór funkcji kwadratowej w postaci iloczynowej",
        4: "Szkicowanie wykresów funkcji kwadratowych. Odczytywanie własności funkcji kwadratowej na podstawie wykresu",
        5: "Wyznaczanie wzoru funkcji kwadratowej na podstawie jej własności",
        6: "Najmniejsza oraz największa wartość funkcji kwadratowej w przedziale domkniętym",
        7: "Badanie funkcji kwadratowej - zadania optymalizacyjne",
        8: "Równania kwadratowe",
        9: "Równania prowadzące do równań kwadratowych",
        10: "Nierówności kwadratowe",
        11: "Zadania prowadzące do równań i nierówności kwadratowych",
        12: "Równania i nierówności, w których niewiadoma występuje pod znakiem pierwiastka kwadratowego",
        13: "Wykres funkcji kwadratowej z wartością bezwzględną",
        14: "Równania i nierówności kwadratowe z wartością bezwzględną",
        15: "Wzory Viete'a",
        16: "Równania i nierówności kwadratowe z parametrem",
      },
      4: {
        1: "Powtórzenie wiadomości z geometrii z klasy 1.",
        2: "Okrąg. Położenie prostej i okręgu",
        3: "Wzajemne położenie dwóch okręgów",
        4: "Koła i kąty",
        5: "Twierdzenie o stycznej i siecznej",
        6: "Symetralne boków trójkąta. Okrąg opisany na trójkącie",
        7: "Dwusieczne kątów trójkąta. Okrąg wpisany w trójkąt",
      },
      5: {
        1: "Trygonometria kąta ostrego - powtórzenie wiadomości z klasy 1.",
        2: "Sinus, cosinus, tangens i cotangens dowolnego kąta płaskiego",
        3: "Podstawowe tożsamości trygonometryczne",
        4: "Wybrane wzory redukcyjne",
        5: "Kąt skierowany. Miara łukowa kąta",
        6: "Funkcje trygonometryczne zmiennej rzeczywistej",
        7: "Wykresy funkcji trygonometrycznych",
      },
      6: {
        1: "Odcinek w układzie współrzędnych",
        2: "Równanie kierunkowe prostej",
        3: "Równanie ogólne prostej",
        4: "Równanie okręgu",
        5: "Wyznaczanie w układzie współrzędnych punktów wspólnych prostych, okręgów i parabol",
        6: "Zastosowanie układów równań do rozwiązywania zadań z geometrii analitycznej",
      },
      7: {
        1: "Twierdzenie sinusów",
        2: "Twierdzenie cosinusów",
        3: "Zastosowanie twierdzenia sinusów i twierdzenia cosinusów do rozwiązywania zadań",
        4: "Pole figury płaskiej",
        5: "Pole trójkąta, część 1",
        6: "Pole trójkąta, część 2",
        7: "Pola trójkątów podobnych",
        8: "Pole koła, pole wycinki koła",
        9: "Zastosowanie pojęcia pola w dowodzeniu twierdzeń",
      },
      8: {
        1: "Wielomiany jednej zmiennej rzeczywistej",
        2: "Dodawanie, odejmowanie i mnożenie wielomianów",
        3: "Równość wielomianów",
        4: "Wzory skróconego mnożenia stopnia 3. Wzór na aⁿ - bⁿ",
        5: "Zastosowanie wzorów skróconego mnożenia w dowodzeniu",
        6: "Podzielność wielomianów",
        7: "Dzielenie wielomianu przez dwumian liniowy. Schemat Hornera",
        8: "Dzielenie wielomianu przez wielomian stopnia większego od 1",
        9: "Pierwiastek wielomianu. Twierdzenie Bezouta",
        10: "Pierwiastki wymierne wielomianu",
        11: "Pierwiastek wielokrotny",
        12: "Rozkładanie wielomianów na czynniki",
        13: "Równania wielomianowe",
        14: "Zadania prowadzące do równań wielomianowych",
        15: "Równania wielomianowe z parametrem",
        16: "Funkcje wielomianowe",
        17: "Nierówności wielomianowe",
      },
    },
  },
  3: {
    podstawa: {
      1: {
        1: "Ułamek algebraiczny. Skracanie i rozszerzanie ułamków algebraicznych",
        2: "Dodawanie i odejmowanie ułamków algebraicznych",
        3: "Mnożenie i dzielenie ułamków algebraicznych",
        4: "Działania na ułamkach algebraicznych",
        5: "Równania wymierne",
        6: "Zadania tekstowe prowadzące do równań wymiernych",
        7: "Funkcja homograficzna",
      },
      2: {
        1: "Okręślenie ciągu. Sposoby opisywania ciągów",
        2: "Monotoniczność ciągów",
        3: "Ciąg arytmetyczny",
        4: "Suma początkowych wyrazów ciągu arytmetycznego",
        5: "Ciąg geometryczny",
        6: "Suma początkowych wyrazów ciągu geometrycznego",
        7: "Ciąg arytmetyczny i ciąg geometryczny - zadania różne",
        8: "Lokaty pieniężne i kredyty bankowe",
      },
      3: {
        1: "Reguła mnożenia i reguła dodawania",
        2: "Wariacje",
        3: "Permutacje",
        4: "Kombinacje",
      },
      4: {
        1: "Podział czworokątów. Trapezoidy",
        2: "Trapezy",
        3: "Równoległoboki",
        4: "Podobieństwo. Czworokąty podobne",
      },
      5: {
        1: "Pole prostokąta. Pole kwadratu",
        2: "Pole równoległoboku. Pole rombu",
        3: "Pole trapezu",
        4: "Pole czworokąta - zadania różne",
        5: "Pola figur podobnych",
        6: "Mapa. Skala mapy",
      },
      6: {
        1: "Wektor w układzie współrzędnych. Podział odcinka",
        2: "Proste w układzie współrzędnych",
        3: "Odległość punktu od prostej",
        4: "Odległość między dwiema prostymi równoległymi",
        5: "Pole trójką. Pole wielokąta",
        6: "Równania okręgu. Wzajemne położenie prostej i okręgu",
        7: "Zadania różne z geometrii analitycznej",
        8: "Wybrane przekształcenia geometryczne w układzie współrzędnych",
      },
    },
    rozszerzenie: {
      1: {
        1: "Ułamek algebraiczny. Skracanie i rozszerzanie ułamków algebraicznych",
        2: "Dodawanie i odejmowanie ułamków algebraicznych",
        3: "Mnożenie i dzielenie ułamków algebraicznych",
        4: "Działania na ułamkach algebraicznych",
        5: "Równania wymierne",
        6: "Zadania tekstowe prowadzące do równań wymiernych",
        7: "Nierówności wymierne",
        8: "Dowodzenie z zastosowaniem średniej arytmetycznej, średniej geometrycznej i średniej kwadratowej kilku liczb",
        9: "Funkcja homograficzna",
        10: "Zastosowanie wiadomości o funkcji homograficznej w zadaniach",
        11: "Funkcje wymierne",
      },
      2: {
        1: "Okręślenie ciągu. Sposoby opisywania ciągów",
        2: "Monotoniczność ciągów",
        3: "Ciąg arytmetyczny",
        4: "Suma początkowych wyrazów ciągu arytmetycznego",
        5: "Ciąg geometryczny",
        6: "Suma początkowych wyrazów ciągu geometrycznego",
        7: "Ciąg arytmetyczny i ciąg geometryczny - zadania różne",
        8: "Lokaty pieniężne i kredyty bankowe",
        9: "Granica ciągu liczbowego",
        10: "Obliczanie granic ciągów zbieżnych",
        11: "Wybrane własności ciągów zbieżnych",
        12: "Ciągi rozbieżne do nieskończoności",
        13: "Szereg geometryczny",
      },
      3: {
        1: "Wariacje",
        2: "Permutacje",
        3: "Kombinacje",
        4: "Kombinatoryka - zadania różne",
        5: "Symbol Newtona. Wzór Newtona. Trójkąt Pascala",
      },
      4: {
        1: "Podział czworokątów. Trapezoidy",
        2: "Trapezy",
        3: "Równoległoboki",
        4: "Okrąg opisany na czworokącie",
        5: "Okrąg wpisany w czworokąt",
        6: "Okrąg opisany na czworokącie, okrąg wpisany w czworokąt - zadania na dowodzenie",
        7: "Podobieństwo. Czworokąty podobne",
      },
      5: {
        1: "Pole prostokąta. Pole kwadratu",
        2: "Pole równoległoboku. Pole rombu",
        3: "Pole trapezu",
        4: "Pole czworokąta - zadania różne",
        5: "Pola figur podobnych",
        6: "Mapa. Skala mapy",
      },
      6: {
        1: "Granica funkcji w punkcie",
        2: "Obliczanie granicy funkcji w punkcie",
        3: "Granice jednostronne funkcji w punkcie",
        4: "Granica funkcji w nieskończoności",
        5: "Granica niewłaściwa funkcji",
        6: "Ciągłość funkcji w punkcie",
        7: "Ciągłość funkcji w zbiorze",
        8: "Asymptoty wykresu funkcji",
        9: "Pochodna funkcji w punkcie",
        10: "Funkcja pochodna",
        11: "Funkcja złożona. Pochodna funkcji złożonej",
        12: "Styczna do wykresu funkcji",
        13: "Pochodna funkcji a monotoniczność funkcji",
        14: "Ekstrema lokalne funkcji",
        15: "Największa i najmniejsza wartość funkcji w przedziale",
        16: "Zadania optymalizacyjne",
      },
      7: {
        1: "Funkcje trygonometryczne zmiennej rzeczywistej - powtórzenie wiadomości z klasy 2.",
        2: "Przekształcenia wykresów funkcji trygonometrycznych",
        3: "Równania trygonometryczne, część 1",
        4: "Funkcje trygonometryczne sumy i różnicy",
        5: "Funkcje trygonometryczne wielokrotności kąta",
        6: "Sumy i różnice funkcji trygonometrycznych",
        7: "Równania trygonometryczne, część 2",
        8: "Nierówności trygonometryczne",
        9: "Pochodne funkcji trygonometrycznych",
      },
      8: {
        1: "Wektor w układzie współrzędnych. Podział odcinka",
        2: "Kąt między niezerowymi wektorami",
        3: "Proste w układzie współrzędnych",
        4: "Odległość punktu od prostej",
        5: "Odległość między dwiema prostymi równoległymi",
        6: "Pole trójkąta. Pole wielokąta",
        7: "Równanie okręgu. Wzajemne położenie prostej i okręgu",
        8: "Wzajemne położenie dwóch okręgów. Zadania różne z geometrii analitycznej",
        9: "Wybrane przekształcenia geometryczne w układzie współrzędnych",
        10: "Zastosowanie analizy matematycznej w rozwiązywaniu zadań z geometrii analitycznej",
      },
    },
  },
  4: {
    podstawa: {
      1: {
        1: "Potęga o wykładniku rzeczywistym - powtórzenie",
        2: "Funkcja wykładnicza i jej właściwości",
        3: "Przekształcenia wykresów funkcji wykładniczych",
        4: "Równania wykładnicze",
        5: "Nierówności wykładnicze",
      },
      2: {
        1: "Logarytm - powtórzenie wiadomości",
        2: "Funkcja logarytmiczna - powtórzenie i uzupełnienie wiadomości",
        3: "Przekształcenia wykresów funkcji logarytmicznych",
        4: "Równania logarytmiczne",
        5: "Zastosowanie funkcji wykładniczej i funkcji logarytmicznej do rozwiązywania zadań umieszczonych w kontekście praktycznym",
      },
      3: {
        1: "Sposoby prezentowania danych zebranych w wyniku obserwacji statystycznej",
        2: "Średnia z próby",
        3: "Mediana z próby i moda z próby. Skala centylowa",
        4: "Wariancja i odchylenie standardowe",
      },
      4: {
        1: "Kombinatoryka - powtórzenie wiadomości",
        2: "Doświadczenie losowe",
        3: "Zdarzenia. Działania na zdarzeniach",
        4: "Określenie prawdopodobieństwa",
        5: "Prawdopodobieństwo klasyczne",
        6: "Doświadczenia losowe wieloetapowe",
        7: "Zmienna losowa. Wartość oczekiwana zmiennej losowej",
      },
      5: {
        1: "Płaszczyzny i proste w przestrzeni. Równoległość prostych i płaszczyzn. Proste skośne",
        2: "Prostopadłość prostych i płaszczyzn w przestrzeni",
        3: "Rzut równoległy na płaszczyznę. Rysowanie figur płaskich w rzucie równoległym na płaszczyznę",
        4: "Twierdzenie o trzech prostych prostopadłych",
        5: "Kąt między prostą a płaszczyzną. Kąt dwusienny. Graniastosłupy",
        6: "Ostrosłupy",
        7: "Siatka wielościanu. Pole powierzchni wielościanu",
        8: "Objętość figury przestrzennej. Objętość wielościanów",
        9: "Przekroje wielościanów - zadania",
      },
      6: {
        1: "Walec",
        2: "Stożek",
        3: "Kula i sfera",
        4: "Bryły obrotowe - różne zadania",
        5: "Podobieństwo figur w przestrzeni",
      },
    },
    rozszerzenie: {
      1: {
        1: "Potęga o wykładniku rzeczywistym - powtórzenie",
        2: "Funkcja wykładnicza i jej właściwości",
        3: "Przekształcenia wykresów funkcji wykładniczych",
        4: "Równania wykładnicze",
        5: "Nierówności wykładnicze",
        6: "Zastosowanie własności funkcji wykładniczej w zadaniach",
      },
      2: {
        1: "Logarytm - powtórzenie wiadomości",
        2: "Funkcja logarytmiczna - powtórzenie i uzupełnienie wiadomości",
        3: "Przekształcenia wykresów funkcji logarytmicznych",
        4: "Równania logarytmiczne",
        5: "Nierówności logarytmiczne",
        6: "Zastosowanie funkcji wykładniczej i funkcji logarytmicznej do rozwiązywania zadań umieszczonych w kontekście praktycznym",
      },
      3: {
        1: "Sposoby prezentowania danych zebranych w wyniku obserwacji statystycznej",
        2: "Średnia z próby",
        3: "Mediana z próby i moda z próby. Skala centylowa",
        4: "Wariancja i odchylenie standardowe",
      },
      4: {
        1: "Kombinatoryka - powtórzenie wiadomości",
        2: "Doświadczenie losowe",
        3: "Zdarzenia. Działania na zdarzeniach",
        4: "Określenie prawdopodobieństwa",
        5: "Obliczanie prawdopodobieństwa",
        6: "Doświadczenia losowe wieloetapowe",
        7: "Prawdopodobieństwo warunkowe",
        8: "Twierdzenie o prawdopodobieństwie całkowitym. Wzór Bayesa",
        9: "Niezależność zdarzeń",
        10: "Schemat Bernoulliego",
        11: "Zmienna losowa. Wartość oczekiwana zmiennej losowej",
      },
      5: {
        1: "Płaszczyzny i proste w przestrzeni. Równoległość prostych i płaszczyzn. Proste skośne",
        2: "Prostopadłość prostych i płaszczyzn w przestrzeni",
        3: "Rzut równoległy na płaszczyznę. Rysowanie figur płaskich w rzucie równoległym na płaszczyznę",
        4: "Twierdzenie o trzech prostych prostopadłych",
        5: "Kąt między prostą a płaszczyzną. Kąt dwusienny. Graniastosłupy",
        6: "Graniastosłupy",
        7: "Ostrosłupy",
        8: "Siatka wielościanu. Pole powierzchni wielościanu",
        9: "Objętość figury przestrzennej. Objętość wielościanów",
        10: "Przekroje wielościanów - konstrukcje",
        11: "Przekroje wielościanów - zadania",
      },
      6: {
        1: "Walec",
        2: "Stożek",
        3: "Kula i sfera",
        4: "Bryły obrotowe - zadania różne",
        5: "Podobieństwo figur w przestrzeni",
        6: "Zastosowanie analizy matematycznej w rozwiązywaniu zadań z geometrii przestrzennej",
      },
    },
  },
};
export default tematy;