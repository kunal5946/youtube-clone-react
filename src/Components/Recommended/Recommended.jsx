import React from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import {value_converter,API_KEY } from '../../data.js'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
const Recommended = ({categoryId}) => {
    const[apidata,setapidata]=useState([]);
    const fetchdata=async()=>{
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=40&videoCategoryId=${categoryId}&key=${API_KEY}`

        await fetch(url).then(response=>response.json()).then(data=>setapidata(data.items))
    }

    useEffect(()=>{
        fetchdata();
        },[categoryId]

    )

    return (
  <div className='recommended'>
    {
      apidata.map((video, index) => {
        return (

          <Link to={`/video/${video.snippet.categoryId}/${video.id}`} className="side-video-list">
            <img src={video.snippet.thumbnails.default.url} alt=""/>
            <div className="vid-info">
              <h4>{video.snippet.title}</h4>
              <p>{video.snippet.channelTitle}</p>
              <p>{value_converter(video.statistics.viewCount)+ "views"}</p>
            </div>
          </Link>
        )
      })
    }
  </div>
)

}

export default Recommended