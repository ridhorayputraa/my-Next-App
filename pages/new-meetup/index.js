// our-domain.com/new-meetup

import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import NewMeetUpForm from '../../components/meetups/NewMeetupForm';

function NewMeetUpPage(){
 const router = useRouter();


  async  function addMeetupHandler(enterMeetupData){
        // sent request to api routes
       const response = await fetch('/api/new-meetup',{
        method: 'POST',
        body: JSON.stringify(enterMeetupData),
        headers: {
            'Content-Type': 'application/json'
        }
       });

       const data = await response.json();
       console.log(data)

       router.push('/');
    }

    return(
     <Fragment>
        <Head>
        <title>Add a New Meetup</title>
         <meta
            name='description'
            content='AD your own Meetups!'
         />
        </Head>
        <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
     </Fragment>
    )
}

export default NewMeetUpPage
