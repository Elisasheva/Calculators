boolean, null, undefined

boolean
true-false, on-off - typ który moze miec tylko dwie wartości
type: checked, checkbox - prawda/falsz
operatory porownania tez zwracaja boolean

konsola:
let zmienna = true; 
wtedy jak wpiszemy:
typeof zmienna
"boolean"
pokaze się ze ta zmienna to boolean

null

let zmienna = null;
celowy brak wartości. uzywamy tego kiedy nie ma wartosci, np codziennie mierzylismy temp a pewnego dnia nie zmierzylismy, czyli wpisujemy tam null, a nie zero.
sprawdzanie, czy zmienna to null:
zmienna === null
nie sprawdzamy za pomocą typeof null, bo zwróci nam "object"

undefined

let zmienna = undefined;
jesli mamy zmienną i nie przypiszemy jej zadnej wartosci, automatycznie przypisze się undefined, czyli 

let zmienna;
zmienna
undefined

sprawdzanie czy zmienna jest undefined: zmienna === undefined;
typeof zmienna 
wypisze się "undefined"


        WSTĘP DO FUNKCJI

Funkcja: fragment kodu, procedura, zestaw instrukcji, ktory coś robi. Moze mieć NAZWĘ i przyjmować PARAMETRY/ARGUMENTY, a takze ZWRACAĆ WARTOŚĆ

funkcja to np. add event listener, math, number...

jak pisać wlasne funkcje?

typowa funkcja:

function double(number) {
    return number * 2
}
 
to jest tylko zadeklarowanie funkcji. Stworzylam funkcję o nazwie "double" do ktorej mozna przypisac parametr (number), i funkcja zwróci podwojoną tę liczbę.

console.log(double(5));
zwróci 10, bo 5 * 2. w miejsce number zostala wpisana liczba 5. wiec przy zwracaniu number * 2 to 5 * 2.

Skladnia funkcji:

function nazwa(parametr1, parametr2) {
    // instrukcje
    return wartość;
}