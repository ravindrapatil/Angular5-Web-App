import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubscribeComponent implements OnInit {
  scanValue: any;
  sum: number;
  rangeArray: any[] = [];
  mainData: any;
  flatMappedStream: number;
  forkJoinStream: [{ source: number; value: number; }, { source: number; value: number; }];
  mergeStream: any[] = [];
  mergeStream2: any[] = [];
  concatData: any;
  concatStream: any[] = [];
  resultsArray: any;
  urlTwo: any;
  loadedCharacter: any;
  loadedCharacter2: any;
  forkLoadedCharacter: any;
  resp: any;
  homeworld2: Observable<{}>;
  doctors: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://swapi.co/api/people/1/').subscribe(character => {
      this.resp = character;
      const newURL = this.resp.homeworld;
      // https://swapi.co/api/planets/1/
      this.http.get(newURL).subscribe(homeworld => {
        this.loadedCharacter = homeworld;
      });
    });

    // tslint:disable-next-line:prefer-const
    let first = Observable.timer(10, 500).map(r => {
      return {source: 1, value: r};
    }).take(2);

    // tslint:disable-next-line:prefer-const
    let second = Observable.timer(10, 500).map(r => {
      return {source: 2, value: r};
    }).take(2);

    // Concat
    first.concat(second).subscribe(res => {
      this.concatStream.push(res);
    });

    // Merge
    first.merge(second).subscribe(res => {
      this.mergeStream.push(res);
    });

    // forkJoin
    Observable.forkJoin(first, second).subscribe((res) => {
      this.forkJoinStream = res;
    });

    // flatMap
    // tslint:disable-next-line:prefer-const
    let flatMapFirst = Observable.of(10);

    flatMapFirst.flatMap((opeerand1) => {
      return Observable.of(opeerand1 + 10);
    }).subscribe(res => {
      this.flatMappedStream = res;
    });


    Observable.of([1, 4, 6, 7, 9])
    .subscribe(res => {
      console.log('Response ' + res);
    });

    this.http.get('http://jsonplaceholder.typicode.com/users/')
      .map((items: any) => items)
      .map(x => {
        return x.filter((y, i) => y.id > 5);
      })
      .subscribe(data => {
        this.doctors = data;
      });

      Observable.of([1, 2, 3, 4, 5, 6, 7, 8, 9])
        .map(x => {
          return x.filter(y => y % 2 === 0);
        })
        .subscribe(res => console.log(res));

      Observable.range(2, 5)
        .subscribe(x => {
          this.rangeArray.push(x);
          console.log(x);
          }, (err) => {
            console.log('Error ' + err);
          }, () => {
            console.log('Completed');
          }
        );

      // reduce
      Observable.of(1, 2, 3, 4, 5)
        .reduce((total, currentVal) => {
          return total + currentVal;
        }, 0)
        .subscribe(result => {
          this.sum = result;
        });

      // Scan
      Observable.of(1, 2, 3, 4, 5)
      .scan((total, currentVal) => {
        return total + currentVal;
      }, 0)
      .subscribe({
        next: (value) => {
          console.log(value);
          this.scanValue = value;
        }
      });

  }

}
