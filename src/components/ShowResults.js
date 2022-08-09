import React, { useState } from 'react';

import './ShowResults.css';

const ShowResults = (props) => {
	const petrolCost =
		(props.userData.distanse / 100) * props.userData.petrol * props.fuelCost;
	const costAllDays = props.numberOfDays * props.dayCost;

	const costYears = (petrolCost + costAllDays) * (props.userData.year - 1);
	const costAvialable =
		(petrolCost + costAllDays) * (props.userData.available - 1);
	const costCategory =
		(petrolCost + costAllDays + costYears + costAvialable) *
		(props.userData.category - 1);
	const costNet =
		petrolCost + costAllDays + costYears + costAvialable + costCategory;
	const costGross = costNet * 1.23;
	return (
		<div className='box__answers'>
			<h1>Łączny koszt wynajmu: {costGross.toFixed(2)}</h1>
			<ul>
				<li>Koszt paliwa: {petrolCost.toFixed(2)} </li>
				<li>
					Koszt spowodowany liczbą dni wypożyczenia: {costAllDays.toFixed(2)}
				</li>
				<li>
					Koszt spowodowany czasem posiadania prawa jazdy: {costYears.toFixed(2)}
				</li>
				<li>Koszt liczbą modeli samochodu: {costAvialable.toFixed(2)}</li>
				<li>Koszt spowodowany marką samochodu: {costCategory.toFixed(2)}</li>
				<li>Koszt netto: {costNet.toFixed(2)} </li>
				<li>Koszt brutto: {costGross.toFixed(2)} </li>
			</ul>
			<button onClick={props.Change} className='submit'>
				Wróć
			</button>
		</div>
	);
};

export default ShowResults;
