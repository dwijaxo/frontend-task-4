let count = 0;

document.querySelector(".btn").addEventListener("click",function(event){

    event.preventDefault();
    count += 1;
    let cost = document.querySelector("#lobby").value * 20 + document.querySelector("#regular").value * 10;
    var table = document.getElementById("table");
    var row = table.insertRow(count);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = count;
    cell2.innerHTML = document.querySelector("#name").value;
    cell3.innerHTML = document.querySelector("#email").value;
    cell4.innerHTML = document.querySelector("#Phone").value;
    cell5.innerHTML = document.querySelector(".select-movie").value;
    cell6.innerHTML = cost;

});

