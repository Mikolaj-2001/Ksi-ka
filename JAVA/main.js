var firstBook = {
    title1: "Wiedźmin",
    author1: "Andrzej Sapkowksi",
    statement: true
};
var secondBook = {
    title2: "Harry Potter",
    author2: "J.K Rowling",
    statement2: false
};
var thirdBook = {
    title3: "Zbrodnia i Kara",
    author3: "Fiodor Dostojewski",
    statement3: false
};

const array = [
    firstBook, secondBook, thirdBook
];

const books = [];

class Ksiazka {
    constructor(tytul, autor, przeczytana = true) {
        this.tytul = tytul
        this.autor = autor
        this.przeczytana = przeczytana
    };

    opiszKsiazke() {
        return `${this.tytul} autorstwa:${this.autor} - ${this.przeczytana ? "przeczytana" : "nieprzeczytana"}.`;
    }
}

array.forEach(object => {
    for (let klucz in object) {
        if (klucz.startsWith('title')) {
            let tytul = object[klucz];
            let autor = object['author' + klucz.charAt(5)];
            let przeczytana = object['statement' + klucz.charAt(5)];

            books.push(new Ksiazka(tytul,autor,przeczytana));
        }

    }
});

books.forEach(Ksiazka => {
    console.log(Ksiazka.opiszKsiazke());
});


