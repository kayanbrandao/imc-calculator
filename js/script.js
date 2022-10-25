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

const convertImc = (weight, height) => {
	let weightNumber = Number(weight.replace(",", "."));
	let heightNumber = Number(height.replace(",", "."));
	let imc = weightNumber / (heightNumber * heightNumber);
	imc = calculateImc(imc);
	// imc = imc.toFixed(1).replace(".", ",");
	return imc;
};

const calculateImc = (imc) => {
	if (imc < 18.5)
		return `Seu IMC é ${imc
			.toFixed(1)
			.replace(".", ",")}. Você está abaixo do peso!`;

	if (imc >= 18.5 && imc <= 24.9)
		return `Seu IMC é ${imc
			.toFixed(1)
			.replace(".", ",")}. Você está no peso normal!`;

	if (imc >= 25 && imc <= 29.9)
		return `Seu IMC é ${imc
			.toFixed(1)
			.replace(".", ",")}. Você está com excesso de peso!`;

	if (imc >= 30 && imc <= 34.9)
		return `Seu IMC é ${imc
			.toFixed(1)
			.replace(".", ",")}. Você está com obesidade classe I !`;

	if (imc >= 35 && imc <= 39.9)
		return `Seu IMC é ${imc
			.toFixed(1)
			.replace(".", ",")}. Você está com obesidade classe II !`;

	if (imc >= 40)
		return `Seu IMC é ${imc
			.toFixed(1)
			.replace(".", ",")}. Você está com obesidade classe III !`;
};

btnCalculate.addEventListener("click", () => {
	let weight = inputWeight.value;
	let height = inputHeight.value;

	if (!checkFields(weight, height)) {
		let imc = convertImc(weight, height);
		result.innerHTML = imc;
	}
});
