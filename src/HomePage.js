import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import MeetingLink from './MeetingLink';
import Carousel from './Carousel';
import NavigationBar from './NavigationBar';
import Background from './assets/img/poster-about.jpg';
import Cloud1 from './assets/img/poster-drop-animate1.png';
import Cloud2 from './assets/img/poster-drop-animate2.png';
import Slogan from './assets/video/IVCS_Slogan.mp4';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
const styles = () => ({
  'fullScreen': {
    backgroundImage: `url(${Background})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    margin: 0,
    left: 0,
    top: '0px',
    height: '100%',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
    // overflow: 'auto',
    // overflowY: 'scroll',
  },
  '@keyframes posterDrop1': {
    from: {backgroundPosition: '0 0'},
    to: {backgroundPosition: '4000% 0'},
  },
  '@keyframes posterDrop2': {
    from: {backgroundPosition: '0 0'},
    to: {backgroundPosition: '3000% 0'},
  },
  '@keyframes blink': {
    '20%,24%': {
      color: '#111',
      textShadow: 'none',
    },
    '0% 19%,23%,54%,100%': {
      textShadow: ' 0 0 5px #ffa500, 0 0 15px #ffa500,' +
          ' 0 0 20px #ffa500, 0 0 40px #ffa500,' +
          ' 0 0 10px #ff8d00, 0 0 98px #ff0000',
      color: '#fff6a9',
    },
  },
  'main': {
    'backgroundImage': `url(${Cloud2})`,
    'backgroundSize': 'cover',
    'backgroundRepeat': 'repeat-x',
    'animation': '$posterDrop1 3000s linear infinite',
    'position': 'absolute',
    'margin': 0,
    'width': '100%',
    'height': '50%',
    'maxWidth': '100%',
    'minHeight': '100%',
    // overflow: 'hidden',
    // overflowY: 'visible',
    'overflow': 'auto',
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
      border: 'none',
      boxShadow: 'none',
      background: '#dadce0',
      borderRadius: '8px',
      minHeight: '40px',
    },
  },
  'dynamicCloud': {
    backgroundImage: `url(${Cloud1})`,
    backgroundRepeat: 'repeat-x',
    backgroundSize: 'cover',
    animation: '$posterDrop2 5000s linear infinite',
    position: 'absolute',
    width: '100%',
    height: '100%',
    margin: 0,
    left: 0,
    maxWidth: '100%',
    maxHeight: '100%',
  },
  'banner': {
    fontWeight: 'bold',
    textShadow: '0 0 5px #ffa500, 0 0 15px #ffa500,' +
        ' 0 0 20px #ffa500, 0 0 40px #ffa500,' +
        ' 0 0 10px #ff8d00, 0 0 98px #ff0000',
    color: '#fff6a9',
    animation: '$blink 15s linear infinite alternate',
    ['@media screen and (max-aspect-ratio: 1/3),' +
    ' only screen and (max-width: 35rem)']: {
      display: 'none',
    },
  },
  'sloganVideo': {
    borderRadius: '15px',
    width: '420px',
    height: '350px',
    objectFit: 'fill',
    zIndex: '999',
    ['@media screen and (max-aspect-ratio: 1/3),' +
    ' only screen and (max-height: 35rem)']: {
      display: 'none',
    },
  },
  'gridRoot': {
    'flexGrow': 1,
    'position': 'relative',
    'display': 'flex',
    'overflow': 'auto',
    'width': '100%',
    'height': '100%',
    'flexWrap': 'wrap',
    'padding': '20px',
    'maxHeight': '100%',
    'minHeight': '100%',
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
      border: 'none',
      boxShadow: 'none',
      background: '#dadce0',
      borderRadius: '8px',
      minHeight: '40px',
    },
  },
  'gridDynamic': {
    padding: '20px',
    ['@media screen and (max-aspect-ratio: 1/2),' +
    ' only screen and (max-height: 30rem)']: {
      padding: '0px',
    },
  },
  'gridElement': {
    padding: '20px',
  },

  'gridCarousel': {
    padding: '20px',
    // ['@media screen and (max-aspect-ratio: 1/2),' +
    // ' only screen and (max-width: 40rem)']: {
    //   paddingBottom: '50px',
    // },
  },
  // ['@media screen and (max-aspect-ratio: 3/4),' +
  // ' only screen and (max-width: 45rem)'
  //     .sloganVideo]: {
  //   flexBasis: 'auto',
  //   flexShrink: '0',
  //   maxWidth: '39rem',
  //   width: '100%',
  // },
});

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.classes = this.props.classes;
  }

  render() {
    return (
      <Container disableGutters={true} className={this.classes.fullScreen}>
        <Container disableGutters={true}
          className={this.classes.dynamicCloud} />
        <NavigationBar />
        <Container disableGutters={true} component="main"
          className={this.classes.main}>

          <Grid container className={this.classes.gridRoot}
            alignItems='center' >

            <Grid item container xs={12} justify='center'
              className={this.classes.gridDynamic}>
              <Typography variant="h4" component="h4"
                className={this.classes.banner}>
                  IVCS (Instant Video Conferencing Service)
              </Typography>
            </Grid>

            <Grid item container xs
              direction='column' alignItems='center'
              flex-direction='column' >
              <Grid item container xs justify='center'
                className={this.classes.gridDynamic}>
                <video className={this.classes.sloganVideo}
                  autoPlay loop="loop" src={Slogan} />
              </Grid>

              <Grid item container xs justify='center'
                className={this.classes.gridElement}>
                <MeetingLink />
              </Grid>
            </Grid>

            <Grid item container xs
              justify='center' alignItems='center'
              flex-direction='column'
              className={this.classes.gridCarousel}>
              <Carousel />
            </Grid>

          </Grid>
        </Container>
      </Container>
    );
  }
}

export default withStyles(styles)(HomePage);
