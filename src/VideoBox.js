import React from 'react';
import withStyles from '@material-ui/styles/withStyles';

const styles = () => ({
  videoBox: {
    background: '#323da7',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    padding: '5px',
    width: '300px',
    height: '225px',
    marginTop: '10px',
    marginBottom: '10px',
    marginLeft: '20px',
    marginRight: '20px',
    lineHeight: '225px',
    textAlign: 'center',
  },
});

class VideoBox extends React.Component {
  constructor(props) {
    super(props);

    this.classes = this.props.classes;

    this.videoRef = React.createRef();
    this.audioRef = React.createRef();

    this.videoStream = null;
    this.audioStream = null;

    this.videoTrack = null;
    this.audioTrack = null;

    this.video = true;
    this.audio = true;

    this.state = {
      dismiss: false,
    };
  }

  componentDidMount() {
    this.turnOnBlackScreen();
  }

  blackCanvas = ({width = 200, height = 150} = {}) => {
    const canvas = Object.assign(document.createElement('canvas'),
        {width, height});
    canvas.getContext('2d').fillRect(0, 0, width, height);
    const captureStream = canvas.captureStream();
    return Object.assign(captureStream.getVideoTracks()[0], {enabled: false});
  }

  turnOnBlackScreen = () => {
    this.videoStream = new MediaStream([this.blackCanvas()]);
    this.videoRef.current.srcObject = this.videoStream;
  }

  dismiss = () => {
    this.removeVideoTrack();
    this.removeAudioTrack();
    this.setState({dismiss: true});
  }

  stopVideoTrack = () => {
    this.videoRef.current.srcObject.getVideoTracks().forEach((track) => {
      track.stop();
    });
  }

  stopAudioTrack = () => {
    this.videoRef.current.srcObject.getAudioTracks().forEach((track) => {
      track.stop();
    });
  }

  removeVideoTrack = () => {
    this.stopVideoTrack();
    this.turnOnBlackScreen();
  }

  removeAudioTrack = () => {
    this.stopAudioTrack();
    this.audioStream = new MediaStream();
    this.audioRef.current.srcObject = this.audioStream;
  }

  addTrack = (track) => {
    if (track.kind === 'video') {
      this.stopVideoTrack();
      this.videoStream = new MediaStream();
      this.videoStream.addTrack(track);
      this.videoRef.current.srcObject = this.videoStream;
      this.videoTrack = track;
    }

    if (track.kind === 'audio') {
      this.stopAudioTrack();
      this.audioStream = new MediaStream();
      this.audioStream.addTrack(track);
      this.audioRef.current.srcObject = this.audioStream;
      this.audioTrack = track;
    }
  }

  render() {
    return (
      this.state.dismiss ? null :
            <video
              className={this.classes.videoBox}
              ref={this.videoRef}
              autoPlay>

              <audio
                ref={this.audioRef}
                autoPlay>
              </audio>
            </video>
    );
  }
}

export default withStyles(styles)(VideoBox);
