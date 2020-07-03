import React from 'react'
import { Link } from 'react-router-dom'


class getReady extends React.Component {

    render() {
        return (
            <div>
                <p>Let us know when you're ready.</p>
                <div id="readyButton">
                  <Link to="/load" >I'm Ready!  </Link>
                </div>
            </div>
        )
    }
}

export default getReady