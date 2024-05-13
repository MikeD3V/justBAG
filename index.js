document.getElementById('add');
document.getElementById('minus');
document.getElementById('quantity');
document.getElementById('price');
document.getElementById('buy');



let magkano = 0;
let count = 0;
add.onclick = function(){ 
    magkano += 250;
    count++; 
    quantity.textContent = count; 
}
minus.onclick = function(){ 
    magkano -= 250;
    count--; 
    quantity.textContent = count; 
}
buy.onclick = function(){ 
    if(count <= 0){
        alert('You did not buy anything')
    }
    else if (magkano > 0){
        alert('Your Total is $'+magkano)
        let money = window.prompt('Enter money: ')
        let change = money - magkano;
            if(change < 0 ){
                alert('Kuwang money bruh')
            }
            else{
            alert('Item : Gucci bag\nMoney: '+money+'\n'+'Change: '+change)
        }
    }
}


