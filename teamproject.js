let n = 3;
let a=[]
// function for making matrix A by taking order 
function takeorder(id){
    n = parseInt(prompt("Enter the order of matrix A "));
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


//  To create fumction for  matrix format
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


