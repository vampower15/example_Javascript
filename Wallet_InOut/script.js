
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const from = document.getElementById('from');
const test = document.getElementById('text');
const amount = document.getElementById('amount');

const dataTransaction=[
    {id:1,text:"rest home",amount:-10000},
    {id:2,text:"salary",amount:+20000},
    {id:3,text:"car",amount:-5000},
    {id:4,text:"vin",amount:-50},
]

// let transaction_a = dataTransaction;
let transaction_a = [];

function init(){
    list.innerHTML='';
    transaction_a.forEach(addDataToList);
    calculateMoney();
    
}

function addDataToList(transaction_a){
    const sym = transaction_a.amount < 0 ? '-':'+';
    const stt = transaction_a.amount < 0 ? 'minus':'plus';
    const item = document.createElement('li');
    result = formatNumber(Math.abs(transaction_a.amount));
    item.classList.add(stt)
    item.innerHTML=`${transaction_a.text}<span>${sym}${result}</span><button class="delete-btn" onclick="deleteData(${transaction_a.id})">x</button>`;
    list.appendChild(item)
}
//add -,--
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

// random ID
function autoID(){
    return Math.floor(Math.random()*10000)
}

//delete data
function deleteData(id){
    transaction_a = transaction_a.filter(transaction_a=>transaction_a.id !==id)
    init();
}

function calculateMoney(){
    const amounts = transaction_a.map(transaction_a => transaction_a.amount);
    //balance
    const total = amounts.reduce((result,item)=>(result+=item),0).toFixed(2);
    //income
    const income = amounts.filter(item=>item>0).reduce((result,item)=>(result+=item),0).toFixed(2);
    //expenses
    const expenses = (amounts.filter(item=>item<0).reduce((result,item)=>(result+=item),0)*-1).toFixed(2);

    //show display 
    balance.innerHTML= `฿` +formatNumber(total);
    money_plus.innerHTML=`฿` +formatNumber(income);
    money_minus.innerHTML=`฿` +formatNumber(expenses);
}

function addTransaction(e){
    e.preventDefault();
    // console.log("send data");
    if(text.value.trim() === '' || amount.value.trim() === ''){
        alert("please add data");
    }else{
        const data = {
            id:autoID(),
            text:text.value,
            amount:+amount.value
        }
        transaction_a.push(data);
        addDataToList(data);
        calculateMoney();
        text.value='';
        amount.value='';
    }
}

form.addEventListener('submit',addTransaction);
init();