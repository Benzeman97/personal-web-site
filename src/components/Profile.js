import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../css/style.css';

function Profile(props) {
    return (
        <div className="container">
             <div className="profile-header">
                     <div className="profile-img">
                        <img src="/image/static/nafaz.png" alt="profile"/>
                     </div>
                     <div className="profile-nav-info">
                       <h3 className="user-name">Nafaz Benzema</h3>
                       <div className="address">
                           <p className="city">Colombo,</p>
                          <span className="country">
                                  Sri Lanka
                          </span>
                       </div>
                     </div>
                     <div className="profile-option">
                         <div className="notification">
                           <i className="fa fa-bell"></i>
                           <span className="alert-message">
                                    1
                           </span>
                         </div>
                     </div>
             </div>
             <div className="main-bd">
                       <div className="left-side">
                          <div className="profile-side">
                             <p className="mobile-no">
                          <i className="fa fa-phone"></i>
                                +94 071 645 162
                             </p>
                             <p className="user-mail">
                         <i className="fa fa-envelope"></i>
                             nafazbenzema@gmail.com
                             </p>

                             <div className="user-bio">
                                     <p className="bio">
                                     sddddddddddddddddddddddd sdddddddddddddddddddddddddddddddd
                                     sddsdserrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
                                     ddfffffffffffffffffffffffffffffffffffffffffffw
                                     dsfdddddddddddddddddddddfd jjhjj
                                     </p>
                             </div>
                             <div className="profile-btn">
                                 <button className="chatbtn">
                                   <i className="fa fa-comment"></i>
                                    Chat
                                 </button>
                                 <button className="createbtn">
                                    <i className="fa fa-plus"></i>
                                    Create
                                 </button>
                             </div>
                             <div className="user-rating">
                                       <h3 className="rating">4.5</h3>
                                       <div className="rate">
                                           <div className="stars">
                                           <i className="fa fa-star">
                                           </i>
                                           <i className="fa fa-star">
                                           </i>
                                           <i className="fa fa-star">
                                           </i>
                                           </div>
                                           <span className="no-user">
                                                <span>
                                                    123
                                                </span>
                                                &nbsp; &nbsp; reviews
                                           </span>
                                       </div>
                             </div>
                          </div>

                       </div>

                       <div className="right-side">
                           <div className="nav">
                                  <ul>
                                      <li onClick="tabs(0)" className="user-post-active"></li>
                                      <li onClick="tabs(1)" className="user-review"></li>
                                      <li onClick="tabs(2)" className="user-setting"></li>
                                  </ul>
                           </div>
                           <div className="profile-body">
                               <div className="profile-post-tab">
                            <h1>Your Post</h1>
                            <p>as sdsdsdds fdfddffd fhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhdddddddddddddddd dsfdddddddddddddddddddddfd
                                dddddddddddddddddddddddddddd ffffffffffffffffffffffffffffffffff          fffffffffffffffffffff 
                                sddddddddddddddddddddddddddddddddddddddddddd
                            </p>
                               </div>
                               <div className="profile-review-tab">

                               <h1>User Reviews</h1>
                            <p>as sdsdsdds fdfddffd fhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhdddddddddddddddd dsfdddddddddddddddddddddfd
                                dddddddddddddddddddddddddddd ffffffffffffffffffffffffffffffffff          fffffffffffffffffffff 
                                sddddddddddddddddddddddddddddddddddddddddddd
                            </p>
                               </div>
                               <div className="profile-setting-tab">
                               <h1>Account Setting</h1>
                            <p>as sdsdsdds fdfddffd fhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhdddddddddddddddd dsfdddddddddddddddddddddfd
                                dddddddddddddddddddddddddddd ffffffffffffffffffffffffffffffffff          fffffffffffffffffffff 
                                sddddddddddddddddddddddddddddddddddddddddddd
                            </p>
                               </div>
                           </div>
                       </div>
             </div>
        </div>
    );
}

export default Profile;