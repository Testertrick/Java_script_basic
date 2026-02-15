function dailyexp()
{
    return 1000
}
function personalLoan()
{
    return 2000
}
function carLoan()
{
    return 2000
}

let dl= dailyexp()
let pl= personalLoan()
let cl = carLoan()

function TotalLoan()
{
    console.log("year exp is:",+pl+dl+cl);
}

TotalLoan()