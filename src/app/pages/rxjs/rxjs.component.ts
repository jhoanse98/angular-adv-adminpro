import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import {filter, map, retry, take} from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy{


  public intervalsSubscription: Subscription

  constructor() { 


    this.intervalsSubscription = this.retornaIntervalo().subscribe(valor => console.log(valor))
  }
  ngOnDestroy(): void {
    this.intervalsSubscription.unsubscribe()
  }

  retornaIntervalo() {
    const intervalo = interval(100).pipe(
                          //take(4),
                          map(valor => valor + 1),
                          filter(valor => (valor%2 ===0) ? true : false),
                          
    )
    return intervalo
  }

  retornaObservable(): Observable<number> {
    const obs$=  new Observable<number> (observer => {

      let contador = 0
      const intervalo = setInterval(() => {
     


        contador++
        observer.next(contador)


        if( contador===4){
          observer.complete()
          clearInterval(intervalo)
        }

        if(contador===2){
          observer.error("esto dejo de funcionar")
          clearInterval(intervalo)
        }
      }, 2000)
    });

    return obs$;
  }



  ngOnInit(): void {
  }

}
