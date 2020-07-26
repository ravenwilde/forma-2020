import React from "react";
import PropTypes from "prop-types";
import { RichText } from "prismic-reactjs";

const ClassInfo = ({
	class_info_header,
	class_info_text,
}) => {
	return (
		<div>
			{RichText.render(class_info_header)}
			{RichText.render(class_info_text)}
		</div>
	)
}

ClassInfo.propTypes = {
	class_info_header: PropTypes.array,
	class_info_text: PropTypes.array,
}

export default ClassInfo;
