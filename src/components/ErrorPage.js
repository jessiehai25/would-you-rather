import React, {Component} from 'react'

class ErrorPage extends Component {
	render(){
	return(
		<div className = 'center'>
                <h1 className="notFoundTitle">Oops! That page can’t be found.</h1>
                <p>
                        It looks like nothing was found at this location.
                        Maybe try one of the links in the menu or press back to go to the previous page.
                </p>
        </div>
	)}
}

export default ErrorPage;