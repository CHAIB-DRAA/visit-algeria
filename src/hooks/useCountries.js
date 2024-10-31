const AlgerianGeo = require('algerian-geo');

const formattedCountries = AlgerianGeo.getAllWilayas().map((wilaya) => ({
	value: wilaya.code, // Utilisation du code de la wilaya comme identifiant unique
	label: wilaya.name, // Nom de la wilaya
	latlng: [ parseFloat(wilaya.longitude),parseFloat(wilaya.latitude)], // Coordonnées géographiques (latitude et longitude)
	region: wilaya.ar_name, // Nom de la wilaya en arabe
}));

const useCountries = () => {
	// Fonction pour récupérer toutes les wilayas formatées
	const getAll = () => formattedCountries;

	// Fonction pour récupérer une wilaya par son code
	const getByValue = (value) => {
		if (!value) {
			throw new Error('Le code de la wilaya est requis');
		}
		return formattedCountries.find((wilaya) => wilaya.value === value);
	};

	return {
		getAll,
		getByValue,
	};
};

export default useCountries;
