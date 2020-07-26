import React from "react";
import PropTypes from "prop-types";
import { RichText } from "prismic-reactjs";

const BusinessInfo = ({
	business_name,
	business_description,
	business_address_locality,
	business_address_region,
	business_street_address,
	business_address_postal_code,
	business_phone_number,
}) => {
	return (
		<div>
			{RichText.render(business_description)}
			<address>
				<p>{RichText.asText(business_street_address)}</p>
				<p>{RichText.asText(business_address_locality)}, {RichText.asText(business_address_region)}</p>
				<p>{RichText.asText(business_address_postal_code)}</p>
			</address>
		</div>
	);
}

BusinessInfo.propTypes = {
  business_name: PropTypes.array,
  business_description: PropTypes.array,
  business_address_locality: PropTypes.array,
  business_address_postal_code: PropTypes.array,
  business_address_region: PropTypes.array,
  business_payment_notice: PropTypes.array,
  business_phone_number: PropTypes.array,
  business_street_address: PropTypes.array,
}

export default BusinessInfo;
