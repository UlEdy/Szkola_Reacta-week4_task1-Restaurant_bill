import { useState } from "react";
import './styles_Form.css'

const Form = () => {
	const [price, setPrice] = useState(0);
	const [tip, setTip] = useState(0);
	const [sum, setSum] = useState(0);
	const [showMore, setShowMore] = useState(true);

	const handleChangePrice = event => setPrice(event.target.value);
	const handleChangeTip = event => setTip(event.target.value);
	const handleSubmit = event => {event.preventDefault()};

	const clickMore = () => setShowMore((prevShow) => !prevShow);

	const grossPrice = () => {
		setSum((prevSum) => (prevSum = Number(price) + Number(price) * Number(tip)));
		clickMore();
	};

	return (
		<form	onSubmit={handleSubmit}>
			<section>
				<div>Type price</div>
				<input className="userChoice" type = 'number' placeholder = 'Type price' value={price} onChange = {handleChangePrice} required/>
				<select className="userChoice" name ='Tip value' value={tip} onChange = {handleChangeTip} required >
					<option value = {''} >Select tip</option>
					<option value = {0.05} >5%</option>
					<option value = {0.1} >10%</option>
					<option value = {0.15} >15%</option>
					<option value = {0.2} >20%</option>
				</select>
			</section>
			<button onClick={grossPrice}>{showMore ? 'Recalculate Price' : 'Change'}</button>
			<div className={!showMore ? null : 'visible'}>Gross price: {sum}</div>
		</form>
	);
};

export default Form;
