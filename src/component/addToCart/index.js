import patchData3 from "../../instance/patchData3"

export const addToCart =(namee,id)=>{
    const cartBtn=document.getElementById('cardBtn')
    const color =document.getElementById("color")
    const sizeDiv= document.getElementById("size1")
 
    let staff ={
        name:"",
        color:"",
        size:""
    }
    color.addEventListener('click',(e)=>{
        console.log(e.target.id);
        staff.color=e.target.id
    })

    sizeDiv.addEventListener('click',(e)=>{
        console.log(e.target.id);
        staff.size=e.target.id

    })
    staff.name=namee
    cartBtn.addEventListener('click',()=>{
        patchData3(id,staff)
        console.log(staff);
    })
    
 
    
}