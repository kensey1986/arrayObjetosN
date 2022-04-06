// console.log('hola mundo');

let miPrimerArray = [];
miPrimerArray.push('pepito');
miPrimerArray.push(4545);
// miPrimerArray=['ingresar otro dato', true];

 const persona1 = new Object();
 persona1.nombre = 'camilo';
 persona1.sueldo = 55000;
 miPrimerArray.push(persona1);

 const persona2 = { 'nombre': "juan", "sueldo": 155000, civil: true};
 miPrimerArray.push(persona2);
 miPrimerArray.push('un dato mas');


//  console.log(miPrimerArray);
//  for (let index = 0; index < miPrimerArray.length; index=index+2) {
//      console.log('lo que vale index', index);
//      const element = miPrimerArray[index];
//      console.log(element);0
//  }

 miPrimerArray.forEach((elemento) => console.log(elemento));
//  console.log('------');
//  console.log(persona1['nombre'])
// console.log(persona2);
//  console.log('------');
//  const texto =  persona2['nombre']   + persona2['sueldo'] + persona2['civil'];
//  const texto = `Nombre: ${persona2['nombre']}, Sueldo: ${persona2['sueldo']}`;
//  console.log(texto);
// console.log(miPrimerArray);