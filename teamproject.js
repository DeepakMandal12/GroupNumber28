let n = 3;
let a = [];
let EM = [];
let U = [];
let L = [];
let Uu=[];
let D=[];

function takeorder(id){
    n = parseInt(prompt("Enter the order of matrix "));
    for (let i = 0; i < n; i++) {
        let r = [];
        for (let j = 0; j < n; j++) {
            let m = parseInt(prompt(`Enter value for a[${i + 1}][${j + 1}]`));
            r.push(m);
        }
        a.push(r);
    }
    document.getElementById(id).innerHTML = matrixFormat(a);
}



function matrixFormat(lst) {
    let matStr = "";
    for (let i of lst) {
        matStr += "[ ";
        for (let j of i) {
            matStr += `${j} `;
        }
        matStr += "]" + `<br>`;
    }
    return matStr;
}
