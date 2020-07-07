import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

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
                           <p className="city">Colombo</p>
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
                                           <i className="fa fa-star">
                                           </i>
                                           <i className="fa fa-star">
                                           </i>
                                           <i className="fa fa-star">
                                           </i>
                                       </div>
                             </div>
                          </div>

                       </div>
             </div>
        </div>
    );
}

export default Profile;