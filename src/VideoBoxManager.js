import React from 'react';
import withStyles from '@material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import VideoBox from './VideoBox';
const styles = () => ({
  videoBoxManager: {
    display: 'flex',
    position: 'absolute',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    top: 0,
    left: 0,
    right: 0,
    padding: 0,
    margin: '100px 0',
    width: '100%',
    height: 'calc(100% - 200px)',
    listStyle: 'none',
    textAlign: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    overflow: 'auto',
  },
});

class VideoBoxManager extends React.Component {
  constructor(props) {
    super(props);

    this.classes = this.props.classes;

    this.videoBoxRefs = {};

    this.videoBoxes = [];

    this.state = {
      addVideoBox: false,
    };
  }

  stopStreamedVideo = (userId) => {
    this.videoBoxRefs[userId].current.removeVideoTrack();
  }

  stopStreamedAudio = (userId) => {
    this.videoBoxRefs[userId].current.removeAudioTrack();
  }

  removeVideoBox = (userId) => {
    this.videoBoxRefs[userId].current.dismiss();
  }

  addVideoBox = (userId) => {
    this.videoBoxRefs[userId] = React.createRef();

    this.videoBoxes.push(<VideoBox
      ref={this.videoBoxRefs[userId]}
      userId={userId}
    />);

    this.setState({addVideoBox: true});
  }

  handleTrack = (userId, track) => {
    if (!this.videoBoxRefs[userId]) {
      this.addVideoBox(userId);
    }
    this.videoBoxRefs[userId].current.addTrack(track);
  }

  render() {
    return (
      <Container
        className={this.classes.videoBoxManager}>
        {
            this.state.addVideoBox ? this.videoBoxes : null
        }
      </Container>
    );
  }
}

VideoBoxManager.propTypes = {
  addVideoBox: PropTypes.func,
  removeVideoBox: PropTypes.func,
};

export default withStyles(styles)(VideoBoxManager);
