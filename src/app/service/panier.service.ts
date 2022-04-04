import { Injectable } from '@angular/core';
import { Produit } from '../modele/produit.modele';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  listProduit:Produit[]=[]

  constructor() { }

  ajouterProduit(produit:Produit){
    this.listProduit.push(produit)
     
  }

  getProduits():Produit[]{
    return this.listProduit;
  }
}
