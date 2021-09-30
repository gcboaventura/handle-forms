import React from 'react'
import './App.css'
import FormFormik from './Forms/FormFormik'
import FormHook from './Forms/FormHooks'

const App: React.FC = () => {
	return (
		<div className="App">
			<h1 className="tittle">Dealing with forms and their validations</h1>
			<div className="forms">
				<FormHook />
				<FormFormik />
			</div>
			<p className="obs">
				Send validations were done with <a href="https://www.npmjs.com/package/yup">Yup</a>
			</p>
		</div>
	)
}

export default App
