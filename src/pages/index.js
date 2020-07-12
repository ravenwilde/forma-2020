import React from "react"
import { Link, graphql } from "gatsby"
import { RichText } from 'prismic-reactjs'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const pageData = data.prismic.allBusiness_infos.edges[0].node;
  const siteMetadata = data.site.siteMetadata;

  return (
    <Layout siteTitle={data.site.siteMetadata.title}>
      <SEO {...siteMetadata} />
      <h1>{pageData.business_name[0].text}</h1>
      <p>{pageData.business_description[0].text}</p>
     
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
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
      allBusiness_infos {
        edges {
          node {
            business_address_locality
            business_address_postal_code
            business_address_region
            business_description
            business_hours
            business_name
            business_payment_notice
            business_phone_number
            business_street_address
          }
        }
      }
    }
  }
`

export default IndexPage
