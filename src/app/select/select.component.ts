import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  dropDownOpened= false;
  selectedOption = "-- Bitte auswählen --";
  @Input() option: string[];
  @Output() onChange = new EventEmitter();
  @Input() model:string;


  constructor(){

  }

  onOptionSelect(option:string){
    this.dropDownOpened = false;
    this.selectedOption = option;
    this.model = option;
    //this.onChange.emit(option);
  }


  ngOnInit() {
  }

}
