import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuario().then( usuarios =>{
      console.log(usuarios)
    }
    )
  }

  getUsuario(){
    return new Promise((resolve,reject)=> {
      fetch("https://reqres.in/api/users?page=2")
      .then(res=> res.json())
      .then(res=> resolve(res.data))
    })
  }

}
