const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const eur = document.querySelector("#eur")

const convert = (elem, target, target2) => {
    fetch('data.json')
        .then(response => response.json())
        .then(response => {
            if (elem === som) {
                target.value = (elem.value / response.usd).toFixed(2);
                target2.value = (elem.value / response.eur).toFixed(2);
            } else if (elem === usd) {
                target.value = (elem.value * response.usd).toFixed(2);
                target2.value = ((elem.value * response.usd) / response.eur).toFixed(2);
            } else if (elem === eur) {
                target.value = (elem.value * response.eur).toFixed(2);
                target2.value = (elem.value * (response.eur / response.usd)).toFixed(2);
            }
            elem.value === "" ? (target.value = "") && (target2.value = "") : null;
    })};

convert(som, usd)
convert(usd, som)
convert(som, eur)
convert(eur, som)