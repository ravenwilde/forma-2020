import React from "react"
import { Link, graphql } from "gatsby"
import { map, find } from "lodash"

import BusinessInfo from "../components/business-info"
import ClassInfo from "../components/class-info"
import EquipmentInfo from "../components/equipment-info"
import HoursInfo from "../components/hours-info"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { prismic, site } = data;

  const siteMetadata = site.siteMetadata;

  const content = map(prismic._allDocuments.edges, (i) => (i.node));
  const businessInfo = find(content, (b) => ( b.__typename === "PRISMIC_Business_info"));
  const hoursInfo = find(content, (b) => ( b.__typename === "PRISMIC_Hours_info"));
  const classInfo = find(content, (b) => ( b.__typename === "PRISMIC_Class_info"));
  const equipmentInfo = find(content, (b) => ( b.__typename === "PRISMIC_Equipment_info"));

  return (
    <Layout siteTitle={siteMetadata.title}>
      <SEO {...siteMetadata} />
      <BusinessInfo {...businessInfo} />
      <HoursInfo {...hoursInfo} />
      <ClassInfo {...classInfo} />
      <EquipmentInfo {...equipmentInfo} />
     
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  );
}

  
export const query = graphql `
  query IndexPageQuery {
    site {
      id
      siteMetadata {
        title
        description
        author
      }
    }
    prismic {
    _allDocuments {
      edges {
        node {
          ... on PRISMIC_Business_info {
            business_name
            business_description
            business_address_locality
            business_address_postal_code
            business_address_region
            business_payment_notice
            business_phone_number
            business_street_address
          }
          ... on PRISMIC_Class_info {
            class_info_header
            class_info_text
          }
          ... on PRISMIC_Equipment_info {
            equipment_info_header
            equipment_info_text
          }
          ... on PRISMIC_Hours_info {
            hours_info_header
            hours_info_text
            hours_current
            reopening_phase_details {
              phase_description
              phase_name
              phase_note
              phase_special_notice
              phase_start_date
            }
          }
        }
      }
    }
  }
  }
`

export default IndexPage
