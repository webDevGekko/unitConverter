"use strict"

let inputEl = document.getElementById("input-el")
console.log(inputEl.value)
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", ()=>{
length()
volume()
mass()
inputEl.value = ""

})

const length = ()=>{
    let convertedLengthToFeet = inputEl.value / 3.281
    let convertedLengthToMeter = inputEl.value * 3.281
lengthEl.innerHTML = `${inputEl.value} meters = ${convertedLengthToFeet.toFixed(3)} feet | ${inputEl.value} feet = ${convertedLengthToMeter.toFixed(3)} meters `

}

const volume = ()=>{
    let convertedLengthToLiters = inputEl.value / 0.264
    let convertedLengthToGallons = inputEl.value * 0.264
    volumeEl.innerHTML = `${inputEl.value} liters = ${convertedLengthToGallons.toFixed(3)} gallons | ${inputEl.value} gallons = ${convertedLengthToLiters.toFixed(3)} liters `
}

const mass = ()=>{
    let convertedLengthToKilograms = inputEl.value / 2.204
    let convertedLengthToPounds = inputEl.value * 2.204
    massEl.innerHTML = `${inputEl.value} kilo = ${convertedLengthToPounds.toFixed(3)} pounds | ${inputEl.value} pounds = ${convertedLengthToKilograms.toFixed(3)} kilo `
}   

/*
* TODO: Darkmode Toggle

*/
let darkmode = document.getElementById("darkmode")
let converterOutput = document.getElementById("Converter-Output")
let cards = document.getElementsByTagName("article")
let headings = document.getElementsByTagName("h2")
let paragraph = document.getElementsByTagName("p")

darkmode.addEventListener("click", ()=>{
    converterOutput.style.backgroundColor = '#1F2937'
    cards[0].style.backgroundColor = '#273549'
    cards[1].style.backgroundColor = '#273549'
    cards[2].style.backgroundColor = '#273549'
    headings[0].style.color = '#CCC1FF'
    headings[1].style.color = '#CCC1FF'
    headings[2].style.color = '#CCC1FF'
    paragraph[0].style.color = '#FFFFFF'
    paragraph[1].style.color = '#FFFFFF'
    paragraph[2].style.color = '#FFFFFF'    
})