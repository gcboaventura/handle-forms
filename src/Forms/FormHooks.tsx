import React, { useState } from 'react'
import { infoForm } from './Interface'
import schemaForms from './Validation'
import './Form.css'

const FormHook: React.FC = () => {
	const [value, setValue] = useState<infoForm>({
		username: '',
		password: ''
	})

	const onChange = (event: any) => {
		setValue({
			...value,
			[event.target.name]: event.target.value
		})
	}

	const onSubmit = async (event: any) => {
		event.preventDefault()
		const isValid = await schemaForms.isValid(value)
		if (isValid === false) {
			alert('Must be 5 characters long.')
		} else {
			alert('Username: ' + value.username + ' Password: ' + value.password)
		}
	}

	return (
		<div className="main">
			<div className="divForm">
				<h2>React Hooks</h2>
				<form action="submit" onSubmit={onSubmit}>
					<div className="input-group">
						<input
							type="text"
							name="username"
							id="username"
							className="input"
							placeholder="Username"
							value={value.username}
							onChange={onChange}
							required
						/>
					</div>
					<div className="input-group">
						<input
							type="password"
							name="password"
							id="password"
							className="input"
							placeholder="Password"
							value={value.password}
							onChange={onChange}
							required
						/>
					</div>
					<button type="submit" className="button">
						Send
					</button>
				</form>
			</div>
		</div>
	)
}

export default FormHook
