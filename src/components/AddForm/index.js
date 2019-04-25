import React, { useState } from 'react';
import useStoreon from 'storeon/react';

const AddForm = () => {
	const { dispatch } = useStoreon('control');
	const [value, setValue] = useState(0);

	const add = () => {
		dispatch('control/add', value);
		setValue(0);
	};

	return (
		<div className='col-md-8 mx-auto mt-5'>
			<div className='input-group input-group-lg'>
				<div className='input-group-prepend'>
					<span className='input-group-text' id='valueInput'>
						Valor
					</span>
				</div>
				<input
					type='number'
					className='form-control'
					aria-label='Input for the entry valye'
					aria-describedby='input-entry-value'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button className='ml-1 btn btn-lg btn-primary' onClick={() => add()}>
					Inserir
				</button>
			</div>
		</div>
	);
};

export default AddForm;
