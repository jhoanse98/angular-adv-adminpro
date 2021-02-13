import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent  implements OnInit{

  ngOnInit() {
    this.btnclase = `btn ${this.btnclase}`
  }

 //recibe como parametro del padre
  @Input() progreso:number = 80
  @Input() btnclase:string = "btn"

  //envia hacia el padre
  @Output() valorSalida: EventEmitter<number> = new EventEmitter(); //emitir respuestas

  get regresaValor() {
    return `${this.progreso}%`;
  }

  cambioValor(valor:number){
    if(this.progreso >= 100 && valor >=0){
      this.valorSalida.emit(100)
      return this.progreso = 100
    }

    if(this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0)
      return this.progreso = 0
    }
    this.progreso=this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(valorCambio:number){
    if(valorCambio >= 100){
      this.progreso=100;
    } else if(valorCambio<=0){
      this.progreso=0;
    } else {
      this.progreso= valorCambio;
    }

    this.valorSalida.emit(this.progreso);
  }


}
