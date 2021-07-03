import 'antd/dist/antd.css';
import './App.css';
import AppLayout from './components/AppLayout/AppLayout';
import Container from './components/Container/Container';

function App() {
	return (
		<>
			<AppLayout>
				<Container></Container>
			</AppLayout>
		</>
	);
}

export default App;
