//interface de l'objet livre en TypeScript
//Utilisée pour les types ds données: id, titre,auteur,, description, statut=disponible/emprunté 
export interface Book{

    id: string,
    title: string,
    author: string,
    description: string,
    status: string;
}