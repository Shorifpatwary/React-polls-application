import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import ParticipationForm from "./participate-form";
import PropTypes from "prop-types";
import PollForm from "../poll-form";

class MainContent extends React.PureComponent {
	state = {
		openModal: false,
	};
	toggleModal = () => {
		this.setState({ openModal: !this.state.openModal });
	};
	render() {
		const { poll, getOpinion, updatePoll, deletePoll } = this.props;
		if (Object.keys(poll).length === 0) {
			return (
				<div>
					<h2 className="h2  text-success">Welcome to my application</h2>
					<p className="lead text-black">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Perspiciatis possimus labore blanditiis, magni libero omnis quidem
						quos error totam natus inventore id quia incidunt esse deleniti?
						Fuga quisquam deleniti fugiat. Expedita necessitatibus molestias,
						debitis impedit ad cupiditate ullam dicta soluta?
					</p>
				</div>
			);
		}
		return (
			<div>
				<h2 className="text-white-50 h2"> {poll.title} </h2>
				<p className="lead">{poll.description}</p>
				<br />
				<ParticipationForm
					poll={poll}
					getOpinion={getOpinion}
					toggleModal={this.toggleModal}
					deletePoll={deletePoll}
				/>
				<Modal
					isOpen={this.state.openModal}
					toggle={this.toggleModal}
					unmountOnClose={true}
				>
					<ModalHeader toggle={this.toggleModal}>Update Your poll</ModalHeader>
					<ModalBody>
						<PollForm
							poll={poll}
							isUpdate={true}
							submit={updatePoll}
							buttonValue="Update Poll "
						/>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}
MainContent.propTypes = {
	poll: PropTypes.object.isRequired,
	getOpinion: PropTypes.func.isRequired,
	updatePoll: PropTypes.func.isRequired,
	deletePoll: PropTypes.func.isRequired,
};
export default MainContent;
