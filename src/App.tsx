import * as React from 'react';
import { LoginPage } from './pages/LoginPage/LoginPage';

type AppProps = { 
	
}


export const App: React.FC<AppProps> = (): JSX.Element => {
	
	return (
		<>
			<LoginPage />		
			Welcome!
		</>
	)
}