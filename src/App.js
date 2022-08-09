import React, { useState } from 'react';

import AddingForm from './components/AddingForm';
import ShowResults from './components/ShowResults';

function App() {
	const [checked, setChecked] = useState(false);

	const changeCheck = () => {
		setChecked(!checked);
	};
	const fuelCost = 5;
	const costByDay = 100;
	const USER = {
		distanse: 0,
		year: 2,
		date_start: new Date(),
		date_end: new Date(),
		category: 0,
		city: '',
		petrol: 0,
		available: 2,
	};
	const [userData, setUserData] = useState(USER);
	const addUserData = (data) => {
		setUserData(data);
		changeCheck();
	};
	const datesBetween = () => {
		const diffInMs = userData.date_end - userData.date_start;
		const diffInDays = diffInMs / (1000 * 60 * 60 * 24) + 1;
		return diffInDays;
	};
	const numberOfDays = datesBetween();
	return checked === false ? (
		<AddingForm Change={addUserData} />
	) : (
		<ShowResults
			Change={changeCheck}
			fuelCost={fuelCost}
			dayCost={costByDay}
			numberOfDays={numberOfDays}
			userData={userData}
		/>
	);
}

export default App;
