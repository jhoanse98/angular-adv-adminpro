import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SettingsService {
  private themeSeleccionado = document.querySelector("#theme")

  constructor() { 
    const url = localStorage.getItem("theme") || "./assets/css/colors/purple-dark.css"
    this.themeSeleccionado.setAttribute('href', url)
  }

  changeColorTheme(theme:string){
    let urlTheme = `./assets/css/colors/${theme}.css`
    this.themeSeleccionado.setAttribute('href', urlTheme)
    localStorage.setItem("theme", urlTheme)
    this.checkCurrentTheme()
  }

  checkCurrentTheme(){
    const links = document.querySelectorAll(".selector")
    links.forEach(element => {
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
