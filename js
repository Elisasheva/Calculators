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

funkcja to np. add event listener, math, number(konwertowalismy na liczby)...

jak pisać wlasne funkcje?

            typowa funkcja:

function double(number) {
    return number * 2;
}

Stworzona funkcja podwaja podaną liczbę
 
to jest tylko zadeklarowanie funkcji. Stworzylam funkcję o nazwie "double" do ktorej mozna przypisac parametr (number), i funkcja zwróci podwojoną tę liczbę.

console.log(double(5));
zwróci 10, bo 5 * 2. w miejsce number zostala wpisana liczba 5. wiec przy zwracaniu number * 2 to 5 * 2.

            Skladnia funkcji:

function nazwa(parametr1, parametr2) {
    // instrukcje
    return wartość;
}

Wywolanie funkcji 

let doubled = double(5);

            Funkcje strzalkowe - krótszy prostszy zapis

let double = number => number * 2;

mozna przerobić poprzednią funkcję:

let double = (number) => {
    return number * 2;
}

mozna tez zapisac tak, w wersji bardzo skroconej:

let double = number => number * 2;

najczęściej się uzywa funkcji strzalkowych!

            Zasięg zmiennych w funkcji 

wewnątrz funkcji widać zadeklarowana przed nią zmienną, np:

let myNumber = 5;

let double = (number) => {
    console.log(`myNumber wynosi ${myNumber}`)
    return number * 2;
}

w tym przypadku na konsoli wypisze się zmienna 5, bo ta funkcja WIDZI tą zadeklarowaną zmienną. 
Ale jakby wewnątrz funkcji byla zadeklarowana inna zmienna to nie bedzie jej widac na zewnątrz:

let double = (number) => {
    let zmienna = 20;
    return number * 2;
}

ona jest widoczna tylko w funkcji, musialaby być uzyta w tej funkcji tylko. nie widac jej poza funkcja, jakbysmy np wywolali tą zmienną po klamrach wtedy nie będzie jej widać. 


            let, const, var

Dotychczas uzywaliśmy tylko "let"
ma zasieg blokowy, czyli jeśli zadeklarujemy zmienną wewnatrz bloku (klamr) nie bedzie ona widoczna na zewnątrz bloku. 

const - stala. ma zasięg blokowy. Od tej pory będziemy robić tak male zasięgi zmiennych, jakie są potrzebne, wtedy latwo zarządza się kodem.
dziala tak, ze nie mozna tej wartości potem zmienić. to jest stala zmienna. wtedy kiedy się da, dobrze uzywać const! uzywajmy const. tylko kiedy trzeba uzywac let (np w pętli) wtedy uzywajmy let. ale oprocz tego -> const.
nie mozna zmienic wartosci. czyli jesli zadeklarujemy zmienną:

const zmienna = 5;
zmienna = 6;   <- to nie zadziala. zmienna nadal bedzie 5. wyrzuci bląd

var - zmienna o zasięgu funkcyjnym. prawie nie uzywana. widoczna jest w calej funkcji.

function myFunction () {
    var zmienna = 5;
    console.log(zmienna);
}

myFunction();

funkcja zostanie wywolana. jesli console.log(zmienna) zostaloby zapisane po klamrach, wtedy nie byloby widoczne. ale jesli zrobimy tak:

function myFunction () {
    {
    var zmienna = 5;
    }

    console.log(zmienna);
}

czyli zapiszemy zmienną w jakims bloku wewnątrz funkcji, to i tak na zewnątrz bloku będzie widoczna. inaczej jeśli w miejscu var byloby let - wtedy nie bylaby widoczna. console.log musialoby znalezc sie w tym samym bloku.


            Funkcja anonimowa

Funkcja nie musi mieć nazwy, np. funkcja strzalkowa zawsze jest anonimowa, function tez moze być anonimowa. 
kiedy przekazujemy funkcję do innych funkcji - np. przekazywaliśmy funkcję do AddEventListener, tam nie nadawaliśmy jej zadnej nazwy. przekazywalismy funkcję strzalkową, a ta zawsze jest anonimowa.

jak wygląda?

let double = function(number) {
    return number * 2;
}

ta funkcja juz jest anonimowa. By miala nazwę:

let double = function nazwa(number) {
    return number * 2;
}

strzalkowa wersja (anonimowa):

let double = (number) => {
    return number * 2;
}

                PRZYKŁAD

        Funkcja wypisująca w konsoli jakies przywitanie:

function welcome() {
    console.log("przywitanie")
}

welcome();    <- wywolanie funkcji

dziala tak samo, jak zwykŁe:
console.log("przywitanie");


        Przyklad, w ktorym zmienna anonimową deklarujemy wyzej. 
        Zmienna anonimowa zmieniająca kolor tla na kliknięcie:

changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("klasa_tla_ciemnego);
    nextColorName.innerText = body.classList.contains("klasa_tla_ciemnego") ? "biale"
})

let onChangeBackgroundClick = () => {
    body.classList.toggle("klasa_tla_ciemnego);
    nextColorName.innerText = body.classList.contains("klasa_tla_ciemnego") ? "biale"
};

changeBackgroundButton.addEventListener("click", onChangeBackgroundClick);  <- tak często się nazywa funkcje ktore są odpalane na jakimś evencie


            PRZY UŻYCIU CONST I FUNKCJI STRZALKOWYCH

const welcome  = () => {
    console.log("przywitanie")
}

const onChangeBackgroundClick = () => {
    body.classList.toggle("klasa_tla_ciemnego);
    nextColorName.innerText = body.classList.contains("klasa_tla_ciemnego") ? "biale"
};

welcome();

        ZAMKNIĘCIE FUNCJI W BLOKU

Dzięki temu nie tworzą się zmienne globalne widoczne w calym dokumencie, a jedynie widoczne w jednym bloku:

{
    const welcome  = () => {
        console.log("przywitanie")
    }

    const onChangeBackgroundClick = () => {
        body.classList.toggle("klasa_tla_ciemnego);
        nextColorName.innerText = body.classList.contains("klasa_tla_ciemnego") ? "biale"
    };

    welcome();
}

Jest do DOBRA PRAKTYKA. Welcome jest teraz widocznbe tylko w tym bloku, jakby wkleic wywolanie welcome() za klamrami, za blokiem, nie zadziala!


zamienianie: ctrl + F -> strzalka
