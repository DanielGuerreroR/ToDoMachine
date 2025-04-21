import React from "react";

function useLocalStorage(itemName, initialValue) {
	//Variable para guardar elmentos de local storage
	const localStorageItem = localStorage.getItem(itemName);
	//Revisar contenido en localStorage
	let parsedItem; //variable de guardar todos

	if (!localStorageItem) {
		//Si no hay nada en localStorage/no existe
		localStorage.setItem(itemName, JSON.stringify(initialValue));
		parsedItem = initialValue;
	} else {
		//Si tenemos contenido
		//Convertir local storage en JS
		parsedItem = JSON.parse(localStorageItem);
	}

	//Estado de nuestro Custom Hook
	const [item, setItem] = React.useState(parsedItem);

	//Funcion actualiza estado y localStorage de los todos
	const saveItem = (newItem) => {
		//guarda el nuevo array en localstorage
		localStorage.setItem(itemName, JSON.stringify(newItem));
		//acutaliza el nuevo estado con el nuevo array
		setItem(newItem);
	};

	return [item, saveItem];
}

export { useLocalStorage };
