var tr = document.getElementsByTagName('tr');
var lengh_tr =tr.length;


function sumRow(){
    var all =0;
    for (var i=1;i<lengh_tr-1;i++){
        var price =tr[i].getElementsByClassName('price')[0].textContent;
        var quantity =tr[i].getElementsByTagName('input')[0].value;
        var sum = tr[i].getElementsByClassName('sum')[0].innerHTML;
        var rowSum =price*quantity;
        all+=rowSum;
        document.getElementsByClassName('sum')[i-1].innerHTML = rowSum;

    }
    document.getElementById('allsum').innerHTML=all;
}


sumRow();
// console.log(all);
// tr.shift();



