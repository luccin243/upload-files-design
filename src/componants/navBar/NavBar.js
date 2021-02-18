import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Typography from '@material-ui/core/Typography';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RemoveIcon from '@material-ui/icons/Remove';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import MoneyIcon from '@material-ui/icons/Money';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '20%',
    background: '#333b4e',
    boxShadow: '0 0 3px 0 #212121',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    background: '#333b4e',
    overflow: 'hidden',
  },
  row: {
    padding: 10,
    border: '1px solid #525661',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 33,
    justifyContent: 'space-between',
    cursor: 'pointer',
    '&:hover': {
      background: '#2a3040',
      border: 'none'
    },
    '& > div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  arrow: {
    position: 'absolute',
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderBottom: '10px solid #333b4e',
    top: 64,
    left: '44%',
    zIndex: 9,
  },
  icon: {
    fontSize: '15px',
    color: '#b9b9b9',
  },
  text: {
    fontSize: '14px',
    margin: '0 15px',
    fontWeight: 600,
    color: '#b9b9b9',
  },
  title: {
    fontSize: '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60px',
    background: '#505b75',
    position: 'relative',
    zIndex: 99999,
    color: '#fff',
  },
  dotContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  dot: {
    display: 'flex',
    marginTop: 25,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant='h6' className={classes.title}>
          Standard
        </Typography>
      </div>
      <div className={classes.item}>
        <div className={classes.row}>
          <div>
            <TextFormatIcon className={classes.icon} />
            <Typography variant='h6' className={classes.text}>
              Text line
            </Typography>
          </div>
          <AddIcon className={classes.icon} />
        </div>
        <div className={classes.row}>
          <div>
            <MoneyIcon className={classes.icon} />
            <Typography variant='h6' className={classes.text}>
              Number
            </Typography>
          </div>
          <AddIcon className={classes.icon} />
        </div>
        <div className={classes.row}>
          <div>
            <LineStyleIcon className={classes.icon} />
            <Typography variant='h6' className={classes.text}>
              Paragraph
            </Typography>
          </div>
          <AddIcon className={classes.icon} />
        </div>
        <div className={classes.row}>
          <div>
            <DoneIcon className={classes.icon} />
            <Typography variant='h6' className={classes.text}>
              Checkboxes
            </Typography>
          </div>
          <AddIcon className={classes.icon} />
        </div>
        <div className={classes.row}>
          <div>
            <RadioButtonCheckedIcon className={classes.icon} />
            <Typography variant='h6' className={classes.text}>
              Multiple choice
            </Typography>
          </div>
          <AddIcon className={classes.icon} />
        </div>
        <div className={classes.row}>
          <div>
            <ArrowDropDownIcon className={classes.icon} />
            <Typography variant='h6' className={classes.text}>
              Dropdown
            </Typography>
          </div>
          <AddIcon className={classes.icon} />
        </div>
        <div className={classes.row}>
          <div>
            <RemoveIcon className={classes.icon} />
            <Typography variant='h6' className={classes.text}>
              Section break
            </Typography>
          </div>
          <AddIcon className={classes.icon} />
        </div>
        <div className={classes.row}>
          <div>
            <InsertDriveFileIcon className={classes.icon} />
            <Typography variant='h6' className={classes.text}>
              Page break
            </Typography>
          </div>
          <AddIcon className={classes.icon} />
        </div>
        <div className={classes.dotContainer}>
          <div className={classes.dot}>
            <FiberManualRecordIcon
              style={{ color: '#f1f1f1', fontSize: '18px', cursor: 'pointer' }}
            />
            <FiberManualRecordIcon
              style={{ color: '#555', fontSize: '18px', cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
