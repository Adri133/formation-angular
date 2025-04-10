import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements OnInit {
  counter$!: Observable<string>;

  ngOnInit() {
    this.counter$ = interval(1000).pipe(
      filter((n) => n % 3 === 0),
      map((n) => `${n} est ${n % 2 === 0 ? 'pair' : 'impair'}`)
    );
  }
}
