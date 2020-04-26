import React,{useEffect} from 'react';
import  logo from '../../Assets/img/sunbar.svg'
// import  user from '../../Assets/img/user.png'
// import  search from '../../Assets/img/search.svg'
import {Link} from 'react-router-dom'

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
            <Link to='/'>
                <img src={logo} alt="portal sunbar"/>
            </Link>
            <div className="drag">
                <div/>
                <div/>
            </div>
   
        </div>
       

    </div>
  );
}
