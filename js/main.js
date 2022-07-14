

    let n = parseInt(prompt("Ingrese el número que quiere saber si es primo o no lo es"))
    let con = parseInt()
    
    while(n != 0){
        con=0
        for (let i = 1; i <= n; i++) {
           
            if (n % i == 0) {
                con++
            }
        }
        if (con == 2) {
            alert('El número es primo')
        } 
        else {
            alert('El número no es primo')
        }

        n = parseInt(prompt('Ingrese otro número y si quiere finalizar ingrese 0'))
    }

