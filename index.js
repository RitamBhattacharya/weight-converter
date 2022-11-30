let kgRef=document.getElementById("kg");
let lbRef=document.getElementById("lb");
let ozRef=document.getElementById("oz");

let convertFromKg =()=>{
    let kgVal=kgRef.value;
    //toFixed(2) limits the decimals to 2 digits.
    lbRef.value = (kgVal * 2.205).toFixed(2);
    ozRef.value = (kgVal * 35.274).toFixed(2);
}

let convertFromLb =()=>{
    let lbVal=lbRef.value;
    kgRef.value = (lbVal / 2.205).toFixed(2);
    ozRef.value = (lbVal * 16).toFixed(2);
}

let convertFromOz =()=>{
    let ozVal=ozRef.value;
    kgRef.value = (ozVal / 35.274).toFixed(2);
    lbRef.value = (ozVal / 16).toFixed(2);
}

kgRef.addEventListener("input",convertFromKg);
lbRef.addEventListener("input",convertFromLb);
ozRef.addEventListener("input",convertFromOz);
