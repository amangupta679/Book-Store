import { Component, OnInit } from '@angular/core';
import { BookutilityService } from 'src/app/services/bookutility.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private bookUtilityService: BookutilityService) { }

  books: Book[] = [];

  autocompleteSuggestions: any;

  ngOnInit(): void {
    this.bookUtilityService.getSuggestion().subscribe((res) => {
      console.log('suggestion is :- ' + res);
      this.autocompleteSuggestions = res;
    });
  }

  searchQuery: string = ''
  getSearchQuery() {
    this.bookUtilityService.searchQuery(this.searchQuery).subscribe((res) => {
      this.books = res;
    });
  }

  addToCart(bookId: any) {
    console.log('------>' + bookId);
    this.bookUtilityService.addToCartItem(bookId).subscribe((res) => {
      console.log(res);
    });
  }

  public viewDetails(id: any) {
    window.localStorage.setItem('detailsToShow', id);
  }

}


interface Publishers {
  id: number;
  publisherName: string;
  country: string;
}

interface Author {
  id: number;
  authorName: string;
  dateOfBirth: string;
}

class Book {
  id: number;
  publishers: Publishers;
  author: Author;
  imageUrl: string;
  title: string;
  genre: string;
  price: string;
  description: string;
  category: string;

  constructor(
    id: number,
    publishers: Publishers,
    author: Author,
    imageUrl: string,
    title: string,
    genre: string,
    price: string,
    description: string,
    category: string
  ) {
    this.id = id;
    this.publishers = publishers;
    this.author = author;
    this.imageUrl = imageUrl;
    this.title = title;
    this.genre = genre;
    this.price = price;
    this.description = description;
    this.category = category;
  }
}