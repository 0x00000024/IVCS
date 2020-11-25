import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/styles/withStyles';
import Carousel1 from './img/carousel01.jpg';
import Carousel2 from './img/carousel02.jpg';

const styles = () => ({
  carousel: {
    position: 'absolute',
    display: 'block',
    width: '35%',
    height: '50%',
    // height: 'auto',
    margin: '5% 5%',
    left: '45%',
    top: '15%',
    float: 'left',
    borderRadius: '15px',
    backgroundColor: 'transparent',
    boxShadow: 'inset 0px 3px 5px rgba(255,255,255,0.5),' +
        ' 0px 0px 10px rgba(0,0,0,0.15)',
  },

  paperContainer: {
    position: 'absolute',
    width: '100%',
    height: '90px',
  },
});

function Item(props) {
  return (
    <Paper>
      <img style={{width: '100%'}}
        alt="true" src={props.item.image}/>
    </ Paper>
  );
}

class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {urlBackHalf: ''};

    this.items = [
      {
        name: '',
        description: '',
        image: Carousel1,
      },
      {
        name: '',
        description: '',
        image: Carousel2,
      },
    ];
  }

  render() {
    const classes = this.props.classes;
    return (
      <Carousel className={classes.carousel}>
        {
          this.items.map((item, i) => <Item key={i} item={item}/>)
        }
      </Carousel>
    );
  }
}

export default withStyles(styles)(MyCarousel);
