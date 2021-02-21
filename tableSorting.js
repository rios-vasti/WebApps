let table = document.getElementById("tripleDoubleStats");
let numCol = table.rows[0].cells.length;
let numRow = table.rows.length;
//window.alert("rows: "+ numRow + " cols: " + numCol);
let statsArr =  new Array();
let getRows = table.rows;

function filterTable()
{
    let input = document.getElementById("filterBy").value.toUpperCase();
    let tr = table.getElementsByTagName("tr");
    for (let i = 0; i < numRow; i++)
    {
        let td = tr[i].getElementsByTagName("td")[j];
        if (td) 
        {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(input) > -1) 
            {
                tr[i].style.display = "";
            } 
            else 
            {
                tr[i].style.display = "none";
            }
        }


    }
}

function sortTable(col)
{
    for (let i = 0; i < numRow; i++)
    {
        let cells = getRows[i].cells;
        statsArr[i] = new Array();
        for (let j = 0; j < numCol; j++) 
        {
            statsArr[i][j] = cells[j].innerHTML;
        }
    }

    statsArr.sort(function (a, b) 
    {
        a = a[col];
        b = b[col];
        if (isNaN(a) || isNaN(b))
        {
            return (a == b) ? 0 : ((a > b) ? 1 : -1 );
        }
        else
        {
            return (+a == +b) ? 0 : ((+a > +b) ? 1 : -1 );
        }
        
    });

    for (let i = 0; i < numRow; i++) 
    {
        getRows[i].innerHTML = "<td>" + statsArr[i].join("</td><td>") + "</td>";
    }
}



function printArrayToConsole()
{
    let text = "";
    for (let i = 0; i < numRow; i++)
    {
        for (let j = 0; j < numCol; j++) 
        {
            text += statsArr[i][j] + ", "; 
        }
        text += "\n";
    }
    console.log(text);
}

