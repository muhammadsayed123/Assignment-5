const historyData=[]

///////// Reusable functtion


//heart section functionality
const heart=1;
function heartFunction(e){
    const mainHeartNumber=parseInt(document.getElementById("heart-num").innerText)
    afterTap=heart+mainHeartNumber

    document.getElementById("heart-num").innerText=afterTap
    return afterTap
}


//clear button

document.getElementById("clear-btn").addEventListener("click",function(){
    historyData.length=0;
    renderHistory();
})




//heart section functionality


document.getElementById("heart-btn-1").addEventListener("click",function(){
    heartFunction("heart-btn-1")
})
document.getElementById("heart-btn-2").addEventListener("click",function(){
    heartFunction("heart-btn-2")
})
document.getElementById("heart-btn-3").addEventListener("click",function(){
    heartFunction("heart-btn-3")
})
document.getElementById("heart-btn-5").addEventListener("click",function(){
    heartFunction("heart-btn-5")
})
document.getElementById("heart-btn-6").addEventListener("click",function(){
    heartFunction("heart-btn-6")
})
document.getElementById("heart-btn-7").addEventListener("click",function(){
    heartFunction("heart-btn-7")
})
document.getElementById("heart-btn-8").addEventListener("click",function(){
    heartFunction("heart-btn-8")
})
document.getElementById("heart-btn-9").addEventListener("click",function(){
    heartFunction("heart-btn-9")
})
document.getElementById("heart-btn-10").addEventListener("click",function(){
    heartFunction("heart-btn-10")
})

//coin section functionality

function renderHistory(){

    const historyContainer=document.getElementById("history-container")
    historyContainer.innerHTML = '';

    for(const data of historyData){
        const div= document.createElement("div")
        div.innerHTML=`
        <div class=" bg-gray-100 w-[300px] h-[100px] rounded-lg p-4 flex justify-between">
                <div>
                    <h1 class="font-bold">${data.name}</h1>
                    <p class="text-gray-500">${data.number}</p>
                </div>
                <p class="text-gray-500 flex items-center">${data.date}</p>
        </div><br>
        `
        historyContainer.appendChild(div)
    }
}

document.getElementById("call-btn-1").addEventListener("click",function(){
    const mainCoinNumber=parseInt(document.getElementById("coin-num").innerText)
    const cartText= document.getElementById("cart-1-text").innerText
    const cartNum= parseInt(document.getElementById("cart-1-num").innerText)
    const afterTapCall=mainCoinNumber-20
    alertMsg="Calling "+cartText+" "+cartNum

    if(mainCoinNumber<20){
        alert("You have not enough coin.")
        return;
    }
    document.getElementById("coin-num").innerText=afterTapCall
    alert(alertMsg)
    const data={
        name:"National Emergency Number",
        number:999,
        date:new Date().toLocaleTimeString()
    }
    historyData.push(data)
    renderHistory()
    return afterTapCall;


})

document.getElementById("call-btn-2").addEventListener("click",function(){
    const mainCoinNumber=parseInt(document.getElementById("coin-num").innerText)
    const cartText= document.getElementById("cart-2-text").innerText
    const cartNum= parseInt(document.getElementById("cart-2-num").innerText)
    const afterTapCall=mainCoinNumber-20
    alertMsg="Calling "+cartText+" "+cartNum

    if(mainCoinNumber<20){
        alert("You have not enough coin.")
        return;
    }
    document.getElementById("coin-num").innerText=afterTapCall
    alert(alertMsg)
    const data={
        name:"Police Helpline Number",
        number:999,
        date:new Date().toLocaleTimeString()
    }
    historyData.push(data)
    renderHistory()
    return afterTapCall;

})

document.getElementById("call-btn-3").addEventListener("click",function(){
    const mainCoinNumber=parseInt(document.getElementById("coin-num").innerText)
    const cartText= document.getElementById("cart-3-text").innerText
    const cartNum= parseInt(document.getElementById("cart-3-num").innerText)
    const afterTapCall=mainCoinNumber-20
    alertMsg="Calling "+cartText+" "+cartNum

    if(mainCoinNumber<20){
        alert("You have not enough coin.")
        return;
    }
    document.getElementById("coin-num").innerText=afterTapCall
    alert(alertMsg)
    const data={
        name:"Fire Service Number",
        number:999,
        date:new Date().toLocaleTimeString()
    }
    historyData.push(data)
    renderHistory()
    return afterTapCall;

})

document.getElementById("call-btn-5").addEventListener("click",function(){
    const mainCoinNumber=parseInt(document.getElementById("coin-num").innerText)
    const cartText= document.getElementById("cart-5-text").innerText
    const cartNum= parseInt(document.getElementById("cart-5-num").innerText)
    const afterTapCall=mainCoinNumber-20
    alertMsg="Calling "+cartText+" "+cartNum

    if(mainCoinNumber<20){
        alert("You have not enough coin.")
        return;
    }
    document.getElementById("coin-num").innerText=afterTapCall
    alert(alertMsg)
    const data={
        name:"Ambulance Service",
        number:1994-999999,
        date:new Date().toLocaleTimeString()
    }
    historyData.push(data)
    renderHistory()
    return afterTapCall;

})

