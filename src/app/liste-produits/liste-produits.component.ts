import { Component, OnInit } from '@angular/core';
import { Produit } from '../modele/produit.modele';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  produits = Produit.getListProduit();
  
  constructor(public panierService:PanierService) { }

  ngOnInit(): void {
  }

  addItem(item:Produit){
    console.log("liste")
    console.log(item)

    const found = this.panierService.getProduits().some(produit => produit.id === item.id)
    if(!found){
      return this.panierService.ajouterProduit(item)
    }
    // this.panierService.getProduits().find(produit => produit.id === item.id).qte
  }
  

}
