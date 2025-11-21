// 1. Selectores 
const form = document.querySelector("#coin-form");
const coin = document.querySelector("#coin");
const crypto = document.querySelector("#crypto");
const amount = document.querySelector("#amount");
const coinInfo = document.querySelector("#coin-info");

// 2. Eventos 
form.addEventListener ('submit', async e => {
e.preventDefault();
const coinSelected = [...coin.children].find(option => option.selected).value;
const cryptoSelected = [...crypto.children].find(option => option.selected).value;
const amountValue = amount.value;
console.log (coinSelected, cryptoSelected, amountValue)
try {
    const coiniNFO.innerHTML = `
    <div class="loader"></div>
    `;
    const response = await(await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoSelected}&tsyms=${coinSelected}`)).json();
    const price= response.DISPLAY[cryptoSelected][coinSelected].PRICE;
const priceHigh= response.DISPLAY[cryptoSelected][coinSelected].HIGH24HOUR;
const priceLow= response.DISPLAY[cryptoSelected][coinSelected].LOW24HOUR;
const variation= response.DISPLAY [cryptoSelected][coinSelected].CHANGEPCT24HOUR;
console.log (coinInfo)
    
// 3. Funcion de cotizacion 
if (amounValue ≠ '') {
    const result= Number(amountValue) / response.RAW[cryptoSelect][coinSelected].PRICE;
    coinInfo.innerHTML = `
         <p class="info"> El precio es: <span class="price">${price}</span></p>
                <p class="info"> El precio más alto es: <span class="price">${priceHigh}</span></p>
                <p class="info"> El precio más bajo es: <span class="price">${priceLow}</span></p>
                <p class="info"> Variación 24 horas: <span class="price">${variation}%</span></p>
                <p class="info"> Puedes comprar: <span class="price">${result.toFixed(4)} ${cryptoSelected} </span></p>
                `;
} else {
    coinInfo.innerHTML = `
         <p class="info"> El precio es: <span class="price">${price}</span></p>
                <p class="info"> El precio más alto es: <span class="price">${priceHigh}</span></p>
                <p class="info"> El precio más bajo es: <span class="price">${priceLow}</span></p>
                <p class="info"> Variación 24 horas: <span class="price">${variation}%</span></p>
                `;
    {

 } catch (error){
 }
});
