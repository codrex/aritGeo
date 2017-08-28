const ap = (seq,cd)=>{
  // cd is the common difference
  if(seq.length==2){
    return seq[1]-seq[0] === cd;
  }
  return seq[1]-seq[0]===cd && ap(seq.slice(1),cd)
}

const gp = (seq,r)=>{
  //r is the common ration
  if(seq.length==2){
    return seq[1]/seq[0] === r;
  }
  return seq[1]/seq[0] === r && gp(seq.slice(1),r);
}

const aritGeo = seq =>{

  //check arg type
  if(!Array.isArray(seq))return undefined;
  if(seq.length === 0)return 0;
  if(seq.length<2)return -1;


  const isGP = gp(seq,seq[1]/seq[0]);// checking if sequence is a geometric sequence
  const isAP = ap(seq,seq[1]-seq[0]);// checking if sequence is an arithmetic sequence


  return isAP && 'Arithmetic' || isGP && 'Geometric' || -1;
}

module.exports = aritGeo;


console.log(aritGeo([1,2,3,4]))