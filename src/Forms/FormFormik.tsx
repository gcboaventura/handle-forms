import { Field, Form, Formik } from 'formik'
import React from 'react'
import { infoForm } from './Interface'
import schemaForms from './Validation'
import './Form.css'

const FormFormik: React.FC = () => {
	const initialValues: infoForm = { username: '', password: '' }

	return (
		<div className="main">
			<div className="divForm">
				<h2>Formik</h2>
				<Formik
					initialValues={initialValues}
					validationSchema={schemaForms}
					onSubmit={value => {
						alert('Username: ' + value.username + ' Passorwd: ' + value.password)
					}}
				>
					{({ errors }) => (
						<Form>
							<div className="input-group">
								<Field
									type="text"
									name="username"
									id="username"
									className="input"
									placeholder="Username"
								/>
								<span>{errors.username}</span>
							</div>
							<div className="input-group">
								<Field
									type="text"
									name="password"
									id="password"
									className="input"
									placeholder="Password"
								/>
								<span>{errors.password}</span>
							</div>
							<button type="submit" className="button">
								Send
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}

export default FormFormik
