import React from "react";
import PropTypes from "prop-types";

import {
	Form,
	FormGroup,
	FormFeedback,
	Input,
	Label,
	Button,
} from "reactstrap";

class ParticipationForm extends React.Component {
	state = {
		name: "",
		selectedOption: "",
		errors: {},
	};
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const { isValid, errors } = this.validate();
		if (isValid) {
			this.props.getOpinion({
				pollId: this.props.poll.id,
				name: this.state.name,
				selectedOption: this.state.selectedOption,
			});
			event.target.reset();
			this.setState({
				name: "",
				selectedOption: "",
				errors: {},
			});
		} else {
			this.setState({ errors });
		}
	};
	validate = () => {
		const errors = {};

		if (!this.state.name) {
			errors.name = "Please provide a name ";
		} else if (this.state.name.length > 20) {
			errors.name = "Your name is too long ";
		}

		if (!this.state.selectedOption) {
			errors.selectedOption = "Please select one option ";
		}
		return {
			errors,
			isValid: Object.keys(errors).length === 0,
		};
	};
	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<div className="d-flex">
					<h4 className="h4"> Options </h4>
					<Button
						type="button"
						className="ms-auto btn btn-warning"
						onClick={this.props.toggleModal}
					>
						Edit
					</Button>
					<Button
						type="button"
						className="ms-2 btn btn-danger"
						onClick={() =>
							this.props.deletePoll(this.props.poll.id)
						}
					>
						Delete Poll
					</Button>
				</div>
				{this.props.poll.options.map((opt) => (
					<FormGroup className="my-2" key={opt.id}>
						<div className="d-flex">
							<Input
								className=" mt-2"
								type="radio"
								id={opt.id}
								name="selectedOption"
								value={opt.id}
								onChange={this.handleChange}
								invalid={
									this.state.errors.selectedOption
										? true
										: false
								}
							/>
							<Label className="m-1" for={opt.id}>
								{opt.value}
							</Label>
							<span className="btn btn-primary ms-auto rounded">
								{opt.vote}
							</span>
							<span className="btn btn-info ms-5 rounded">
								{this.props.poll.totalVote > 0
									? (
											(100 * opt.vote) /
											this.props.poll.totalVote
									  ).toFixed(2)
									: 0}
								%
							</span>
						</div>
					</FormGroup>
				))}
				<FormGroup className="my-2">
					<Label for="name"> Enter Your Name </Label>
					<Input
						name="name"
						placeholder="Enter Your Name "
						value={this.state.name}
						id="name"
						onChange={this.handleChange}
						invalid={this.state.errors.name ? true : false}
					/>
					{this.state.errors.name ? (
						<FormFeedback> {this.state.errors.name} </FormFeedback>
					) : null}
				</FormGroup>
				<Button type="submit"> Submit </Button>
			</Form>
		);
	}
}
ParticipationForm.propTypes = {
	poll: PropTypes.object.isRequired,
	getOpinion: PropTypes.func.isRequired,
	toggleModal: PropTypes.func.isRequired,
	deletePoll: PropTypes.func.isRequired,
};
export default ParticipationForm;
// errors occured in this file
// error was in the pollId porperty . in getOpinion method on line no 176
// I checke this file . 1 error was in 194
//  and I got an error in the HM Nayems file in 140
