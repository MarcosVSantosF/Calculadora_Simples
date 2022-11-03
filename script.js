function Calcular(n1, n2){
    n1 = document.getElementById('nm1').value
    n2 = document.getElementById('nm2').value
    
    simb = document.getElementById('simb').value

    switch(simb){
        case '+' :
            calculo = (Number(n1) + Number(n2))
            document.getElementById("res").innerHTML = `o resultado da soma de ${n1} + ${n2} é = ${calculo}`
            break
        case '-' :
            calculo = (Number(n1) - Number(n2))
            document.getElementById("res").innerHTML = `o resultado da subtração de ${n1} - ${n2} é = ${calculo}`
            break
        case '*' :
            calculo = (Number(n1) * Number(n2))
            document.getElementById('res').innerHTML = `o resultado da multiplicação de ${n1} x ${n2} é = ${calculo}`
            break
        case '/' :
            calculo = (Number(n1) / Number(n2))
            document.getElementById('res').innerHTML = `o resultado da Divisão de ${n1} + ${n2} é = ${calculo}`
            break

        
    }
}