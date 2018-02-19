import React from 'react';
import Question from '../constants/Question';
import Answers from '../constants/Answers';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: null
    }
    this.handleAnswerSelect=this.handleAnswerSelect.bind(this)
  }

  handleAnswerSelect(answer){
    let correct = answer.correct
    let id = answer.id

    if (correct === true) {
      this.setState ({answer: "Correct!"})
    } else {
      this.setState ({answer: "Incorrect!"})
    }

    this.setState({selectedAnswer: id})
  }

  render(){
    return(
      <div>
      <Question
         question = {this.props.data.question.body}
         className = 'question'
      />
      <Answers
        data = {this.props.data.answers}
        selectedAnswer = {this.props.selectedAnswer}
        handleAnswerSelect = {this.handleAnswerSelect}
      />
        <h3 className = {this.state.answer}>{this.state.answer}</h3>
      </div>
    )
  }
}

export default App
