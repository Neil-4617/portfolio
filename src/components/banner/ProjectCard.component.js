import {Link} from 'react-router-dom'
// Material UI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'

const ProjectCard = () => {
	const arrProjects = [
			{
				title:'Eco Farm Resort', 
				imgPath:'./assets/images/screenshot-ecofarm.jpg',
				link:'https://eco-farm-resort.netlify.app/',
				description: 'A Resort booking app which makes easier for users to get the details for accomodation.'
			},
			{
				title:`Wowie's Coconut Store`, 
				imgPath:'./assets/images/wowie-coconut.png',
				link:'https://mark_neil.gitlab.io/wowie-bukohan/contact.html',
				description: 'A small coconut store website that display products and services.'
			},
			{
				title:`Discover`, 
				imgPath:'./assets/images/screenshot-discover-app.jpg',
				link:'https://simple-discover.netlify.app/',
				description: 'A simple blog that can be use for documentation.'
			},
		]
	return(
		<Box
			sx={{
				width:'100%',
				minHeigth:'100vh',
				backgroundColor: '#EBEBEB',
				display:'flex',
				flexDirection: 'column',
				alignItems: 'center',
				pt: '1rem ',
				pb: '6rem',
			}}>
			<Typography my='3rem' variant='h4'>Projects</Typography>
				
			<Box 
				className="cardContainer"
				sx={{
					display: 'flex',
					justifyContent: 'space-evenly',
				}}>
				{
					arrProjects.map((project) =>
					<Card
						className='cards'
						sx={{
							width: '25%',
							minHeight: '80%',
						}}>
						<CardMedia
							component='img'
							src={project.imgPath}
							sx={{
								height: '160px',
								}}/>
						<CardContent height='auto' >
							<Typography mb='1rem' variant='h5'>
								<Link to={project.link} underline="hover">{project.title}</Link>
							</Typography>
							<Typography color='primary'>
							 {project.description} 
							</Typography>
						</CardContent>
						<CardActions>
							<Button size='small' variant='contained' ><Link to={project.link}>View</Link></Button>
						</CardActions>
					</Card>

					)
				}
			</Box>
		</Box>
	)
}

export default ProjectCard