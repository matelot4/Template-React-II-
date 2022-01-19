import classes from './ProfPref.module.css';

function ProfPref(props) {
  return (
    <>
      <button className={classes.btn} onClick={() => props.setProf('Gabriel')}>Gabriel</button>
      <button className={classes.btn} onClick={() => props.setProf('Rogue')}>Rogue</button>
      <button className={classes.btn} onClick={() => props.setProf('Slughorn')}>Slughorn</button>
    </>
  );
}

export default ProfPref;
