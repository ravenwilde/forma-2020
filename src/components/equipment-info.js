import React from "react";
import PropTypes from "prop-types";
import { RichText } from "prismic-reactjs";

const EquipmentInfo = ({
	equipment_info_header,
	equipment_info_text,
}) => {
	return (
		<div>
			{RichText.render(equipment_info_header)}
			{RichText.render(equipment_info_text)}
		</div>
	)
}

EquipmentInfo.propTypes = {
	equipment_info_header: PropTypes.array,
	equipment_info_text: PropTypes.array,
}

export default EquipmentInfo;
