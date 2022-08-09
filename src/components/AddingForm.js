import React, { useState } from 'react';
import './AddingForm.css';

const AddingForm = (props) => {
	const [enteredDistance, setEnteredDistance] = useState(0);
	const [enteredYear, setEnteredYear] = useState(0);
	const [enteredDateStart, setEnteredDateStart] = useState(new Date());
	const [enteredDateStop, setEnteredDateStop] = useState(new Date());
	const [enteredCategory, setEnteredCategory] = useState(1);
	const [enteredCity, setEnteredCity] = useState('Warszawa');
	const [enteredPetrol, setEnteredPetrol] = useState(0);
	const [enteredAvailable, setEnteredAvailable] = useState(0);

	const distanceChangeHandler = (event) => {
		setEnteredDistance(event.target.value);
	};
	const yearChangeHandler = (event) => {
		const element = document.querySelector('.set_disabled');
		if (new Date().getFullYear() - event.target.value < 5) {
			element.setAttribute('disabled', '');
		} else {
			element.removeAttribute('disabled');
		}
		console.log(element);
		if (event.target.value.length > 0) {
			new Date().getFullYear() - event.target.value < 3
				? setEnteredYear(1.2)
				: setEnteredYear(1);
		} else {
			setEnteredYear(0);
		}
	};
	const dateStartChangeHandler = (event) => {
		setEnteredDateStart(event.target.value);
	};
	const dateStopChangeHandler = (event) => {
		setEnteredDateStop(event.target.value);
	};
	const categoryChangeHandler = (event) => {
		setEnteredCategory(event.target.value);
	};
	const cityChangeHandler = (event) => {
		setEnteredCity(event.target.value);
	};
	const petrolChangeHandler = (event) => {
		setEnteredPetrol(event.target.value);
	};
	const availableChangeHandler = (event) => {
		if (event.target.value.length > 0) {
			event.target.value < 3
				? setEnteredAvailable(1.15)
				: setEnteredAvailable(1);
		} else {
			setEnteredYear(0);
		}
	};
	const submitHandler = (event) => {
		event.preventDefault();
		if (new Date(enteredDateStop) - new Date(enteredDateStart) < 0) {
			alert('Podaj poprawne daty');
		} else if (
			enteredDistance !== '' &&
			(enteredYear === 1.2 || enteredYear === 1) &&
			(enteredAvailable === 1.15 || enteredAvailable === 1) &&
			enteredPetrol !== ''
		) {
			const newUserData = {
				distanse: enteredDistance,
				year: enteredYear,
				date_start: new Date(enteredDateStart),
				date_end: new Date(enteredDateStop),
				category: enteredCategory,
				city: enteredCity,
				petrol: enteredPetrol,
				available: enteredAvailable,
			};
			props.Change(newUserData);
		} else {
			alert('Uzupełnij wszystkie pola');
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='box__controls'>
				<div className='box__control'>
					<label>Szacunkowa liczba kilometrów do przejechania</label>
					<input type='number' onChange={distanceChangeHandler} step='0.1' />
				</div>
				<div className='box__control'>
					<label>Rok wydania prawa jazdy</label>
					<input
						type='number'
						max={new Date().getFullYear()}
						onChange={yearChangeHandler}
						step='1'
					/>
				</div>
				<div className='box__control'>
					<label>Data wypożycznia samochodu</label>
					<input type='date' onChange={dateStartChangeHandler} />
				</div>
				<div className='box__control'>
					<label>Data oddania samochodu</label>
					<input type='date' onChange={dateStopChangeHandler} />
				</div>
				<div className='box__control'>
					<label>Kategoria cenowa samochodu</label>
					<select onChange={categoryChangeHandler}>
						<option value='1'>Basic</option>
						<option value='1.3'>Standard</option>
						<option value='1.6'>Medium</option>
						<option value='2' className='set_disabled' disabled>
							Premium
						</option>
					</select>
				</div>
				<div className='box__control'>
					<label>Z jakiego miasta wypożyczasz</label>
					<input type='text' onChange={cityChangeHandler} />
				</div>
				<div className='box__control'>
					<label>Spalanie samochodu</label>
					<input type='number' min={1} onChange={petrolChangeHandler} />
				</div>
				<div className='box__control'>
					<label>Liczba dostępnych samochodów</label>
					<input type='number' min={1} onChange={availableChangeHandler} />
				</div>
				<button type='submit' className='submit'>
					Zatwierdź
				</button>
			</div>
		</form>
	);
};

export default AddingForm;
