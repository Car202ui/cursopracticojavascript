//arrays destructure
let coy=[35,36,40];
let [a,b,c]=coy;
console.log(a,b,c);
if(a==33){
    console.log(`es verdad${a}`);
}else{
    console.log(`falso ${coy}`);
}

let users= {username:'ciglesias', password:'1234',rol:'admin'};
let{username, password,rol}=users;
if (username=='ciglesias' && password=='1234'){
    console.log(`Bienvenido ${username}`);
}else{
    console.log("lo sentimos");
    
}

// spread operators

let persona={name:'carlos',cc:1022328182,apto:601,torre:2,estatus:'propietario'}
let ciduad='BOG';
 
let union={...persona,ciduad};
console.log(union);

console.log('*******************************************************');

let nuevoT={Genesis:50,Exodo:40,Levitico:27};
let libros='Pentateuco';
let unionw={DEUTERONOMIO:34,...nuevoT,libros}
console.log(unionw);

if(unionw.Genesis==50){
    console.log('es el principio de la creacion de la humanidad por Dios');
    
}else{
    console.log('no es el libro correcto');
    
}

//REST
function suma(num,...values){
  console.log(values);
  console.log(num+values[0]);
  return num+values[0];
}
suma(2,2,3,4,5,6,7,8,9,9,10);
