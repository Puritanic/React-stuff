const GoogleMapsAPI = 'https://maps.googleapis.com/maps/api';

const getAddressFromCoords = (lat, lng) => {
	const url = `${GoogleMapsAPI}/geocode/json?latlng=${lat},${lng}`;

	return fetch(url)
		.then(res => res.json())
		.then(json => {
			console.log(json);
			return json.results[0].formatted_address;
		})
		.catch(err => console.log(err));
};

export default getAddressFromCoords;
