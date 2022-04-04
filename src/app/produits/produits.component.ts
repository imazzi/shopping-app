import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Produit } from '../modele/produit.modele';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  
  @Input() productItem!:Produit;
  @Output() newItemEvent = new EventEmitter<Produit>();


  constructor() { }

  ngOnInit(): void {
  }

  ajouterAuPanier(product:Produit):void{
    this.newItemEvent.emit(product)
  }

}
