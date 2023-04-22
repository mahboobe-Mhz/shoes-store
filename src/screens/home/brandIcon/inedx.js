import { El } from "../../../library/El";

const brandIcon={
    Nike:"photo/icone/company.png",
    Adidas:"photo/icone/company (1).png",
    Puma:"photo/icone/company (2).png",
    Asics:"photo/icone/company (3).png",
    Reebok:"photo/icone/company (4).png",
    NewBalance:"photo/icone/company (5).png",
    Converse:"photo/icone/company (6).png",
    More:"photo/icone/company (7).png"
}
export const brandPic=()=>{
 const barndDiv =document.getElementById("brandIcon") 
     

   
    for (const key in brandIcon){
        barndDiv.innerHTML += `<img id="${key}" src="${brandIcon[key] }"/>`
    }
}