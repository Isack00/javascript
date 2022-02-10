var data = new Date()
var dsem = data.getDay()

switch (dsem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERROR] Insira um dia válido')
}

if (dsem == 0 || dsem == 6) {
    console.log('Fim de Semana')
} else {
    console.log('Dia de Semana')
}