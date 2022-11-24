import React from "react";
import PropTypes from "prop-types";
import {
	Form,
	FormGroup,
	Label,
	Input,
	FormFeedback,
	Button,
} from "reactstrap";
const MyForm = ({
	title,
	description,
	options,
	errors,
	buttonValue,
	handleChange,
	handleOptionChange,
	createOption,
	deleteOption,
	handleSubmit,
}) => (
	<Form onSubmit={handleSubmit}>
		<FormGroup>
			<Label for="title"> Title </Label>
			<Input
				name="title"
				id="title"
				placeholder="Enter Your Title "
				value={title}
				onChange={handleChange}
				invalid={errors.title ? true : false}
			/>
			{errors.title ? <FormFeedback> {errors.title} </FormFeedback> : null}
		</FormGroup>

		<FormGroup>
			<Label for="description"> Description </Label>
			<Input
				type="textarea"
				name="description"
				id="description"
				placeholder="Enter Your Description "
				value={description}
				onChange={handleChange}
				invalid={errors.description ? true : false}
			/>
			{errors.description ? (
				<FormFeedback> {errors.description} </FormFeedback>
			) : null}
		</FormGroup>
		<FormGroup>
			<Label className="me-3"> Enter Options </Label>
			<Button className=" m-0 p-2 rounded-3" onClick={createOption}>
				Create Option
			</Button>
			{options.map((opt, index) => (
				<div key={opt.id} className="d-flex my-2">
					<Input
						value={opt.value}
						onChange={(e) => handleOptionChange(e, index)}
						invalid={errors.options && errors.options[index] ? true : false}
					/>
					<Button
						className="btn-danger ms-2"
						disabled={options.length <= 2}
						onClick={() => deleteOption(index)}
					>
						Delete
					</Button>
				</div>
			))}
		</FormGroup>
		<Button className="btn-primary" type="submit">
			{buttonValue}
		</Button>
	</Form>
);

MyForm.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	errors: PropTypes.object,
	buttonValue: PropTypes.string,
	handleChange: PropTypes.func.isRequired,
	handleOptionChange: PropTypes.func.isRequired,
	createOption: PropTypes.func.isRequired,
	deleteOption: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};
export default MyForm;
