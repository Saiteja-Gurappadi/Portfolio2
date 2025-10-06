import React from "react";
import { FiMessageCircle } from "react-icons/fi";
const Contact = () => {
  return (
    <div className="h-[100vh]  bg-gradient-to-tl from-black via-slate-900 to-black text-white flex items-center justify-center " id="contact">
      <h1>Get in Touch</h1>
      <p>Ready To Create Something Together</p>
      <div className="flex relative z-10">
        <div className="">
          <h1>Lets Connect</h1>
          <p>
            Im Passionate about Creating Immersive Projects and would love to
            discuss your next project
          </p>
          <p>
            Email
            <br />
            saitejagvs8@gmail.com
          </p>
          <p>
            Phone
            <br />
            6305592718
          </p>
          <p>
            Location
            <br />
            Hyderabad
          </p>
          <hr />
          <p>Follow my Journey</p>
          <a href="#home">Git Hub</a>
          <a href="#home">Linked IN</a>
        </div>
        <div className="">
          <h1 className="flex items-center gap-[5px]">
            {" "}
            <FiMessageCircle /> Send a Message
          </h1>
          <div>
            <input type="text" placeholder="Name" /> <label>Name</label>
            <input type="text" placeholder="Email" /> <label>Email</label>
          </div>
          <input type="text" placeholder="subject" /> <label>subject</label>
          <label for="comments">Your Comments:</label>
          <textarea
            id="comments"
            name="user_comments"
            rows="5"
            cols="50"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
