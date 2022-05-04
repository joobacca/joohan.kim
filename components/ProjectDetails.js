import styled from '@emotion/styled';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Collapse,
  IconButton,
  Typography,
} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';

const ExpandMore = styled((props) => {
  // eslint-disable-next-line no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProjectDetails = ({ project }) => {
  const {
    name,
    duration,
    imageUrl,
    url,
    description,
    technologies: { frontend, backend },
  } = project;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, mx: 'auto' }}>
      <CardHeader title={name} subheader={duration} />
      {imageUrl !== '' && (
        <CardMedia component="img" alt={`${name} image`} image={imageUrl} />
      )}
      <CardContent>
        <Typography color="text.secondary">{description}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          component="a"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="add to favorites"
        >
          <LinkIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {frontend.map((value) => (
            <Chip
              label={value}
              key={`${name}-${value}`}
              color="primary"
              sx={{ m: 0.5 }}
            />
          ))}
          {backend.map((value) => (
            <Chip
              label={value}
              key={`${name}-${value}`}
              variant="outlined"
              sx={{ m: 0.5 }}
            />
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProjectDetails;
