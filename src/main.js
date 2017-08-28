const ap = (seq,cd)=>{
  // cd is the common difference
  
  if(seq.length==2){
    return seq[1]-seq[0] === cd;
  }
  return seq[1]-seq[0]===cd && ap(seq.slice(1),cd)
}

const gp = (seq,r)=>{
  //r is the common ratio
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

  // seq[1]/seq[0] get the common ratio of a geomentric progression
  // seq[1]-seq[0] gets the common difference of an arithmetic progression

  const isGP = gp(seq,seq[1]/seq[0]);// checking if sequence is a geometric sequence
  const isAP = ap(seq,seq[1]-seq[0]);// checking if sequence is an arithmetic sequence


  return isAP && 'Arithmetic' || isGP && 'Geometric' || -1;
}

module.exports = aritGeo;

