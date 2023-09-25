const $ = document
//section 1 
const input = $.querySelectorAll(".input")
// patterns
const EmailPattern = /([a-zA-z0-9._]+)@([a-zA-z0-9._]+).([a-zA-z0-9._]+)/
const numberPattern = /^\+\d{10}/
// total price
let plan____price = 0

//step 4 
//insert info from step 2 to step 4 
const step__four__plan = $.querySelector (".step-four__plan")
const step__four__plan__price = $.querySelector(".step-four__plan__price")
const step__fourplan = $.querySelector(".step-four-plan")
//insert info from step 3 to step 4
const step__four__doublecheck__addon__title = $.querySelector(".step-four__double-check__add-ons-template")
const step__four__doublecheck__addons = $.querySelector(".step-four__double-check__add-ons")
//total 
const step__four__plan__Total = $.querySelector(".step-four-plan__total")

//change
const step__four__plan__change = $.querySelector(".step-four__plan__change")
step__four__plan__change.addEventListener("click" , ()=> {
    stepTwo.classList.remove("hidden")
    stepTwoChange.classList.add("focus-sidebar")
    stepFour.classList.add("hidden")
    stepFourChange.classList.remove("focus-sidebar")
})


// sidebar - change steps
const stepOneChange = $.getElementById("step-one-change")
const stepTwoChange = $.getElementById("step-two-change")
const stepThreeChange = $.getElementById("step-three-change")
const stepFourChange = $.getElementById("step-four-change")

const StepOne = $.querySelector(".step-one")
const stepTwo = $.querySelector(".step-two")
const stepThree = $.querySelector(".step-three")
const stepFour = $.querySelector(".step-four")

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
    stepFive.classList.add("hidden")
    StepOne.classList.remove("hidden")
    stepOneChange.classList.add("focus-sidebar")
})

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
    stepFive.classList.add("hidden")
    stepTwo.classList.remove("hidden")
    stepTwoChange.classList.add("focus-sidebar")
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
    stepFive.classList.add("hidden")
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
    stepFive.classList.add("hidden")
    stepFour.classList.remove("hidden")
    stepFourChange.classList.add("focus-sidebar")
})

/* next and go back butto */
const button = $.querySelectorAll(".button")
const backButton = $.querySelectorAll(".back-button")

button.forEach( b=> {
    b.addEventListener("click" , ()=>{
        const buttonParent = b.parentElement.parentElement.parentElement
        buttonParent.classList.add("hidden")
        buttonParent.nextElementSibling.classList.remove("hidden")
    })

})
backButton.forEach( backb=> {
    backb.addEventListener("click" , ()=>{
        const backbuttonParent = backb.parentElement.parentElement.parentElement
        
        backbuttonParent.classList.add("hidden")
        backbuttonParent.previousElementSibling.classList.remove("hidden")
    })
})

// step 1 - Empty input alerts
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

//step 2 - checkbox toggle between yearly and monthly 
const checkbox = $.querySelector(".checkbox")
const stepTwoYearly  = $.querySelector(".step-two__yearly ")
const stepTwoMonthly  = $.querySelector(".step-two__monthly ")
const plan = $.querySelectorAll('.plan')
const zero = $.querySelectorAll(".zero")
const monthFree = $.querySelectorAll(".month-free")
const planPrice = $.querySelector(".plan__price")
const monthlyYearly = $.querySelectorAll(".monthly-yearly")
let yearOrMonth = "(Monthly)"
const addOntwo = $.querySelector(".add-on-two")
const addOnone = $.querySelector(".add-on-one")
const addOnthree = $.querySelector(".add-on-three")

checkbox.checked = "true"
checkbox.addEventListener("change" , ()=>{
    checkbox.toggleAttribute("checked")
    stepTwoYearly.classList.toggle("text-color")
    stepTwoMonthly.classList.toggle("text-color")
    if(stepTwoYearly.classList.contains("text-color")){
        yearOrMonth = "Monthly"
        monthlyYearly.forEach((e)=>{
            e.innerText = "mo"
        })
        addOnone.innerText = "+$1/mo"
        addOntwo.innerText = "+$2/mo"
        addOnthree.innerText = "+$/mo"
        step__four__plan__Total.innerText = "(per month)"
    } 
    if (stepTwoMonthly.classList.contains("text-color")) { 
        yearOrMonth = "yearly"
        monthlyYearly.forEach((e)=>{
            e.innerText = "yr"
        })
        addOnone.innerText = "+$10/yr"
        addOntwo.innerText = "+$20/yr"
        addOnthree.innerText = "+$20/yr"
        step__four__plan__Total.innerText = "(per year)"
    }
    monthFree.forEach (p => {
    p.classList.toggle("hidden")
    zero.forEach((z)=>{
        if(z.innerText) {
            z.innerText = ""
            
        } else {
            z.innerText = 0
        }
    })
    })
})

// step 2 --- pick plan 
const steps__options = $.querySelector(".steps__options")
plan.forEach((p)=>{
    let pricePlan = p.childNodes[3].childNodes[3].innerText
    let priceplantonumber = pricePlan.split("")
    let priceOfSelectedPrice = ""
    priceplantonumber.forEach ((n)=> {
        if (!isNaN(n)) {
            priceOfSelectedPrice += n
        }
    })

    //let hasExecuted = true
 p.addEventListener("click" , ()=>{
    // entering info to step 4 
    //step2 -> step4
    step__four__plan.textContent = p.children[1].firstElementChild.innerText
    step__four__plan__price.textContent = p.children[1].children[1].innerText
    step__fourplan.innerText = '"("+ yearOrMonth +")"'  // not working
  
    plan.forEach((otherPlan) => {
        otherPlan.style.backgroundColor = "white"
        otherPlan.style.border = "1px solid hsl(229, 24%, 87%)"
    })

    p.style.backgroundColor = "hsl(217, 100%, 97%)" 
    p.style.border = "1px solid hsl(213, 96%, 18%)"
 })
})

//step 3 - pick add-ons

const addOnsCheckbox = $.querySelectorAll(".add-ons-checkbox")
const addOnSection = $.querySelectorAll (".add-on")
let wholeaddonprice = 0
let priceOfSelectedaddon = 0

addOnSection.forEach((addon , index)=>{
    
    addon.addEventListener("click" , ()=>{
        
        addOnsCheckbox.forEach((checkBox , i)=>{
           
            addon.classList.toggle ("border-pick")
            
            if (index === i) { 
                if (!checkBox.checked) {
               checkBox.checked = true
            } else  {
                checkBox.checked = false
            }

            const addonTemplate = step__four__doublecheck__addon__title.content.cloneNode(true).firstElementChild
            if(checkBox.checked) {
                addonTemplate.firstElementChild.innerText = addon.children[1].firstElementChild.innerText
                addonTemplate.firstElementChild.nextElementSibling.innerText = addon.children[2].innerText
                console.log(addon.children[2].innerText)
                step__four__doublecheck__addons.appendChild(addonTemplate)
               } else {
                //remove addon from step 4 addon sections
               }
        }
        })
    })
   
})


//step 4 - confirm 
const stepfourconfirm = $.querySelector(".step-four_button")
const stepFive = $.querySelector(".step-five")

stepfourconfirm.addEventListener ("click" , ()=>{
    stepFive.classList.remove("hidden")
    stepFour.classList.add("hidden")
    stepFourChange.classList.remove("focus-sidebar")
})


const totalPrice = 



console.log(step__four__plan__price.innerText)
