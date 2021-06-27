import React, { useState, useEffect }  from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const HookExample = () => {

	return (<Formik
		initialValues= {{
			firstName: '',
			lastName: '',
			email: ''
		}}
		validationSchema = {Yup.object({
			firstName: Yup.string()
			.max(15, 'Must be 15 characters or less')
			.required('Required'),
			lastName: Yup.string()
			.max(20, 'Must be 20 characters or less')
			.required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
		})}
		onSubmit = {(values, {resetForm}) => {
			alert(JSON.stringify(values, null, 2));
			resetForm({});
		}}
	>
		{ formik => (
			<Form>
				<label htmlFor="firstName">First Name</label>
				<Field name="firstName" type="text" />
				<label htmlFor="lastName">Last Name</label>
				<Field name="lastName" type="text" />
				<label htmlFor="email">Email Address</label>
				<Field name="email" type="email" />
				<button type="submit">Submit</button>

				<br/>
				<br/>
				<br/>
				<br/>
				<pre>
					{JSON.stringify(formik, null, 4)}
				</pre>
			</Form>
		)

		}
	</Formik>);


	/*
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<label htmlFor="firstName">First Name</label>
				<input
					id="firstName"
					type="text"
					{...formik.getFieldProps('firstName')}
				/>
				<label htmlFor="lastName">Last Name</label>
				<input
					id="lastName"
					type="text"
					{...formik.getFieldProps('lastName')}
				/>
				<label htmlFor="email">Email Address</label>
				<input
					id="email"
					type="email"
					{...formik.getFieldProps('email')}
				/>
				<button type="submit">Submit</button>

				<br/>
				<br/>
				<br/>
				<br/>
				<pre>
					{JSON.stringify(formik, null, 4)}
				</pre>
			</form>

		</div>
	); */
}

export default HookExample;