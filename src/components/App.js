// Dependencies
import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
// Context
import { UIProvider } from '../context'


// Styles
import theme  from '../assets/styles/theme'

// Components
import Appbar from './appbar/Appbar'
import NavMenu from './appbar/NavMenu'
import Banner from './banner/Banner'
import Footer from './footer/Footer'




const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<UIProvider>
				<Box			
					sx={{
						width: '100vw',
					}}>	
					<Appbar />
				
					<NavMenu />
					<Banner />
					<Footer />
				</Box>
			</UIProvider>
		</ThemeProvider>
		
		/*
			Appbar
				Nav
			Main Content
			About
			Projects
			Blog
			Footer
		*/
	)
}

export default App