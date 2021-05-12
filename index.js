let count = 0;
document.querySelector(".btn").addEventListener("click",hours);

function hours ()
{
    count += 1;
    const numHours = prompt("Enter the number of hours ");
    const final = calculate (numHours);
    console.log(final);
    var table = document.getElementById("table");
    var row = table.insertRow(count);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2)
    cell1.innerHTML = count;
    cell2.innerHTML = numHours;
    cell3.innerHTML = final;



}

function calculate(numHours)
{
    let cost = 2;
    if (numHours >= 20)
    {
        cost =10;
    }
    else if (numHours > 3 && numHours < 20)
    {
        cost = 2 + (numHours-3)*0.5;
    }

    return cost;

   
}