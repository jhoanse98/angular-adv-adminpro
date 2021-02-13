import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

 labels1:string[] = ["valor10", "valor20", "valor30"]
 data1 = [
   [100,77,192]
 ]

}
