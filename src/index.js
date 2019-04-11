import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Results extends React.Component {

	render(){
		return(
			
			<div className={this.props.className + ' resultForm '}>
	
				
				<form>
					<div className="img-wrapper">
					<img className="results-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/517208/coaster-03.png"/>
					</div>
				<div className="phrase">
					As {this.props.article ? 'a' : 'an'} {this.props.word1}, <br/>
				<div className="unique">
					I want to <span>{this.props.word2}</span> so that <span>my {this.props.word3}</span> can be <span>{this.props.word4}</span>.
				</div>
				</div>
				<button className="share" onClick={this.props.share}>Tweet this!</button>
				<a href="#" className="align-right" onClick={this.props.doParentReset}>Generate a new story</a>
				</form>
		
			</div>
		
		)
	}
}

class MadLibs extends React.Component {
 	 constructor(props) {
    super(props);
    this.state = {
			word1: '',
			word2: '',
			word3: '',
			word4: '',
			showPhrase: false,
			showFields: true,
			open: false,
			main: "open",
			article: true,
			placeholder: true
		}
    this.handleChange = this.handleChange.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this); 
		this.resetFields = this.resetFields.bind(this);
		 this.share = this.share.bind(this);
	
	this.changeArticle = this.changeArticle.bind(this);
	 }
	
	changeArticle() {
		this.setState({
			article: !this.state.article,
			placeholder: !this.state.placeholder
		})
	}
	
	handleChange(value, e) {
 		var change = {};
		change[value] = e.target.value;
		this.setState(change);
	}
	
  handleSubmit(e) {
		this.setState({
			showPhrase: true,
			showFields: false,
			open: !this.state.open,
			main: "hide"
		})
		e.preventDefault();
  }
	
	resetFields(){
		this.setState({
			showPhrase: false,
			showFields: true,
			word1: '',
			word2: '',
			word3: '',
			word4: '',
			main: "open",
			open: false
		})
	}	
	
	share(e) {
    var userStory  = "As " + (this.state.article?'a ':'an ') + this.state.word1 + ", I want to " + this.state.word2 + " so that my " + this.state.word3 + " can be " + this.state.word4 +"." ;
   

    e.preventDefault();

		
	
 window.open('https://twitter.com/intent/tweet?text=' + userStory + ' &hashtags=bigdesign17, baduserstories, usaamadlibscontest'); 
  }
	


	

	render() {
		const classes = this.state.open ? 'form' : 'form hide'
		return(
			<div className="app-wrapper">


				<div className="form-wrapper">
				
			<form onSubmit={this.handleSubmit} className={this.state.main + ' fields '}>
						
			
					<div className="form-content">
						<h1>User Story Generator</h1>
						<div className="col">
							<div className="row">
						<label name="word1"> persona</label>
								<div className="input-wrapper"><button type="button" className="dropdown" onClick={this.changeArticle}>{this.state.article ? 'a' : 'an'}</button><input type="text" 
								 placeholder={this.state.placeholder ? 'designer' : 'artist'} 
								
								className=" input-padding" value={this.state.word1} onChange={this.handleChange.bind(this, 'word1')} /></div>
							</div>
							<div className="row">
							<label name="word2">Activity</label>
					<input type="text" placeholder="buy a book" value={this.state.word2} onChange={this.handleChange.bind(this, 'word2')} />
								</div>
						</div>
						<div className="col">
							<div className="row">
						<label name="word3">Plural Noun</label>
						<input type="text" placeholder="cats" value={this.state.word3} onChange={this.handleChange.bind(this, 'word3')} />
						</div>
								<div className="row">
						<label name="word4">Adjective</label>
						<input type="text" placeholder="busy" value={this.state.word4} onChange={this.handleChange.bind(this, 'word4')} />
						</div>
						</div>
						
						
					<div className="actions">
						<button type="submit" className="button button--large align-left" disabled={!this.state.word1 || !this.state.word2 || !this.state.word3 || !this.state.word4}>Generate phrase</button>
						<a href="#" onClick= {this.resetFields} className="align-right">Clear all </a>
						</div>
					</div>
					</form>
					<Results 
						className={classes}
				word1={this.state.word1}
				word2={this.state.word2}
				word3={this.state.word3}
				word4={this.state.word4}
				article = {this.state.article}
				doParentReset={this.resetFields}
			
					share={this.share}
			/> </div>
				</div>
			)
		}
	}

ReactDOM.render(
  <MadLibs />,
  document.getElementById('root')
);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();