document.getElementById("call-btn-6").addEventListener("click",function(){
    const mainCoinNumber=parseInt(document.getElementById("coin-num").innerText)
    const cartText= document.getElementById("cart-6-text").innerText
    const cartNum= parseInt(document.getElementById("cart-6-num").innerText)
    const afterTapCall=mainCoinNumber-20
    alertMsg="Calling "+cartText+" "+cartNum

    if(mainCoinNumber<20){
        alert("You have not enough coin.")
        return;
    }
    document.getElementById("coin-num").innerText=afterTapCall
    alert(alertMsg)
    const data={
        name:"Women & Child Helpline",
        number:109,
        date:new Date().toLocaleTimeString()
    }
    historyData.push(data)
    renderHistory()
    return afterTapCall;

})

document.getElementById("call-btn-7").addEventListener("click",function(){
    const mainCoinNumber=parseInt(document.getElementById("coin-num").innerText)
    const cartText= document.getElementById("cart-7-text").innerText
    const cartNum= parseInt(document.getElementById("cart-7-num").innerText)
    const afterTapCall=mainCoinNumber-20
    alertMsg="Calling "+cartText+" "+cartNum

    if(mainCoinNumber<20){
        alert("You have not enough coin.")
        return;
    }
    document.getElementById("coin-num").innerText=afterTapCall
    alert(alertMsg)
    const data={
        name:"Anti-Corruption Helpline",
        number:106,
        date:new Date().toLocaleTimeString()
    }
    historyData.push(data)
    renderHistory()
    return afterTapCall;

})

document.getElementById("call-btn-8").addEventListener("click",function(){
    const mainCoinNumber=parseInt(document.getElementById("coin-num").innerText)
    const cartText= document.getElementById("cart-8-text").innerText
    const cartNum= parseInt(document.getElementById("cart-8-num").innerText)
    const afterTapCall=mainCoinNumber-20
    alertMsg="Calling "+cartText+" "+cartNum

    if(mainCoinNumber<20){
        alert("You have not enough coin.")
        return;
    }
    document.getElementById("coin-num").innerText=afterTapCall
    alert(alertMsg)
    const data={
        name:"Electricity Helpline",
        number:16216,
        date:new Date().toLocaleTimeString()
    }
    historyData.push(data)
    renderHistory()
    return afterTapCall;

})

document.getElementById("call-btn-9").addEventListener("click",function(){
    const mainCoinNumber=parseInt(document.getElementById("coin-num").innerText)
    const cartText= document.getElementById("cart-9-text").innerText
    const cartNum= parseInt(document.getElementById("cart-9-num").innerText)
    const afterTapCall=mainCoinNumber-20
    alertMsg="Calling "+cartText+" "+cartNum

    if(mainCoinNumber<20){
        alert("You have not enough coin.")
        return;
    }
    document.getElementById("coin-num").innerText=afterTapCall
    alert(alertMsg)
    const data={
        name:"Brac Helpline",
        number:16445,
        date:new Date().toLocaleTimeString()
    }
    historyData.push(data)
    renderHistory()
    return afterTapCall;

})

document.getElementById("call-btn-10").addEventListener("click",function(){
    const mainCoinNumber=parseInt(document.getElementById("coin-num").innerText)
    const cartText= document.getElementById("cart-10-text").innerText
    const cartNum= parseInt(document.getElementById("cart-10-num").innerText)
    const afterTapCall=mainCoinNumber-20
    alertMsg="Calling "+cartText+" "+cartNum

    if(mainCoinNumber<20){
        alert("You have not enough coin.")
        return;
    }
    document.getElementById("coin-num").innerText=afterTapCall
    alert(alertMsg)
    const data={
        name:"Bangladesh Railway Helpline",
        number:163,
        date:new Date().toLocaleTimeString()
    }
    historyData.push(data)
    renderHistory()
    return afterTapCall;

})


// COPY button functionality

const cpyNum=1

function cpyFunction(c){
    const mainCpyNum=parseInt(document.getElementById("main-copy-num").innerText)
    afterTapCpyNum=cpyNum+mainCpyNum

    document.getElementById("main-copy-num").innerText=afterTapCpyNum
    return afterTapCpyNum
}

document.getElementById("cpy-btn-1").addEventListener("click",function(){
    cpyFunction("cpy-btn-1")
})
document.getElementById("cpy-btn-2").addEventListener("click",function(){
    cpyFunction("cpy-btn-2")
})
document.getElementById("cpy-btn-3").addEventListener("click",function(){
    cpyFunction("cpy-btn-3")
})
document.getElementById("cpy-btn-5").addEventListener("click",function(){
    cpyFunction("cpy-btn-5")
})
document.getElementById("cpy-btn-6").addEventListener("click",function(){
    cpyFunction("cpy-btn-6")
})
document.getElementById("cpy-btn-7").addEventListener("click",function(){
    cpyFunction("cpy-btn-7")
})
document.getElementById("cpy-btn-8").addEventListener("click",function(){
    cpyFunction("cpy-btn-8")
})
document.getElementById("cpy-btn-9").addEventListener("click",function(){
    cpyFunction("cpy-btn-9")
})
document.getElementById("cpy-btn-10").addEventListener("click",function(){
    cpyFunction("cpy-btn-10")
})










