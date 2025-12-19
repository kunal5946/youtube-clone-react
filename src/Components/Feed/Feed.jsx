import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import {Link} from 'react-router-dom'
import {API_KEY} from '../../data.js'
import {useState,useEffect} from 'react'
import {value_converter} from '../../data.js'
import moment from 'moment'


const Feed = ({category}) => {
    const [data_arr,setData]=useState([]);

    const fetchData= async()=>{

        const videolist_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videolist_url).then(response=>response.json()).then(data=>setData(data.items))
    }

    useEffect(()=>{
        fetchData();
        },[category]
    )

  return (
    <div className="feed">
        {   data_arr.map((current_item,index)=>{
                return(
                        //the item.snippet.categoryId and item.id are category id and video id and on click and when change in url we use useparam to extract videoid and categoryid and pass them to playvideo component
                    <Link to={`video/${current_item.snippet.categoryId}/${current_item.id}`} className="card">
                        <img  src={current_item.snippet.thumbnails.medium.url} alt= ""/>
                        <h2>{current_item.snippet.title}</h2>
                        <h3>{current_item.snippet.channelTitle}</h3>
                        <p>{value_converter(current_item.statistics.viewCount)} views &bull; {moment(current_item.snippet.publishedAt).fromNow() }</p>
                    </Link>

                     )
                }
            )
        }
        
       
    </div>
  )
}

export default Feed