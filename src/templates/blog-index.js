import React from "react"
import {Link} from "gatsby"

const blogIndex = props => {
  const {pageContext} = props
  const {listOfEntries} = pageContext

  return (
    <div style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}>
      <h2>My blogposts</h2>
      <ul>
        {listOfEntries.map(item => (
          <li>
            <Link key={item.itemID} to={`/myblogposts/${item.slugname}/`}>
              {item.posttitle}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default blogIndex
