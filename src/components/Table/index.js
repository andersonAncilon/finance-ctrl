import React from 'react';
import useStoreon from 'storeon/react';

const Table = ({ props }) => {
	const { control } = useStoreon('control');

	return (
		<>
			{control.length > 0 ? (
				<table className='table mt-5'>
					<thead className='thead-dark'>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>Value</th>
						</tr>
					</thead>
					<tbody>
						{control.map((data, index) => (
							<tr key={index}>
								<th scope='row'>{index}</th>
								<td>{data}</td>
							</tr>
						))}
						<tr className='table-info'>
							<td>
								<strong>Total:</strong>
							</td>
							<td>
								<strong>{control.reduce((total, current) => (total = +total + +current))}</strong>
							</td>
						</tr>
					</tbody>
				</table>
			) : (
				<h2 className='mt-5 text-center text-danger'>Nenhum resultado</h2>
			)}
		</>
	);
};

export default Table;
