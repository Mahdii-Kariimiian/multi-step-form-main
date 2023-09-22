const $ = document
//section 1 
const input = $.querySelectorAll(".input")
// patterns
const EmailPattern = /([a-zA-z0-9._]+)@([a-zA-z0-9._]+).([a-zA-z0-9._]+)/
const numberPattern = /^\+\d{10}/

let totalPrice = 0


input.forEach((item , index)=> {
    //create empty alert
    const emptyAlert = $.createElement("P")
    emptyAlert.innerText = "This field is required"
    emptyAlert.classList.add("alert")
    //for empty values
    item.addEventListener ("keyup" , ()=> {
        const existingAlert = item.previousElementSibling;
        if (!item.value) {
                item.insertAdjacentElement("beforebegin" , emptyAlert)
        } else if (item.value) {
            if (existingAlert && existingAlert.classList.contains("alert")) {
                existingAlert.remove();
            }
        } 
    // for wrong values
    if( index == 1 ){
        let EmailInput = input[index].value
        if (!EmailPattern.test(EmailInput) ){
            item.style.border = ("2px solid hsl(354, 84%, 57%")
        } else {
            item.style.border = ("1px solid hsl(229, 24%, 87%)")
        }
    } else if ( index == 2){
        let numberInput = input[index].value
        if (!numberPattern.test(numberInput) ){
            item.style.border = ("2px solid hsl(354, 84%, 57%")
        } else {
            item.style.border = ("1px solid hsl(229, 24%, 87%)")
        }
    }
    })
})


// change steps 

const stepOneChange = $.getElementById("step-one-change")
const stepTwoChange = $.getElementById("step-two-change")
const stepThreeChange = $.getElementById("step-three-change")
const stepFourChange = $.getElementById("step-four-change")

const StepOne = $.querySelector(".step-one")
const stepTwo = $.querySelector(".step-two")
const stepThree = $.querySelector(".step-three")
const stepFour = $.querySelector(".step-four")

stepTwoChange.addEventListener ( "click" , ()=>{
    if(!StepOne.classList.contains("hidden")) {
        StepOne.classList.add("hidden")
        stepOneChange.classList.remove("focus-sidebar")
    } else if (!stepThree.classList.contains("hidden")){
        stepThree.classList.add("hidden")
        stepThreeChange.classList.remove("focus-sidebar")
    } else if (!stepFour.classList.contains("hidden")) {
        stepFour.classList.add("hidden")
        stepFourChange.classList.remove("focus-sidebar")
    }
    stepTwo.classList.remove("hidden")
    stepTwoChange.classList.add("focus-sidebar")
})

stepOneChange.addEventListener ( "click" , ()=>{
    if(!stepTwo.classList.contains("hidden")) {
        stepTwo.classList.add("hidden")
        stepTwoChange.classList.remove("focus-sidebar")
    } else if (!stepThree.classList.contains("hidden")){
        stepThree.classList.add("hidden")
        stepThreeChange.classList.remove("focus-sidebar")
    } else if (!stepFour.classList.contains("hidden")) {
        stepFour.classList.add("hidden")
        stepFourChange.classList.remove("focus-sidebar")
    }
    StepOne.classList.remove("hidden")
    stepOneChange.classList.add("focus-sidebar")
})

stepThreeChange.addEventListener ( "click" , ()=>{
    if(!stepTwo.classList.contains("hidden")) {
        stepTwo.classList.add("hidden")
        stepTwoChange.classList.remove("focus-sidebar")
    } else if (!StepOne.classList.contains("hidden")){
        StepOne.classList.add("hidden")
        stepOneChange.classList.remove("focus-sidebar")
    } else if (!stepFour.classList.contains("hidden")) {
        stepFour.classList.add("hidden")
        stepFourChange.classList.remove("focus-sidebar")
    }
    stepThree.classList.remove("hidden")
    stepThreeChange.classList.add("focus-sidebar")
})

stepFourChange.addEventListener ( "click" , ()=>{
    if(!stepTwo.classList.contains("hidden")) {
        stepTwo.classList.add("hidden")
        stepTwoChange.classList.remove("focus-sidebar")
    } else if (!StepOne.classList.contains("hidden")){
        StepOne.classList.add("hidden")
        stepOneChange.classList.remove("focus-sidebar")
    } else if (!stepThree.classList.contains("hidden")) {
        stepThree.classList.add("hidden")
        stepThreeChange.classList.remove("focus-sidebar")
    }
    stepFour.classList.remove("hidden")
    stepFourChange.classList.add("focus-sidebar")
})

/* checkbox */ 

const checkbox = $.querySelector(".checkbox")
const stepTwoYearly  = $.querySelector(".step-two__yearly ")
const stepTwoMonthly  = $.querySelector(".step-two__monthly ")
const plan = $.querySelectorAll('.plan')
const zero = $.querySelectorAll(".zero")

const monthFree = $.querySelectorAll(".month-free")

checkbox.addEventListener("change" , ()=>{
    stepTwoYearly.classList.toggle("text-color")
    stepTwoMonthly.classList.toggle("text-color")
    monthFree.forEach (p => {
    p.classList.toggle("hidden")
    zero.forEach((z)=>{
        z.classList.toggle("hidden")
    })
    })
})

/* pick plan */

plan.forEach((p)=>{
    let finalprice =""
    let pricePlan = p.childNodes[3].childNodes[3].innerText
    let priceplantonumber = pricePlan.split("")
    priceplantonumber.forEach ((n)=> {
        if (!isNaN(n)) {
            finalprice += n
        }
    })
    p.addEventListener ("click" , ()=>{
       totalPrice = finalprice
    })
})


