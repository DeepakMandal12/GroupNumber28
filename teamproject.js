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


function makeEM(row, col, value) { // function of making elimination matrices
    let mat = makeIdentity();
    mat[row][col] = value;
    return mat;
} 


function makeIdentity() {   // function of making identity matrix
    let mat = [];
    for (let i = 0; i < n; i++) {
        mat[i] = [];
        for (let j = 0; j < n; j++) {
            if (i==j) {
                mat[i][j] = 1
            }
            else {
                mat[i][j] = 0
            }
        }
    } 
    return mat;
}


// Multiplication of matrix
function multwomat(m,mm){
    mul=[]
    for (let i=0;i<n;i++){
        let r=[];
        for ( let j=0;j<n;j++){
            s=0;
            for (let k=0;k<n;k++){
                s+=m[i][k]*mm[k][j];
            }
            r.push(s);
        }
        mul.push(r);
}   
    return mul
}

//function to create U matrix
function Umatrix(id) {
    U = a.map(row => [...row]);
    // const showinhtml = document.getElementById(id);
    let tempEM = makeIdentity();
    EM = makeIdentity();
    // document.getElementById(id).innerHTML += matrixFormat(tempEM);
    for (let i=0; i<n; i++) {
        for(let j=i+1; j<n; j++) {
            let mf = -(U[j][i]/U[i][i]);
            tempEM = makeEM(j, i, mf);
            document.getElementById(id).innerHTML += `<h3>Elimination Matrix E${j+1}${i+1}</h3>${matrixFormat(tempEM)}` + `<br>`;
            EM=multwomat(tempEM,EM)

            for (let k=0; k<n; k++) {
                U[j][k] += mf*U[i][k];
            }
            
        }
    }
    document.getElementById(id).innerHTML += `<h3>U Matrix</h3>` + matrixFormat(U);
    document.getElementById(id).innerHTML += `<h3>Product of all Elimination Matrix</h3>` + matrixFormat(EM);
}



