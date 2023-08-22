// Operations
function add(a,b) {
    return a+b;
}
function minus(a,b) {
    return a-b;
}
function divide(a,b) {
    if(b!=0)
    return a/b;
    alert("You can't divide a number by zero!");
}
function multiply(a,b) {
    return a*b;
}

// Display
const leftText=document.querySelector(".left-value");
const rightText=document.querySelector(".right-value");

// Numbers 

for(let i=0;i<=9;i++) {
    const number=document.querySelector(`.small-btn[data-value="${i}"]`);
    number.addEventListener("click", () => {
        let currentValue=rightText.textContent;
        if(currentValue!=0)
        rightText.textContent=currentValue+i;
        else
        rightText.textContent=i;
    });
}

const numberPoint=document.querySelector(".dot");
numberPoint.addEventListener("click", () => {
    let currentValue=rightText.textContent;
    if(!currentValue.includes(".")) {
        if(currentValue!=0)
        rightText.textContent=currentValue+".";
        else
        rightText.textContent=".";
    }
});

// Clear and delete
const clearBtn=document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    rightText.textContent="";
    leftText.textContent="";
});

const deleteBtn=document.querySelector(".delete");
deleteBtn.addEventListener("click", () => {
    rightText.textContent=rightText.textContent.substring(0,rightText.textContent.length-1);
});

// Operators
let operators=["÷","×","+","-","="];

operators.forEach(operator => {
    const element=document.querySelector(`.small-btn[data-value="${operator}"]`);
    element.addEventListener("click", () => {
        if(leftText.textContent==""){
            leftText.textContent=rightText.textContent+operator;
            rightText.textContent="";
        }
        else {
            let a=leftText.textContent.substring(0,leftText.textContent.length-1);
            let b=rightText.textContent;
            let op=leftText.textContent.substring(leftText.textContent.length-1,leftText.textContent.length);
            if(op==="÷") {
                leftText.textContent=divide(Number(a),Number(b))+operator;
                rightText.textContent="";
                leftText.textContent=leftText.textContent.substring(0,leftText.textContent.length-1)+operator;
            }
            else if(op==="×") {
                leftText.textContent=multiply(Number(a),Number(b))+operator;
                rightText.textContent="";
                leftText.textContent=leftText.textContent.substring(0,leftText.textContent.length-1)+operator;
            }
            else if(op==="+") {
                leftText.textContent=add(Number(a),Number(b))+operator;
                rightText.textContent="";
                leftText.textContent=leftText.textContent.substring(0,leftText.textContent.length-1)+operator;
            }
            else if(op==="-") {
                leftText.textContent=minus(Number(a),Number(b))+operator;
                rightText.textContent="";
                leftText.textContent=leftText.textContent.substring(0,leftText.textContent.length-1)+operator;
            }
            else if(operator==="=") {
                console.log(a,b,op);
                if(op=="÷") {
                    leftText.textContent="";
                    rightText.textContent=divide(Number(a),Number(b));
                    console.log(divide(Number(a),Number(b)));
                }
                else if(op=="×") {
                    leftText.textContent="";
                    rightText.textContent=multiply(Number(a),Number(b));
                }
                else if(op=="+") {
                    leftText.textContent="";
                    rightText.textContent=add(Number(a),Number(b));
                }
                else if(op=="-") {
                    leftText.textContent="";
                    rightText.textContent=minus(Number(a),Number(b));
                }
                console.log(a,b,op);
            }
        }
    });
});

// const numberTwo=document.querySelector(".number-2");
// numberTwo.addEventListener("click", () => {
//     let currentValue=rightText.textContent;
//     if(currentValue!=0)
//     rightText.textContent=currentValue+"2";
//     else
//     rightText.textContent="2";
// });

// const numberThree=document.querySelector(".number-3");
// numberThree.addEventListener("click", () => {
//     let currentValue=rightText.textContent;
//     if(currentValue!=0)
//     rightText.textContent=currentValue+"3";
//     else
//     rightText.textContent="3";
// });

// const numberFour=document.querySelector(".number-4");
// numberFour.addEventListener("click", () => {
//     let currentValue=rightText.textContent;
//     if(currentValue!=0)
//     rightText.textContent=currentValue+"4";
//     else
//     rightText.textContent="4";
// });

// const numberFive=document.querySelector(".number-5");
// numberFive.addEventListener("click", () => {
//     let currentValue=rightText.textContent;
//     if(currentValue!=0)
//     rightText.textContent=currentValue+"5";
//     else
//     rightText.textContent="5";
// });

// const numberSix=document.querySelector(".number-6");
// numberSix.addEventListener("click", () => {
//     let currentValue=rightText.textContent;
//     if(currentValue!=0)
//     rightText.textContent=currentValue+"6";
//     else
//     rightText.textContent="6";
// });

// const numberSeven=document.querySelector(".number-7");
// numberSeven.addEventListener("click", () => {
//     let currentValue=rightText.textContent;
//     if(currentValue!=0)
//     rightText.textContent=currentValue+"7";
//     else
//     rightText.textContent="7";
// });

// const numberEight=document.querySelector(".number-8");
// numberEight.addEventListener("click", () => {
//     let currentValue=rightText.textContent;
//     if(currentValue!=0)
//     rightText.textContent=currentValue+"8";
//     else
//     rightText.textContent="8";
// });

// const numberNine=document.querySelector(".number-9");
// numberNine.addEventListener("click", () => {
//     let currentValue=rightText.textContent;
//     if(currentValue!=0)
//     rightText.textContent=currentValue+"9";
//     else
//     rightText.textContent="9";
// });

// const numberZero=document.querySelector(".number-0");
// numberZero.addEventListener("click", () => {
//     let currentValue=rightText.textContent;
//     if(currentValue!=0)
//     rightText.textContent=currentValue+"0";
//     else
//     rightText.textContent="0";
// });

// const numberPoint=document.querySelector(".dot");
// numberPoint.addEventListener("click", () => {
//     let currentValue=rightText.textContent;
//     if(!currentValue.includes(".")) {
//         if(currentValue!=0)
//         rightText.textContent=currentValue+".";
//         else
//         rightText.textContent=".";
//     }
// });