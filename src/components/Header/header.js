import { Link, graphql, StaticQuery} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.css'


const Header = ({ siteTitle }) => (
    <StaticQuery
      query={graphql`
        query {
          wordpressWpApiMenusMenusItems(name: {eq: "Principal"}) {
          items {
            title
            object_slug
          }
        }
            }
        `}
  
      render={data => (
        <header className="header">
          <div >
            <h1>
              <Link to="/" >
                {siteTitle}
              </Link>
            </h1>
            
          </div>
          {/* <nav>
              <menu className="top__menu">
                {data.wordpressWpApiMenusMenusItems.items.map(item => (
                  <li key={item.object_slug}>
                    <Link to={`/${item.object_slug}`}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </menu>
            </nav> */}
        </header>
      )}
    />
  )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
export default Header