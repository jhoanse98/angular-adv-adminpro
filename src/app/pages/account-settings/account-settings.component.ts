import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public themeSeleccionado = document.querySelector("#theme")
  public links:NodeListOf<Element>;
  
  constructor() { }

  ngOnInit(): void {
    this.links = document.querySelectorAll(".selector")
    this.checkCurrentTheme()
  }

  changeColorTheme(theme:string){
    let urlTheme = `./assets/css/colors/${theme}.css`

    this.themeSeleccionado.setAttribute('href', urlTheme)

    localStorage.setItem("theme", urlTheme)

    this.checkCurrentTheme()
  }

  checkCurrentTheme(){
    

    this.links.forEach(element => {
      element.classList.remove("working")
      const btnColor = element.getAttribute("data-theme");
      const btnColorUrl = `./assets/css/colors/${btnColor}.css`
      const currentUrl = this.themeSeleccionado.getAttribute("href")

      if( currentUrl === btnColorUrl){
        element.classList.add("working")
      }

    })
  }

}
