import { CssBaseline, ThemeProvider } from '@mui/material';
import * as React from 'react';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { theme } from "./shared/styles/material-ui/theme";


export const App: React.FC = (): JSX.Element => {

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline>
					<LoginPage />
				</CssBaseline>
			</ThemeProvider>

		</>
	)
}
