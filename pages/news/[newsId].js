import {useRouter} from 'next/router';

// domain.com/news/something-important


function detailPages(){
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const newsId =  router.query.newsId;
 
//   Send a request to the backend API 
// To fetch The news Item with NewsId

    return (
        <h1>The detail Pages</h1>
    )
}

export default detailPages;