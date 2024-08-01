//interface de l'objet livre en TypeScript
//Utilisée pour les types ds données: id, titre,auteur,statut=disponible/emprunté
export interface Book{

    id: number,
    titre: string,
    auteur: string,
    statut: string;
}