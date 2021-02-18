import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from './appBar/AppBar';
import Logo from './appBar/Logo';
import Footer from './footer/Footer';
import Content from './content/Content';
import NavBar from './navBar/NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    background: '#2a3040',
  },
  content: {
    display: 'flex',
    height: '78%'
  },
  topBar: {
    display: 'flex',
  },
  footer: {
    height: '10%'
  },
  appBar: {
    padding: '0 15',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const DropZoneScreen = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.topBar}>
        <Logo />
        <AppBar />
      </div>
      <div className={classes.content}>
        <NavBar />
        <Content />
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default DropZoneScreen;
