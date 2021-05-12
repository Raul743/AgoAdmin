import React from 'react'
import './style.css'
export default function teste() {
  return (
    <>
    <div class="header">
      <div class="logo">
        <div class="header__back" >
          <i class="fas fa-angle-left"></i>
        </div>
        <h3>Video Chat</h3>
      </div>
    </div>  
    <div class="main">  
    <div class="main__left">
      <div class="videos__group">
        <div id="video-grid" >

        </div>
      </div>
      <div class="options">
        <div class="options__left" >
          <div id="stopVideo" class="options__button" >
            <i class="fa fa-video-camera"></i>
          </div>
          <div id="muteButton" class="options__button" >
            <i class="fa fa-microphone"></i>
          </div>
          <div id="showChat" class="options__button" style={{display:"flex"}}>
            <i class="fa fa-comment"></i>
          </div>
        </div>
        <div class="options__right">
          <div id="inviteButton" class="options__button" >
            <i class="fas fa-user-plus"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="main__right" style={{display:"flex"}}>
      <div class="main__chat_window">
          <div class="messages">

          </div>
      </div>
      <div class="main__message_container">
        <input id="chat_message" type="text" autocomplete="off" placeholder="Type message here..." />
        <div id="send" class="options__button">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
