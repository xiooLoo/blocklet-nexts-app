import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <div className="flex flex-row justify-between items-center">
                <p className="w-[calc(100%-100px)] whitespace-pre-wrap text-left">{bio}</p>
                <div className="columns download whitespace-nowrap w-[100px]">
                  <p className="flex flex-row justify-end">
                    <a href={resumeDownload} className="button" target="_blank"  href="https://tailwindcss.com/">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="columns contact-details">
                  <h2>专业技能</h2>
                  <div>
                    <p>
                      1. 熟练使用Vue2、Vue3、React、ReactNative、Uniapp等前端框架，对Js、NodeJs、Ts、H5、Css3基础具备丰富的使用经验；<br/> 
                      2. 熟练iOS原生开发：OC、Swift开发语言都具备丰富的项目经验； <br/>
                      3. 熟练web前端主流库：E-Charts、ElementUI、AntD、AntV.X6、Bpmn、Jest、Playwright、Mock.js，对NextJs、Webpack、Vite等包管理工具熟练； <br/>
                      4. 熟练前端低代码、组件化平台建设流程，有建设自己的UI组件库，访问地址：http://124.70.10.82:32570； <br/>
                      5. 熟练前端工程化，熟练基于Qiankun建设公司中台门户体系、微前端体系； <br/>
                      6. 熟练业务中台、技术中台建设体系，有主导建设公司自己的：流程引擎、门户引擎、可视化大屏、报表、ETL(数据资源管理平台)等赋能工具的经验； <br/>
                      7. 对Flutter、Taro等跨平台框架有项目开发经验（使用有限），对web3(去中心化理论)有了解，但没参与过具体项目； <br/>
                      8. 了解Python、Linux基础，对Three.js、UE4/5有初步了解，学习中； <br/>
                      9. 曾任前端10人团队负责人，协同建设公司git版本管理规约、团队代码质量审查体系、运维工具管理等筑垒工程项目； <br/>
                      10. 有外企工作经验，English资料、文档无障碍阅读，可进行English基本沟通工作，持续学习中。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
