import React from "react";
import PropTypes from "prop-types";
import { map } from "lodash"
import { RichText } from "prismic-reactjs";

const HoursInfo = ({
	hours_info_header,
	hours_info_text,
	hours_current,
	reopening_phase_details,
}) => {
	return (
		<div>
			{RichText.render(hours_info_header)}
			{RichText.render(hours_info_text)}
			{RichText.render(hours_current)}
			<div>
				{map(reopening_phase_details, (phase) => (
					<div>
						{RichText.render(phase.phase_name)}
						{RichText.render(phase.phase_start_date)}
						{RichText.render(phase.phase_note)}
						{RichText.render(phase.phase_description)}
					</div>
				))}
			</div>
		</div>
	);
}

HoursInfo.propTypes = {
	hours_info_header: PropTypes.array,
	hours_info_text: PropTypes.array,
	hours_current: PropTypes.array,
  reopening_phase_details: PropTypes.array,
}

export default HoursInfo;
