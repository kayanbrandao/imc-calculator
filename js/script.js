const btnCalculate = document.querySelector(".btn-calculate");
const inputHeight = document.querySelector("#input-height");
const inputWeight = document.querySelector("#input-weight");
const result = document.querySelector(".result");

const inputWeightPattern = {
	mask: "000{,}00",
};

const inputHeightPattern = {
	mask: "0{,}00",
};

const inputWeightMasked = IMask(inputWeight, inputWeightPattern);
const inputHeightMasked = IMask(inputHeight, inputHeightPattern);

const checkFields = (weight, height) => {
	if (weight === "" || height === "") {
		alert("Preencha todos os campos!");
		return true;
	}
};

const calculateImc = (weight, height) => {
	let weightNumber = Number(weight.replace(",", "."));
	let heightNumber = Number(height.replace(",", "."));
	let imc = weightNumber / (heightNumber * heightNumber);
	imc = imc.toFixed(1).replace(".", ",");
	return imc;
};

btnCalculate.addEventListener("click", () => {
	let weight = inputWeight.value;
	let height = inputHeight.value;

	if (!checkFields(weight, height)) {
		let imc = calculateImc(weight, height);
		result.innerHTML = imc;
	}
});
