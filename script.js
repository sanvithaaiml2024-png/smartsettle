function optimize(){

let input=document.getElementById("input").value
let transactions=JSON.parse(input)

let table=document.getElementById("result")

table.innerHTML=
"<tr><th>Transaction</th><th>Channel</th><th>Score</th><th>Reason</th></tr>"

transactions.forEach(tx=>{

let fastScore=5 + (6-tx.priority)*0.5
let standardScore=2 + (6-tx.priority)*1
let bulkScore=1 + (6-tx.priority)*1.5

let channel=""
let score=0
let reason=""

if(fastScore < standardScore && fastScore < bulkScore){

channel="FAST"
score=fastScore
reason="High priority payment requires fastest channel"

}

else if(standardScore < bulkScore){

channel="STANDARD"
score=standardScore
reason="Balanced routing for medium priority"

}

else{

channel="BULK"
score=bulkScore
reason="Low priority routed to cheapest channel"

}

table.innerHTML+=`
<tr>
<td>${tx.tx_id}</td>
<td>${channel}</td>
<td>${score.toFixed(2)}</td>
<td>${reason}</td>
</tr>
`

})

}