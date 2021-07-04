import 'antd/dist/antd.css';

import AppLayout from './components/AppLayout/AppLayout';
import Container from './components/Container/Container';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		fetch('http://localhost:4000/requests')
			.then(response => response.json())
			.then(data =>
				dispatch({
					type: 'INIT',
					data,
				}),
			);
	});
	return (
		<>
			<AppLayout>
				<Container></Container>
			</AppLayout>
		</>
	);
}

export default App;
