let defaultColor="#000000"


const setColorBtn = document.querySelector(".settings-container button");

setColorBtn.addEventListener("click", () => {
    let chosenColor=document.querySelector(".settings-container input").value ;
    defaultColor= chosenColor;
})

function createGrid() {
    for(let i=0; i<(16*16);i++) {
        const container=document.querySelector(".grid-container");
        const div=document.createElement("div");
        div.classList.add("grid-item");
        container.append(div);
    }
}

createGrid();

const allDivs = document.querySelectorAll(".grid-item");

allDivs.forEach((div) => {
    div.addEventListener("click",() => {
        div.classList.add("marked");
        div.style.cssText=`background: ${defaultColor};`
    });
});

const clearBtn=document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
    const allMarked = document.querySelectorAll(".marked");
    allMarked.forEach((marked) => {
        marked.classList.remove("marked");
        marked.style.cssText="background: white;"
    });
    
});

const gridBtn=document.querySelector(".toggle-grid");

gridBtn.addEventListener("click", () => {
    allDivs.forEach((div) => {
        div.classList.toggle("grid-item");
        console.log(div);
    });
});