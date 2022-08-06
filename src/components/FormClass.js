import React from "react";

class FormClass extends React.Component {
  state = {
    price: 0,
    tip: 0,
    sum: 0,
    showMore: true
  };

  handleChangePrice = event => {
     this.setState({price: event.target.value});
     console.log(event.target.value);
  };

	handleChangeTip = event => {
    this.setState({tip: event.target.value});
    console.log(event.target.value);
  };

	handleSubmit = event => event.preventDefault();

  clickMore = () => this.setState(
		(prevShow) => ({showMore: !prevShow.showMore})
	);

	getGrossPrice = () => {
		this.setState((prevSum) => ({sum: Number(prevSum.price) + Number(prevSum.price) * Number(prevSum.tip)}), () => this.clickMore());
	};

  render() {
    return(<form	onSubmit={this.handleSubmit}>
			<section>
				<div>Type price</div>
				<input className="userChoice" type = 'number' placeholder = 'Type price' value={this.price} onChange = {this.handleChangePrice} required/>
				<select className="userChoice" name ='Tip value' value={this.tip} onChange = {this.handleChangeTip} required >
					<option value = {''} >Select tip</option>
					<option value = {0.05} >5%</option>
					<option value = {0.1} >10%</option>
					<option value = {0.15} >15%</option>
					<option value = {0.2} >20%</option>
				</select>
			</section>
			<button onClick={this.getGrossPrice}>{this.state.showMore ? 'Recalculate Price' : 'Change'}</button>
			<div className={!this.state.showMore ? null : 'visible'}>Gross price: {this.state.sum}</div>
		</form>)
  }
}

export default FormClass;