"use client"

import React, { Component, useState, useEffect } from "react";
import { Fade, Slide } from "react-reveal";
import { styled } from '@mui/system';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Box = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
})

const Contact = (props) => {
  if (!props.data) return null;

  const [profile, setProfile] = useState({ userName: props.data.name, email: props.data.email, phone: props.data.phone, subject: props.data.subject, message: props.data.contactmessage });
  const [isEditing, setIsEditing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [street, setStreet] = useState(props.data.street);
  const [city, setCity] = useState(props.data.city);
  const [state, setState] = useState(props.data.state);
  const [zip, setZip] = useState(props.data.zip);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/profile`).then(res => {
      setProfile(res.data || { userName: '', email: '', phone: '', subject: '', message: '' });
    })
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value })
  }

  const handleSave = () => {
    try {
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/profile`, profile).then(res => {
        if (res && res.data && res.data.id) {
          setIsEditing(false);
          setProfile(res.data);
          setIsSuccess(true)
        } else {
          setIsSuccess(false)
        }
      })
    } catch (error) {
      setIsSuccess(false)
    }
  }

  const handleCancel = () => {
    setIsEditing(false);
    setIsSuccess(false)
  }

  const handleClose = () => {
    setIsSuccess(false)
  }

  return (
    <section id="contact">
      <Snackbar
        open={isSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>Success</AlertTitle>
          用户信息已修改成功。
        </Alert>
      </Snackbar>
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{ profile.message }</p>
          </div>
        </div>
      </Fade>

      <div className="row">
        <Slide left duration={1000}>
          <div className="eight columns">
            {isEditing ? (
                  <div>
                    <div>
                      <label htmlFor="userName">
                        Username <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        value={profile.userName}
                        size="35"
                        id="userName"
                        name="userName"
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="email">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        value={profile.email}
                        size="35"
                        id="email"
                        name="email"
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone">
                        Phone <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        value={profile.phone}
                        size="11"
                        id="phone"
                        name="phone"
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        value={profile.subject}
                        size="35"
                        id="subject"
                        name="subject"
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="message">
                        Message <span className="required">*</span>
                      </label>
                      <textarea
                        cols="50"
                        rows="15"
                        value={profile.message}
                        id="message"
                        name="message"
                        size="300"
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="flex flex-row justify-start">
                      <button
                        onClick={handleSave}
                        className="submit"
                      >
                        Submit
                      </button>
                      <button
                        onClick={handleCancel}
                        className="cancel cursor-pointer text-[#5A6275] border-[1px] border-solid border-[#0D0D0D]  ml-3 px-6 py-3 tracking-[3px]"
                      >
                        Cancel
                      </button>
                      <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                      </span>
                    </div>
                  </div>
            ) : (
                    <div>

                      <Box>
                        <label htmlFor="contactName">
                          Username <span className="required">*</span>
                        </label>
                        <p className="text-gray-700 text-left">{profile.userName}</p>
                      </Box>

                      <Box>
                        <label htmlFor="contactEmail">
                          Email <span className="required">*</span>
                        </label>
                        <p className="text-gray-700">{profile.email}</p>
                      </Box>

                      <Box>
                        <label htmlFor="contactPhone">
                          Phone <span className="required">*</span>
                        </label>
                        <p className="text-gray-700">{profile.phone}</p>
                      </Box>

                      <Box>
                        <label htmlFor="contactSubject">Subject</label>
                        <p className="text-gray-700">{profile.subject}</p>
                      </Box>

                      <Box>
                        <label htmlFor="contactMessage">
                          Message <span className="required">*</span>
                        </label>
                        <div>
                          <span className="text-gray-700 text-wrap">{profile.message}</span>
                        </div>
                      </Box>

                      <Box>
                        <button
                          onClick={() => setIsEditing(true)}
                          className="cursor-pointer text-[#FFF] bg-[#0D0D0D] border-[1px] border-solid border-[#0D0D0D] mt-3 ml-[26%] px-6 py-3 tracking-[3px]"
                        >
                          Edit
                        </button>
                        <span id="image-loader">
                          <img alt="" src="images/loader.gif" />
                        </span>
                      </Box>
                    </div>
              )}



            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>
        </Slide>

        <Slide right duration={1000}>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {profile.userName}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>{profile.phone}</span>
              </p>
            </div>

            <div className="widget widget_tweets">
              <h4 className="widget-title">Latest Tweets</h4>
              <ul id="twitter">
                <li>
                  <span>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum
                    <a href="./">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="./">2 Days Ago</a>
                  </b>
                </li>
                <li>
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi
                    <a href="./">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="./">3 Days Ago</a>
                  </b>
                </li>
              </ul>
            </div>
          </aside>
        </Slide>
      </div>
    </section>
  );
}

export default Contact;
