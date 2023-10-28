class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(number) {
    if (number < 0) {
      this._state = 0;
    }
    if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state,type = 'magazine') {
	super(name, releaseDate, pagesCount, state)
	this.type = type;
  }
}

class Book extends Magazine {
  constructor(author,name, releaseDate, pagesCount, state, type = 'book') {
	super(name, releaseDate, pagesCount, state)
	this.author = author;
	this.type = type;
  }
}

class NovelBook extends Book {
  constructor(author,name, releaseDate, pagesCount, state,type = 'novel') {
	super(author,name, releaseDate, pagesCount, state)
	this.type = type;
  }
}

class FantasticBook extends Book {
  constructor(author,name, releaseDate, pagesCount, state,type = 'fantastic') {
	super(author,name, releaseDate, pagesCount, state)
	this.type = type;
  }
}

class DetectiveBook extends Book {
  constructor(author,name, releaseDate, pagesCount, state,type = 'detective') {
	super(author,name, releaseDate, pagesCount, state)
	this.type = type;
  }
}



class Library {
	constructor(name, books = []) {
		this.name = name;
		this.books = books;
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		return this.books.find(book => book[type] === value)|| null
	}

	giveBookByName(bookName) {
		let findBook = this.books.find(book => book[bookName])|| null;
		let index = this.books.indexOf(findBook);
		this.books.splice(index, 1);
		return findBook
	}
}