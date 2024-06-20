import { Component, Input } from '@angular/core';
import { Prodotto } from '../../models/prodotto';

@Component({
  selector: 'app-prodotto-preview',
  templateUrl: './prodotto-preview.component.html',
  styleUrl: './prodotto-preview.component.css'
})
export class ProdottoPreviewComponent {
  @Input()
  prodotto?: Prodotto;

}
