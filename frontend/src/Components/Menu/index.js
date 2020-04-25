import React,{useEffect} from 'react';
import  logo from '../../Assets/img/sunbar.svg'
import  user from '../../Assets/img/user.png'
import  search from '../../Assets/img/search.svg'

import $ from 'jquery'


import './style.css';

export default function Menu() {

    useEffect(()=>{
        $(document).ready(function($){
            $(window).scroll(function() {    
             if ($(window).scrollTop() >= 20) {
               $('.menu_wrapper').addClass('back');
             }else{
                 $('.menu_wrapper').removeClass('back');
             }
         });
       });
    },[])
  return (
    <div className="menu_wrapper">
        <div className="logo_wrapper">
            <img src={logo} alt="portal sunbar"/>
        </div>

        <div className="nav_wrapper">
            
        </div>

        <div className="user_wrapper">
            <div className="user_container">
                <div className="photo_user_logged">
                    <img src={user} alt="user"/>
                </div>
                <div className="name_user_logged">Leonardo costa</div>
            </div>

            <div className="search_container">
                <div className="search_wrapper">
                    <img src={search} alt="user"/>
                </div>
            </div>
            
        </div>

    </div>
  );
}
