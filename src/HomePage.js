import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {withStyles} from '@material-ui/styles';
import MeetingLink from './MeetingLink';
import Carousel from './Carousel';
import TopNavigation from './TopNavigation';
const styles = () => ({
  fullScreen: {
    position: 'fixed',
    margin: 0,
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  main: {
    backgroundColor: '#505355',
    position: 'relative',
    margin: 0,
    padding: '30px',
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  banner: {
    backgroundColor: '#cfe8fc',
    margin: '50px',
    fontWeight: 'lighter',
    textDecoration: 'blink',
    textShadow: 'hShadow, vShadow, onBlurCapture',
  },

});

class HomePage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {url: ''};
  // }

  render() {
    const {classes} = this.props;
    return (
      <Container disableGutters='true' className={classes.fullScreen}>
        <TopNavigation/>
        <Container component="main" align="center" disableGutters ='true'
          className={classes.main}>
          <Typography variant="h2" component="h2" align="center"
            className={classes.banner}>
          IVCS (Instant Video Conferencing Service)
          </Typography>
          <MeetingLink />
          <Carousel />
        </Container>
      </Container>
    );
  }
}

export default withStyles(styles)(HomePage);
