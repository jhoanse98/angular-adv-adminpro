import { Component, Input, OnInit } from '@angular/core';
import { Colors, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  implements OnInit{
  ngOnInit(): void {
    console.log(this.etiquetas)
    console.log(this.misDatos)
  }

  @Input() titulo:string = "sin titulo"
  etiquetas:string[] = ["valor1", "valor2", "valor3"]
  misDatos = [
   [300,400,150]
  ]

 
  @Input('labels') doughnutChartLabels: Label[] = this.etiquetas
  @Input('data1') doughnutChartData: MultiDataSet = this.misDatos

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public colors:Colors[] = [
    {backgroundColor: ["#6857E6", "#009FEE", "#F02059"]}
  ]

}
