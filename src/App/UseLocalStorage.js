import React from "react";

function useLocalStorage(itemName, initialValue) {
	//Estado de nuestro Custom Hook
	const [item, setItem] = React.useState(initialValue);
	//Estado de carga
	const [loading, setLoading] = React.useState(true);
	//Estado de error
	const [error, setError] = React.useState(false);

	//Efecto para el llamado de local storage
	React.useEffect(() => {
		setTimeout(() => {
			try {
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
					setItem(parsedItem);
				}

				setLoading(false);
			} catch (error) {
				setLoading(false);
				setError(true);
			}
		}, 2000);
	}, []);

	//Funcion actualiza estado y localStorage de los todos
	const saveItem = (newItem) => {
		//guarda el nuevo array en localstorage
		localStorage.setItem(itemName, JSON.stringify(newItem));
		//acutaliza el nuevo estado con el nuevo array
		setItem(newItem);
	};

	return { item, saveItem, loading, error };
}

export { useLocalStorage };
