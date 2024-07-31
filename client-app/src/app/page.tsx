"use client"

import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  const [resumeData, setresumeData] = useState({
    "main": {
      "name":"Blocklet-Next-App",
      "description":"功能要求：\n1. 主界面展示用户 Profile 信息，展示用户名、邮箱、手机号等字段（无需考虑用户登录、退出等流程）\n2. 主界面提供编辑按钮，点击后切换到编辑模式，编辑模式下可修改所有字段，保存后会切换为展示模式展示最新的数据\n3. 用户 Profile 持久化保存到后端，建议使用轻量的数据库，可自行选择 library",
      "image":"profilepic.jpg",
      "bio":"TODO：\n1. 基础资料信息...\n2. 工作经历\n3. ...",
      "contactmessage":"Here is where you should write your message to readers to have them get in contact with you.",
      "email": "yy1209gogo@163.com",
      "phone": "151-9340-4196",
      "github":"https://github.com/xiooLoo/blocklet-nexts-app.git",
      "project":"https://github.com/xiooLoo/blocklet-nexts-app.git",
      "address":{
        "street":"Xi'An",
        "city":"Xi'An",
        "state":"610001",
        "zip": "610001"
      },
      "website": "https://github.com/xiooLoo",
      "resumedownload":"https://github.com/xiooLoo",
      "social":[
        {
          "name":"facebook",
          "url":"https://github.com/xiooLoo/blocklet-nexts-app.git",
          "className":"fa fa-facebook"
        },
        {
          "name":"twitter",
          "url":"https://github.com/xiooLoo/blocklet-nexts-app.git",
          "className":"fa fa-twitter"
        },
        {
          "name":"linkedin",
          "url":"https://github.com/xiooLoo/blocklet-nexts-app.git",
          "className":"fa fa-linkedin"
        },
        {
          "name":"instagram",
          "url":"https://github.com/xiooLoo/blocklet-nexts-app.git",
          "className":"fa fa-instagram"
        },
        {
          "name":"github",
          "url":"https://github.com/xiooLoo/blocklet-nexts-app.git",
          "className":"fa fa-github"
        }
      ]
    },
    "resume":{
      "skillmessage":"Here can create a short write-up of your skills to show off to employers",
      "education":[
        {
          "school":"西安城市建设学院",
          "degree":"Masters in Beer tasting",
          "graduated":"June 2016",
          "description":"Describe experience at school, what you learned, what useful skills you have acquired etc."
        },
        {
          "school":"School #1 Maybe College?",
          "degree":"What did you study 101",
          "graduated":"March 2013",
          "description":"Describe experience at school, what you learned, what useful skills you have acquired etc."
        }
      ],
      "work":[
        {
          "company":"科锐国际",
          "title":"Senior UX God ",
          "years":"March 2018 - Present",
          "description":"Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."
        },
        {
          "company":"易迅通科技有限公司",
          "title":"Junior bug fixer",
          "years":"March 2017 - February 2018",
          "description":"Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."
        }
      ],
      "skills":[
        {
          "name":"VueJs",
          "level":"90%"
        },
        {
          "name":"ReactJs",
          "level":"80%"
        },
        {
          "name":"NodeJs",
          "level":"80%"
        },
        {
          "name":"OC/Swift",
          "level":"80%"
        },
        {
          "name":"Uniapp",
          "level":"80%"
        },
        {
          "name":"Flutter",
          "level":"40%"
        },
        {
          "name":"JAVA",
          "level":"40%"
        }
      ]
    },
    "portfolio":{
      "projects": [
        {
          "title":"thermofisher.com",
          "category":"My Travel Blog for my post-university travels",
          "image":"01.jpg",
          "url":"https://www.thermofisher.cn/cn/zh/home.html"
        },
        {
          "title":"易迅通 01",
          "category":"(offline now) A fighting gear company I started",
          "image":"02.jpg",
          "url":"https://121.36.38.202/"
        },
        {
          "title":"易迅通 02",
          "category":"Website I built for a restaurant I like in Thailand",
          "image":"03.jpg",
          "url":"https://121.36.38.202/"
        },
        {
          "title":"易迅通 03",
          "category":"A React based resume website template",
          "image":"04.jpg",
          "url":"https://121.36.38.202/"
        },
        {
          "title":"易迅通 04",
          "category":"(MVP Only) A React and Meteor based chat University project.",
          "image":"05.jpg",
          "url":"https://github.com/xiooLoo"
        },
        {
          "title":"Test title 001",
          "category":"My Travel Blog for my post-university travels",
          "image":"06.jpg",
          "url":"https://github.com/xiooLoo"
        },
        {
          "title":"Test title 002",
          "category":"(offline now) A fighting gear company I started",
          "image":"01.jpg",
          "url":"https://github.com/xiooLoo"
        },
        {
          "title":"Test title 003",
          "category":"Website I built for a restaurant I like in Thailand",
          "image":"02.jpg",
          "url":"https://github.com/xiooLoo"
        },
        {
          "title":"Test title 004",
          "category":"Website I built for a restaurant I like in Thailand",
          "image":"03.jpg",
          "url":"https://github.com/xiooLoo"
        },
        {
          "title":"Test title 005",
          "category":"A React based resume website template",
          "image":"04.jpg",
          "url":"https://github.com/xiooLoo"
        },
        {
          "title":"Test title 006",
          "category":"(MVP Only) A React and Meteor based chat University project.",
          "image":"05.jpg",
          "url":"https://github.com/xiooLoo"
        },
        {
          "title":"Test title 007",
          "category":"My Travel Blog for my post-university travels",
          "image":"06.jpg",
          "url":"https://github.com/xiooLoo"
        }
      ]
    }
  }
  );

  return (
    <main className="flex min-h-screen flex-col items-start justify-start w-screen">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </main>
  );
}
