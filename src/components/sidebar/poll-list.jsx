import React from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem } from "reactstrap";

const PollList = (props) => {
	if (props.polls.length === 0) {
		return <p className="lead"> There is no poll </p>;
	} else {
		return (
			<ListGroup>
				{props.polls.map((poll) => (
					<ListGroupItem
						className=" p-3 pb-0 btn btn-warning btn-link"
						key={poll.id}
						onClick={() => props.selectPoll(poll.id)}
					>
						<p className=" fs-6 text-start">
							{poll.title.length > 40
								? poll.title.substr(0, 40) + "...."
								: poll.title}
						</p>
					</ListGroupItem>
				))}
			</ListGroup>
		);
	}
};
// only two porp is passed to this component
PollList.porpTypes = {
	polls: PropTypes.array.isRequired,
	selectPoll: PropTypes.func.isRequired,
};
export default PollList;
