import React from "react";

import womanInCall from "../assets/desktop/image-woman-in-videocall.jpg";
import womenInChat from "../assets/desktop/image-women-videochatting.jpg";
import menInMeeting from "../assets/desktop/image-men-in-meeting.jpg";
import manTexting from "../assets/desktop/image-man-texting.jpg";

const Main = () => {
  return (
    <main>
      <div className="image-gallery">
        <img src={womanInCall} alt="Woman in video call" />
        <img src={womenInChat} alt="Women in video call while laughing" />
        <img src={menInMeeting} alt="Men in video call" />
        <img src={manTexting} alt="An Afro is texting" />
      </div>
      <div className="description column-space">
        <div className="copy">
          <p className="tagline">Built for modern use</p>
          <h2>Smarter meetings, all in one place</h2>
        </div>
        <p>
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </main>
  );
};

export default Main;
