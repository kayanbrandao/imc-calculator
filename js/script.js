const btnCalculate = document.querySelector(".btn-calculate");
const inputHeight = document.querySelector("#input-height");
const inputWeight = document.querySelector("#input-weight");
const result = document.querySelector(".result");

btnCalculate.addEventListener("click", () => {
	let weight = Number(inputWeight.value.replace(",", "."));
	let height = Number(inputHeight.value.replace(",", "."));
	let imc = weight / (height * height);
	imc = imc.toFixed(1).replace(".", ",");

	result.innerHTML = imc;
});

const inputWeightPattern = {
	mask: "000{,}00",
};

const inputHeightPattern = {
	mask: "0{,}00",
};

const inputWeightMasked = IMask(inputWeight, inputWeightPattern);
const inputHeightMasked = IMask(inputHeight, inputHeightPattern);
