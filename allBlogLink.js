let allList=document.querySelectorAll(".list-group-item")
let Search=document.getElementById("search")

// Array.from(allList).map(i=>{
//     let anchor=i.children
//     anchor[0].textContent.
// })

Search.addEventListener("keyup",(e)=>{
    Array.from(allList).map(i=>{
            let anchor=i.children
           if(anchor[0].textContent.toLowerCase().includes(e.target.value)){
            i.classList.remove("hide")
           }
           else{
            i.classList.add("hide")
           }
        })
        
})