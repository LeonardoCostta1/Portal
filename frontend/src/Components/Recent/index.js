import React,{useState,useEffect} from 'react';
import api from '../../Services/api'
import './style.css';
import like from '../../Assets/img/heart.svg'
import share from '../../Assets/img/share.svg'

export default function Recent() {

    const [news,setNews] = useState([])

    useEffect(()=>{
        api.get('/news').then((response)=>{
            setNews(response.data)

        }).catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <div className="recent_wrapper">
          <div className="title_wrapper">ultimas <span>noticias</span></div>
        <div className="recent_box_news">
            {news.map((news)=>{
                return(
                    <div className="box_news">
                        <div className="img">
                            <img src={news.photo}alt="news"/>
                        </div>
                        <div className="description">
                            <div className="title_news">{news.title}</div>
                            <div className="resume_news">{news.resume}</div>
                            <div className="footer_news">
                                <div className="left">{news.createdAt}</div>
                                <div className="right">
                                    <div className="like_wrapper">
                                        <img src={like} alt="like this"/>
                                    </div>

                                    <div className="share_wrapper">
                                        <img src={share} alt="like this"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  );
}
