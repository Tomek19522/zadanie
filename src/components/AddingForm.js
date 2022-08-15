import React, { useState } from 'react';
import './AddingForm.css';

const AddingForm = (props) => {
	const [enteredDistance, setEnteredDistance] = useState('');
	const [enteredYear, setEnteredYear] = useState('');
	const [enteredDateStart, setEnteredDateStart] = useState('');
	const [enteredDateStop, setEnteredDateStop] = useState('');
	const [enteredCategory, setEnteredCategory] = useState(1);
	const [enteredCity, setEnteredCity] = useState('');
	const [enteredPetrol, setEnteredPetrol] = useState('');
	const [enteredAvailable, setEnteredAvailable] = useState('');

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
		const setMaxYear = document.querySelector('.chooseYear');
		if (parseInt(event.target.value) === 2) {
			setMaxYear.setAttribute('max', new Date().getFullYear() - 5);
		} else {
			setMaxYear.setAttribute('max', new Date().getFullYear());
		}
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
			setEnteredAvailable(0);
		}
	};
	const submitHandler = (event) => {
		event.preventDefault();
		let error = 0;
		const elementDistance = document.querySelector('.chooseDistance');
		const pDistance = elementDistance.nextElementSibling;
		const elementYear = document.querySelector('.chooseYear');
		const pYear = elementYear.nextElementSibling;
		const elementCity = document.querySelector('.chooseCity');
		const pCity = elementCity.nextElementSibling;
		const elementDateStart = document.querySelector('.chooseDateStart');
		const pDateStart = elementDateStart.nextElementSibling;
		const elementDateStop = document.querySelector('.chooseDateStop');
		const pDateStop = elementDateStop.nextElementSibling;
		const elementPetrol = document.querySelector('.choosePetrol');
		const pPetrol = elementPetrol.nextElementSibling;
		const elementAvialable = document.querySelector('.chooseAvialable');
		const pAvialable = elementAvialable.nextElementSibling;
		if (enteredDistance.length === 0) {
			elementDistance.classList.add('error');
			pDistance.classList.add('show-paras');
			error++;
		} else {
			elementDistance.classList.remove('error');
			pDistance.classList.remove('show-paras');
		}
		if (enteredYear !== 1 && enteredYear !== 1.2) {
			elementYear.classList.add('error');
			pYear.classList.add('show-paras');
			error++;
		} else {
			elementYear.classList.remove('error');
			pYear.classList.remove('show-paras');
		}
		if (enteredDateStart.length === 0) {
			elementDateStart.classList.add('error');
			pDateStart.classList.add('show-paras');
			error++;
		} else {
			elementDateStart.classList.remove('error');
			pDateStart.classList.remove('show-paras');
		}
		if (enteredDateStop.length === 0) {
			elementDateStop.classList.add('error');
			pDateStop.classList.add('show-paras');
			error++;
		} else {
			elementDateStop.classList.remove('error');
			pDateStop.classList.remove('show-paras');
		}
		if (enteredCity.length === 0) {
			elementCity.classList.add('error');
			pCity.classList.add('show-paras');
			error++;
		} else {
			elementCity.classList.remove('error');
			pCity.classList.remove('show-paras');
		}
		if (enteredPetrol.length === 0) {
			elementPetrol.classList.add('error');
			pPetrol.classList.add('show-paras');
			error++;
		} else {
			elementPetrol.classList.remove('error');
			pPetrol.classList.remove('show-paras');
		}
		if (enteredAvailable !== 1 && enteredAvailable !== 1.15) {
			elementAvialable.classList.add('error');
			pAvialable.classList.add('show-paras');
			error++;
		} else {
			elementAvialable.classList.remove('error');
			pAvialable.classList.remove('show-paras');
		}
		if (error === 0) {
			if (new Date(enteredDateStop) - new Date(enteredDateStart) < 0) {
				alert('Data oddania nie może być przed datą wypożyczenia');
			} else {
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
			}
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='box__controls'>
				<div className='box__control'>
					<label>Szacunkowa liczba kilometrów do przejechania</label>
					<input
						type='number'
						onChange={distanceChangeHandler}
						step='0.1'
						className='chooseDistance'
					/>
					<p>Wpisz poprawny dystans</p>
				</div>
				<div className='box__control'>
					<label>Rok wydania prawa jazdy</label>
					<input
						type='number'
						max={new Date().getFullYear()}
						min={0}
						onChange={yearChangeHandler}
						step='1'
						className='chooseYear'
					/>
					<p>Wpisz poprawny rok</p>
				</div>
				<div className='box__control'>
					<label>Data wypożycznia samochodu</label>
					<input
						type='date'
						onChange={dateStartChangeHandler}
						className='chooseDateStart'
					/>
					<p>Wybierz date</p>
				</div>
				<div className='box__control'>
					<label>Data oddania samochodu</label>
					<input
						type='date'
						onChange={dateStopChangeHandler}
						className='chooseDateStop'
					/>
					<p>Wybierz date</p>
				</div>
				<div className='box__control'>
					<label>Kategoria cenowa samochodu</label>
					<select onChange={categoryChangeHandler} className='chooseCategory'>
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
					<input
						type='text'
						onChange={cityChangeHandler}
						className='chooseCity'
					/>
					<p>Wpisz poprawne miasto</p>
				</div>
				<div className='box__control'>
					<label>Spalanie samochodu</label>
					<input
						type='number'
						min={1}
						onChange={petrolChangeHandler}
						className='choosePetrol'
					/>
					<p>Wpisz poprawne spalanie</p>
				</div>
				<div className='box__control'>
					<label>Liczba dostępnych samochodów</label>
					<input
						type='number'
						min={1}
						onChange={availableChangeHandler}
						className='chooseAvialable'
					/>
					<p>Wpisz poprawną liczbę samochodów</p>
				</div>
				<button type='submit' className='submit'>
					Zatwierdź
				</button>
			</div>
		</form>
	);
};

export default AddingForm;
