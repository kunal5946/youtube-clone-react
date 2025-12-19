import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from'../../assets/user_profile.jpg'
import {API_KEY} from '../../data.js'
import {useState,useEffect} from 'react'
import moment from 'moment'
import {value_converter} from '../../data.js'
import { useParams } from 'react-router-dom'

const PlayVideo = () => {
    const {videoId}=useParams();
    //for video data
    const[apidata,setapidata]=useState(null);
    //for description resizing
    const[showMore,setShowMore]=useState(false);
    //for channel data
    const[channelData,setChannelData]=useState(null);

    //list of comments
    const[comments,setComments]=useState([]);


    const fetch_video_data= async ()=>{
        const video_data_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(video_data_url).then(res=>res.json()).then(data=>setapidata(data.items[0]))

    }

    //here the [] means we call the fetch_video_data function only when the component renders ,so only once unlike feed change
    useEffect(
        ()=>{fetch_video_data();},[videoId]
    )

    const fetchOtherData=async()=>{
        const channel_data_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`
        await fetch(channel_data_url).then(response=>response.json()).then(data=>setChannelData(data.items[0]))
        
        const comments_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
        await fetch(comments_url).then(response=>response.json()).then(data=>setComments(data.items))
        
    }
    //channel data should be called after fetching video data so change useeffect dependency is updation of apidata

    useEffect(
        ()=>{fetchOtherData();} ,[apidata]
    )

  return (
    <div className='play-video'>
       { /* <video src={video1} controls autoplay></video> */}

       <iframe width="815" height="458" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apidata?apidata.snippet.title:"title here"}</h3> 

        <div className="play-video-info">
            <p>{value_converter(apidata?apidata.statistics.viewCount:"view count")} views &bull; {moment(apidata?apidata.snippet.publishedAt:"date here").fromNow()}</p>
            <div>
                <span>  <img src={like} alt=""/>{value_converter(apidata?apidata.statistics.likeCount:"like count")} likes</span>
                <span>  <img src={dislike} alt=""/> </span>
                <span>  <img src={share} alt=""/>   share   </span>
                <span>  <img src={save} alt=""/>    save    </span>
            </div>
        </div>

        <hr/>
        
        <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.default.url:{jack}} alt=""/>
            <div>
                <p>{apidata?apidata.snippet.channelTitle:"channel name"}</p>
                <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} subscribers </span>
            </div>
            <button>subscribe</button>
        </div>

        <div className='vid-description'>
            <p>{apidata?(showMore?apidata.snippet.description:apidata.snippet.description.slice(0,150)+"..."):"video description"}</p>
            
            <span onClick={()=>setShowMore(prev=>!prev)} className="show-more">{showMore?"show less":"show more"}</span>           
            
            
            <hr/>
            <h4>{apidata?value_converter(apidata.statistics.commentCount):"comment-count"} comments</h4>

            {   comments.map((comment,index)=>{
                    return(
                        <div key={index} className='comment'>
                        <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt=""/>
                        <div>
                         <h3>{comment.snippet.topLevelComment.snippet.authorDisplayName}<span>{moment(comment.snippet.topLevelComment.publishedAt).fromNow()}</span></h3>
                        <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>

                        <div className="comment-action">
                        <img src={like} alt=""/>
                        <span>{comment.snippet.topLevelComment.snippet.likeCount}</span>
                        <img src={dislike} alt="" />

                        </div>
                    
                        </div>
                        </div>
                    )
                }

            )
            }

           
           
        </div>
    </div>
  )
}

export default PlayVideo