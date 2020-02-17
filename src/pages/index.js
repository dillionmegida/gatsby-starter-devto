import React from "react"
import Styles from '../styles/index.module.css';

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  const { edges } = data.allDevNode;
  return (
    <Layout>
      <SEO title="Home" />
      <h1>DEV Posts</h1>
      <div>
        {edges.map(({ node }) => {
          const { frontmatter } = node;
          const { title, description, publish_date } = frontmatter;
          return (
            <article key={node.id } className={Styles.post}>
              <h2>{title}</h2>
              <p>{description}</p>
              <div className={Styles.extra}>
                <p>{publish_date}</p>

              </div>
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allDevNode {
      edges {
        node {
          id
          frontmatter {
            title
            description
            publish_date
          }
        }
      }
    }
  }
`