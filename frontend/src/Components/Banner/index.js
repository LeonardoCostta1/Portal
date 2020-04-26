import React, {useState, useEffect} from 'react';
import  {Link} from 'react-router-dom'
import './style.css';
import heart from '../../Assets/img/heart.svg'
import share from '../../Assets/img/share.svg'
import api from '../../Services/api'


export default function Banner() {

    const [resp,setResp] = useState([])
    const [feature,setFeature] = useState([])

    useEffect(()=>{
        api.get('/subfeature').then((response)=>{
            setResp(response.data)
        })
        .catch((err)=>{
            console.log(err)
        });

        api.get('/feature').then((response)=>{
            setFeature(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[]);

    console.log(feature)

  return (
    <div className="banner_wrapper" style={{ background: "linear-gradient(#,rgba(0, 0, 0, 0),#000000), url(../../Assets/img/band.jpg)"}}>

{feature.map((feature)=>{
    return(
        <div className="feature_news_info">
            <div className="feature_news_detail">
                <div className="title_news_features">
                    {feature.title}
                    <div className="description_news">
                    {feature.resume}
                </div>
                </div>
                <Link to="/news">
                    <button>ler mais</button>
                </Link>
                <div className="footer_feature_news">
                    <div className="box_author">
                        {/* <div className="photo">
                            <img src={feature.photo} alt="user"/>
                        </div>
                        <div className="author_description">
                            <div className="name">{feature.author}</div>
                            <div className="date">{feature.createdAt}</div>
                        </div> */}
                    </div>

                    <div className="like_news_wrapper">
                        <div className="like_box">
                            <img src={heart} alt="like"/>
                        </div>

                        <div className="like_box">
                            <img src={share} alt="like"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        )
    })}


        <div className="side_feature_news">

            {/* <div className="side_news_box">
                <div className="img_news">
                    <img src={women} alt="news"/>
                </div>
                <div className="resume">
                    <p>Have you already heard about the recent UI trend called “New skeuomorphism”</p>
                </div>
            </div> */}

            <div className="side_news_list_wrapper">
                {resp.map((subnews)=>{
                    return(
                        <Link to="/news">
                        <div className="side_news_list_box">
                        <div className="photo">
                            <img src={subnews.photo} alt="news"/>
                        </div>
                        <div className="resume">
                        <p>{subnews.resume}</p>
                        </div>
                    </div>
                    </Link>
                    )
                })}
            </div>
        </div>

    </div>
  );
}
