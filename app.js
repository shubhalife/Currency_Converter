const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

  const dropdowns =document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");

  for(let select of dropdowns){
  for(code in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = code;
    newOption.value= code;
    if(select.name==="from" && code==="USD"){
        newOption.selected="selected"
    }else if(select.name==="to" && code==="INR"){
        newOption.selected="selected"
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt)=>{
    updateFlag(evt.target);
});
}



const updateFlag =(element)=>{
    let currCode = element.value;
    let countryCode =countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
   let img = element.parentElement.querySelector("img");
   img.src = newSrc;
    console.log(element);


};

btn.addEventListener("click", async(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal =amount.value;
    if(amtVal === "" || amtVal < 1){
       amtVal =1 ; 
       amount.value=1;
    }
    const url =`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.valuetoLowerCase()}.json`
    let response = await fetch(url);
    let date = await response.json();
    let rate = data[toCurr.value.toLowerCase()];

});
