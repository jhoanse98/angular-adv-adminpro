import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent  {

 //recibe como parametro del padre
  @Input() progreso:number = 80

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

}
