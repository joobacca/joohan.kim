import { Box, Grid, Typography } from '@mui/material';
import ProjectDetails from '../components/ProjectDetails';

const data = [
  {
    name: 'KEPTN app',
    url: 'https://keptn.de',
    duration: 'July 2019 - April 2020',
    imageUrl: '/keptn.png',
    description:
      'aspdifjaewipf piwaejfj apwiejfpif j wpf wipaefn wipefn fna fnfi',
    technologies: {
      frontend: [
        'React',
        'Redux',
        'Material UI',
        'react-intl',
        'React Router',
        'Formik/yup',
        'styled-components',
        'react-query',
        'Webpack',
        'ESLint',
        'Prettier',
      ],
      backend: [
        'Django',
        'Django Rest Framework',
        'Docker',
        'RabbitMQ',
        'Celery',
        'PostgreSQL',
        'Apache',
        'AWS EC2',
      ],
    },
  },
  {
    name: 'VON DER SEE Agency website',
    url: 'https://von-der-see.de',
    description: '',
    imageUrl: '/vds.png',
    duration: 'December 2019 - July 2020',
    technologies: {
      frontend: [
        'React.js',
        'Gatsby.js',
        'react-spring',
        'Material UI',
        'react-intl',
        'React Router',
        'Formik/yup',
        'styled-components',
        'react-query',
        'Webpack',
      ],
      backend: ['WordPress (Headless)', 'ACF', 'ACF to REST'],
    },
  },
  {
    name: 'ElectionsData Dashboard',
    url: 'https://dashboard.dpa-electionsdata.com',
    description: '',
    imageUrl: '/EDdashboard.png',
    duration: 'November 2021 - February 2022',
    technologies: {
      frontend: ['Preact', 'Next.js', 'Tailwind CSS', 'emotion', 'chart.js'],
      backend: ['AWS Amplify'],
    },
  },
  {
    name: 'Elections CMS',
    url: 'https://cms.dpa-electionsdata.com',
    description: 'February 2022 - current',
    imageUrl: '',
    technologies: {
      frontend: [
        'React',
        'TypeScript',
        'react-admin',
        'Material UI',
        'emotion',
        'React Router',
        'Amazon Cognito',
        'WebSocket',
        'Cypress',
      ],
      backend: [],
    },
  },
];

function Projects() {
  return (
    <Box sx={{ mt: '100px' }}>
      <Typography color="text.primary" sx={{ mb: 2 }}>
        Here you can see a few of the projects I participated (or led) on. All
        of the listed projects included the usage of Husky, ESLint and Prettier.
      </Typography>
      <Grid container spacing={4}>
        {data.map((project) => (
          <Grid item xs={12} md={6} key={project.name}>
            <ProjectDetails project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
