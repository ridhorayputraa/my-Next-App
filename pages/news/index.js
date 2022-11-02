// Our-Domain.com/news
import Link from "next/link";
import { Fragment } from "react";


function NewsPage(){
    return (
         <Fragment>
         {/* Fraqgment -> Unruk bisa banyak baris di NEXT */}
        <h1>The News Page</h1>
        <ul>
           <li>
            <Link href='news/next-js-is-great' >
                Next Js is Great FrameWork
            </Link>
           </li>
           <li>Something Else</li>
           <li>Welcome</li>
           <li>yaudah</li>
        </ul>
        </Fragment>
    )
    }
    
    export default NewsPage;