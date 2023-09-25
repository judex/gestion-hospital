import { Component } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [
  ]
})
export class GraficaComponent {

  public labels1: string[] = [ 'Pan', 'Leche', 'Jamón' ];
  public colors1 = [ '#BF1E0B', '#16878C', '#0B58BF' ];
  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      {
        data: [350, 450, 600],
        backgroundColor: this.colors1
      }
    ]
  };
}
