import React from "react"
import {
  // FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          twitterHandle
          linkedin
          github
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.siteFooter}>
      <div className={footerStyles.container}>
        <p className={footerStyles.copy}>
          Designed and developed by {data.site.siteMetadata.author} &copy;{" "}
          {new Date().getFullYear().toString()}
        </p>
        <div className={footerStyles.social}>
          <span className={footerStyles.checkMe}>
            Follow me on my social pages
          </span>
          <ul className={footerStyles.socialList}>
            <li className={footerStyles.socialItem}>
              <a
                href={`https://twitter.com/${data.site.siteMetadata.twitterHandle}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            {/* <li className={footerStyles.socialItem}>
              <a
                href={`https://www.facebook.com/${data.site.siteMetadata.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare />
              </a>
            </li> */}

            <li className={footerStyles.socialItem}>
              <a
                href={`https://www.linkedin.com/in/${data.site.siteMetadata.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className={footerStyles.socialItem}>
              <a
                href={`https://github.com/${data.site.siteMetadata.github}`}
                target="_blank"
                title="Open-source project"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

// import { FaFacebookF } from "react-icons/fa";
// FaFacebookF   FaFacebookSquare    FaFacebook
// FaGithub FaGithubSquare
// FaGooglePlusG FaGooglePlusSquare
// FaLinkedinIn FaLinkedin
// FaPinterestP  FaPinterestSquare
// FaTwitter   FaTwitterSquare
// <h3> Lets go for a <FaFacebookF />? </h3>
