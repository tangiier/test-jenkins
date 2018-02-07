import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  option = [
    "Deutsch",
    "Englisch",
    "Französisch"
  ];

  selectedLanguage = "Deutsch";

  onLanguageChange(language:string){
    alert("onLanguage" + language);
  }
}
