function contar(){
    let n1 = document.getElementById('num1');
    let n2 = document.getElementById('num2');
    let n3 = document.getElementById('passo');
    let res = document.getElementById('result');

    if(n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0){
        res.innerHTML = "Impossível iniciar o contador! campos sem preencher.";
    }else{
        res.innerHTML = "<br />Contando: <br />"
        n1 = Number(n1.value);
        n2 = Number(n2.value);
        n3 = Number(n3.value);
        if (n3 <= 0){
            alert("Passo inválido, vou contar de 1 em 1");
            n3 = 1;
        }
        if (n1 < n2){
            for(let cont = n1; cont <= n2; cont += n3){
                res.innerHTML += ` • ${cont}`;
            }
        }else{
            for(let cont = n1; cont <= n2; cont -= n3){
                res.innerHTML += ` ${cont}`;
            }
        }
        res.innerHTML += " •";        
    }
}