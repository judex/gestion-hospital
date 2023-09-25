import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

//  @Input() progreso:number= 50;
@Input('valor') progreso:number= 50;
@Input() btnClass: string = 'btn-primary';

@Output() valorSalida: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  onChange(val:number):void{
    if(val>100 || val < 0){
      this.progreso= val;
    }
    else{
      this.valorSalida.emit(val);
    }

  }

  get getPorcentaje(){
    return `${this.progreso}%`;
  }

  cambiarValor(e:number){
    this.progreso = this.progreso + e;
    this.valorSalida.emit(this.progreso);
    if(this.progreso >= 100){
       this.progreso = 100;
       this.valorSalida.emit(100);
    }
    if(this.progreso <= 0 ){
       this.progreso = 0;
       this.valorSalida.emit(0);
    }

  }
}
