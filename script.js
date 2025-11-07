///////// Reusable functtion


//heart section functionality
function heartFunction(e){
    const mainHeartNumber=parseInt(document.getElementById("heart-num").innerText)
    afterTap=heart+mainHeartNumber

    document.getElementById("heart-num").innerText=afterTap
    return afterTap
}


//coin section functionality




//heart section functionality
const heart=1;

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
    return afterTapCall;

})
document.getElementById("call-btn-2").addEventListener("click",function(){
    const mainCoinNumber=parseInt(document.getElementById("coin-num").innerText)
    const afterTapCall=mainCoinNumber-20



    document.getElementById("coin-num").innerText=afterTapCall
    return afterTapCall;
})
document.getElementById("call-btn-3").addEventListener("click",function(){
    const mainCoinNumber=parseInt(document.getElementById("coin-num").innerText)
    const afterTapCall=mainCoinNumber-20

    document.getElementById("coin-num").innerText=afterTapCall
    return afterTapCall;
})





