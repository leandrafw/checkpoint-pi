// 1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão); 

function microondas (comida, tempo) {

  switch (comida) {

   case 'pipoca':
     if (tempo >= 30){
       console.log('Kabum')
     } else if (tempo >= 20) {
      console.log('Comida queimou')
     } else if (tempo < 10) {
      console.log('Tempo insuficiente')
     } else {
      console.log('Prato pronto, bom apetite!!!')
     }
     break;
    
    case 'macarrao':
      if (tempo >= 24){
        console.log('Kabum')
      } else if (tempo >= 16) {
        console.log('Comida queimou')
      } else if (tempo < 8) {
        console.log('Tempo insuficiente')
      } else {
        console.log('Prato pronto, bom apetite!!!')
      }
      break;

    case 'carne':
      if (tempo >= 45){
        console.log('Kabum')
      } else if (tempo >= 30) {
        console.log('Comida queimou')
      } else if (tempo < 15) {
        console.log('Tempo insuficiente')
      } else {
        console.log('Prato pronto, bom apetite!!!')
      }
      break;

    case 'feijão':
      if (tempo >= 36){
        console.log('Kabum')
      } else if (tempo >= 24) {
        console.log('Comida queimou')
      } else if (tempo < 12) {
        console.log('Tempo insuficiente')
      } else {
        console.log('Prato pronto, bom apetite!!!')
      }
      break;

    case 'brigadeiro':
      if (tempo >= 24){
        console.log('Kabum')
      } else if (tempo >= 16) {
        console.log('Comida queimou')
      } else if (tempo < 8) {
        console.log('Tempo insuficiente')
      } else {
        console.log('Prato pronto, bom apetite!!!')
      } 
      break;
      

    default: console.log('prato não selecionado')
}
}
microondas('pipoca', 11)
