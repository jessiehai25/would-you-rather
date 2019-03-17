import React, { Component } from 'react';
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'
import Dashboard from './Dashboard'
import Question from './Question'
import QuestionBtn from './QuestionBtn'
import Result from './Result'
import NewQuestion from './NewQuestion'

const id = '8xf0y6ziyjabvozdd253nd'

class App extends Component {
	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}
  render() {
    return (
      <div>
        <Question id={id}/>
      </div>
    );
  }
}

export default connect()(App);
