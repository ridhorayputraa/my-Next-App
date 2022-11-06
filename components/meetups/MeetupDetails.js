import classes from './MeetupDetails.module.css';

function MeetupDetails(props) {
return(
<section className={classes.detail} >
    <img src={props.image}
        alt={props.title} />
    <h1>{props.title}</h1>
    <address>{props.address}</address>
    <p>{props.desc}n</p>
</section>
)
}

export default MeetupDetails;