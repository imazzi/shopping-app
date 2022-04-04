import { Component, OnInit } from '@angular/core';
import { Produit } from '../modele/produit.modele';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {



  constructor(public panierService:PanierService) { }

  ngOnInit(): void {
  }

  produits: Produit[] =  this.panierService.getProduits();
  qteCount = 1

  getProduits(): void {
    console.log(this.produits)
  }

  plus(){
     this.qteCount++;
     console.log(this.qteCount)

  }
  minus(){
    this.qteCount--;
    console.log(this.qteCount)
  }

  total(){
    
  }
}
