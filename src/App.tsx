import { CssBaseline, ThemeProvider } from '@mui/material';
import * as React from 'react';
import { RouterHOC } from './RouterHOC';
import { theme } from "./shared/styles/material-ui/theme";


export const App: React.FC = (): JSX.Element => {

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<RouterHOC />
			</ThemeProvider>
		</>
	)
}
