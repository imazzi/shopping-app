export class Produit{
    id!: number
    imageUrl!: string
    description !: string
    prix!:number
    qte!:number
    

    static getListProduit(): Produit[]{
        return [
            {id:1, imageUrl :'../assets/images/phone.jpg',description:'Iphone 10',prix:10000,qte:1},
            {id:2, imageUrl :'../assets/images/13promax.webp',description:'Iphone 13',prix:14000,qte:1},
            {id:3, imageUrl :'../assets/images/phone.jpg',description:'Iphone 10',prix:10000,qte:1},
            {id:4, imageUrl :'../assets/images/13promax.webp',description:'Iphone 13',prix:14000,qte:1},
            {id:5, imageUrl :'../assets/images/phone.jpg',description:'Iphone 10',prix:10000,qte:1},
            {id:6, imageUrl :'../assets/images/13promax.webp',description:'Iphone 13',prix:14000,qte:1}

        ]
    }

     

}