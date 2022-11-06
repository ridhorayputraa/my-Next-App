import { useEffect } from 'react';
import MeetUpList from '../components/meetups/MeetupList';



// This dummy data
const DUMMY_MEETUPS = [{
   id: 'm1',
   title: 'A First Meetup',
   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
   address: 'some addres 5, 123456 Some City',
   description : 'This is a first mettup!'
},
{
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'some addres 5, 123456 Some City',
    description : 'This is a second mettup!'
 }

]


function HomePage(props){


    return (

     <MeetUpList meetups={props.meetups} />

)
}


// Cara baru untuk mengenrate setiap request
// export async function getServerSideProps (context) {
//    // The diferennce to get static props => this function will now
//    // not run during the build procces but instead on the server after deployment
//    const req = context.req;
//    const rest = context.res;

   
//    // me return object
//    // karena semuanya hanya untuk mendapatkan props dari component page ini
//    return{
//       props: {
//          meetups : DUMMY_MEETUPS
//       }
//    };
// }


// GETSERVERSIDE PROPS VS GETSTATIC PROPS


// Spesial function for waiting data  to fetch
export async function getStaticProps(){
// Fetch data grom an API

// Return the Object
return{
   props: {
      meetups: DUMMY_MEETUPS
   },
   revalidate: 1
};

}

export default HomePage;