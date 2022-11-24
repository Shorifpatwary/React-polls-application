import React from "react";
import PropTypes from "prop-types";
import { Input, Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import PollList from "./poll-list";
import PollForm from "../poll-form";

class Sidebar extends React.Component {
	state = {
		openModal: false,
	};
	toggleModal = () => {
		this.setState({ openModal: !this.state.openModal });
	};
	render() {
		return (
			<div className=" p-4 m-2 bg-light">
				<div className="d-flex mb-4">
					<Input
						type="search"
						placeholder="Search"
						value={this.props.searchTerm}
						onChange={(e) =>
							this.props.handleSearch(e.target.value)
						}
					/>
					<Button
						className="ms-3 btn-info"
						onClick={this.toggleModal}
					>
						New
					</Button>
				</div>
				<h3 className="h3 text-info"> List of polls </h3>
				<hr className=" mark" />
				<PollList
					polls={this.props.polls}
					selectPoll={this.props.selectPoll}
				/>
				<Modal
					isOpen={this.state.openModal}
					toggle={this.toggleModal}
					unmountOnClose={true}
				>
					<ModalHeader toggle={this.toggleModal}>
						Create a New poll
					</ModalHeader>
					<ModalBody>
						<PollForm
							submit={this.props.addNewPoll}
							buttonValue="Create A Poll "
						/>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}
Sidebar.propTypes = {
	polls: PropTypes.array.isRequired,
	selectPoll: PropTypes.func.isRequired,
	handleSearch: PropTypes.func.isRequired,
	searchTerm: PropTypes.string.isRequired,
	addNewPoll: PropTypes.func.isRequired,
};
export default Sidebar;
