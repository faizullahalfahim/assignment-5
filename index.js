// heart icon functionality
let icons = document.getElementsByClassName('heart-icon');
let heartCountElement = document.getElementById('heart-count');
let count= 0; 
for (let icon of icons){
    icon.addEventListener("click",function(){
        count++
        heartCountElement.innerText = count; 
    })

}
// copy button functionality
let copyBtns = document.getElementsByClassName('copy-button');
let copyCountElement = document.getElementById('copy-count');
let copyCount= 0; 



for (let copy of copyBtns){
    copy.addEventListener ('click',function(){
        const card = copy.closest ('.card');
        let number = card.querySelector('.service-number').innerText;
        navigator.clipboard.writeText (`${number}`)
        copyCount++
        copyCountElement.innerText = copyCount;
        alert('Copied:'+ number)
    })

}



// call button functionality

let callHistory = []
let coinCountElement = document.getElementById ('coin-count')
let callBtns = document.getElementsByClassName('call-button')
let coins = parseInt(coinCountElement.innerText ) 

for (let btn of callBtns){
    btn.addEventListener("click",function(){
        if 
        (coins < 20){
                alert('No enough coins')
                return; 
        }
        const card = btn.closest('.card')
    const name = card.querySelector('.service-name').innerText;
    const number= card.querySelector('.service-number').innerText;
        coins = coins-20;
        coinCountElement.innerText = coins; 
         let history = {
        name: name,
        number: number,
        time:new Date()
    }
      callHistory.push(history);
      alert (`Service: ${history.name}/Number: ${history.number}`);

    const historyContainer = document.getElementById('history-container')
    // for(const history of callHistory){
        const div = document.createElement('div')
        div.innerHTML=`
        <div class="flex bg-slate-200 rounded-[20px] justify-between p-2 m-2 ">
            <div>
                <p>${history.name}</p>
                <p>${history.number}</p>
            </div>
            <div>
                <p>${history.time}</p>
            </div>
        </div>`
        historyContainer.appendChild(div);
    
    }) 
}
// clear button functionality
const clearBtn = document.getElementById('clear-button');
const historyContainer= document.getElementById('history-container');
let callHistoryContainer =[];
clearBtn.addEventListener('click',function(){
    callHistoryContainer= []; 
    historyContainer.innerHTML= "";
})





