import { Component, OnInit, inject } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  categorie: string[] = [];

  // ps = inject(ProdottiService);

  constructor(public ps: ProdottiService) {

  }

  ngOnInit(): void {
    this.ps.getCategories().subscribe(cats => {

      this.categorie = cats;
    })
  }
}
