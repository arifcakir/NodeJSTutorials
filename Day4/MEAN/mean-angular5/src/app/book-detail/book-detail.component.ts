import { Component, OnInit } from '@angular/core';

//biz ekledik
import { HttpClient } from '@angular/common/http';
//import { ActivatedRoute } from '@angular/router';    --------------> silindi
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})





export class BookDetailComponent implements OnInit {


//Oninit içini tamamen biz ekledik

deleteBook(id) {
  this.http.delete('/book/'+id)
    .subscribe(res => {
        this.router.navigate(['/books']);
      }, (err) => {
        console.log(err);
      }
    );
}





  book = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.http.get('/book/'+id).subscribe(data => {
      this.book = data;
    });
  }

    
  }

