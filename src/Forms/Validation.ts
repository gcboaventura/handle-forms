import * as yup from 'yup'

const schemaForms = yup.object().shape({
	username: yup.string().required('The username field is mandatory.'),
	password: yup
		.string()
		.required('The password field is mandatory.')
		.min(5, 'Must be 5 characters long.')
		.max(5, 'Must be 5 characters long.')
})

export default schemaForms
