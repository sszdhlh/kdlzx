import React, { Component } from 'react'
import "../assets/styles/homePage.less";
import Header from '../components/Header'
import Banner from '../components/Banner';
import Subject from '../components/Subject'
import { Flex, Tabs, List } from 'antd-mobile';
import Img from '../components/Img';
import "../assets/styles/sublist.less"
import "../assets/styles/subject.less"
import SubListItem from '../components/SubListItem';
import "../assets/fonts/iconfont.css"

const Item = List.Item

const tabs = [
    {title: '产品'},
    {title: '出行'},
    {title: '深度'},
]

const data = [
    {
        img: 't0110974b6f051c1e5a.gif',
        title: '用于构建用户界面的 JavaScript 库',
        des: 'React 使创建交互式 UI 变得轻而易举',
    },
    {
        img: 't0177ec8627c04e438b.gif',
        title: '小米新品发布会定档 MIX新品亮相',
        des: 'Yeelight智能LED灯丝灯发布：复古设计 亮度可调',
    },
    {
        img: 't0135a6567622271196.gif',
        title: 'iPhone11开始出货 本周五发售',
        des: '首批售卖的iPhone 11、iPhone 11 Pro和iPhone 11 Pro Max已经从工厂送出',
    },
];

const sub_list_data = [
    {
        img: 't0110974b6f051c1e5a.gif',
        title: '用于构建用户界面的 JavaScript 库',
        des: '组件逻辑使用 JavaScript 编写而非模版，你可以轻松地在应用中传递数据，并使得状态与 DOM 分离',
    },
    {
        img: 't0177ec8627c04e438b.gif',
        title: '渐进式的JavaScript 框架',
        des: '不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩',
    },
    {
        img: 't0135a6567622271196.gif',
        title: '一套框架多种平台 移动端&桌面端',
        des: '学会用 Angular 构建应用，把这些代码和能力复用在多种不同平台的应用上',
    },
    {
        img: 't0110974b6f051c1e5a.gif',
        title: '用于构建用户界面的 JavaScript 库',
        des: '组件逻辑使用 JavaScript 编写而非模版，你可以轻松地在应用中传递数据，并使得状态与 DOM 分离',
    },
    {
        img: 't0177ec8627c04e438b.gif',
        title: '渐进式的JavaScript 框架',
        des: '不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩',
    }
];

export default class HomePage extends Component {

    constructor(props){
        super(props);

        this.state = {
            subList:sub_list_data
        };
    }
    render() {
        return (
            <div className="home-page">
                {/*header*/}
                <Header/>
                {/*swiper*/}
                <Banner />
                {/*subject navigation*/}
                <Subject />
                {/*sublist*/}
                <div className="home-sub-list">
                    <div className="list-header">相关资讯</div>
                    
                    {
                        this.state.subList.map((obj, k)=>(
                            <div className="list-item">
                                <Flex>
                                    <Flex.Item className="list-item-left">
                                        <Img alt="" src={obj.img} height={80}/>
                                    </Flex.Item>
                                    <Flex.Item className="list-item-right">
                                        <h3>{obj.title}</h3>
                                        <p>{obj.des}</p>
                                    </Flex.Item>
                                </Flex>
                            </div>
                        ))
                    }
                </div>
                {/*Tab*/}
                <div className="home-tab">
                    <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
                    <div style={{ backgroundColor: '#fff' }}>
                        <Flex className="home-tab-item">
                            <Flex.Item className="home-tab-item-left">
                                <Img src="20191025091907842.gif" height={79}/>
                            </Flex.Item>
                            <Flex.Item className="home-tab-item-right">
                                <h3>
                                传三星计划为Galaxy S11配置可卷曲显示屏和可旋转摄像头
                                </h3>
                                <div className="txt_info">
                                    <i className="iconfont icon-shijian"></i>
                                    <span>2小时前</span>
                                    <div className="right">
                                        <i className="iconfont icon-liulan"></i>
                                        <span>63</span>
                                    </div>
                                </div>
                            </Flex.Item>
                        </Flex>
                        <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                        <Item arrow="horizontal" onClick={() => {}}>三星S11系列国行型号曝光 具备90Hz刷新率</Item>
                        <Item arrow="horizontal" onClick={() => {}}>华为多屏协同技术机型公布 共15款</Item>
                        <Item arrow="horizontal" onClick={() => {}}>40英寸红米电视曝光 售价可能在千元以内</Item>
                        <Item arrow="horizontal" onClick={() => {}}>华为手环4发布 售价199元</Item>
                    </div>
                    <div style={{ backgroundColor: '#fff' }}>
                        <Flex className="home-tab-item">
                            <Flex.Item className="home-tab-item-left">
                                <Img src="20191025104209413.gif" />
                            </Flex.Item>
                            <Flex.Item className="home-tab-item-right">
                                <h3>
                                传丰田计划与铃木合作在印度推出紧凑型电动汽车
                                </h3>
                                <div className="txt_info">
                                    <i className="iconfont icon-shijian"></i>
                                    <span>4小时前</span>
                                    <div className="right">
                                        <i className="iconfont icon-liulan"></i>
                                        <span>85</span>
                                    </div>
                                </div>
                            </Flex.Item>
                        </Flex>
                        <Item arrow="horizontal" onClick={() => {}}>传丰田计划与铃木合作在印度推出紧凑型电动汽车</Item>
                        <Item arrow="horizontal" onClick={() => {}}>外媒：欧盟考虑对自动驾驶政策松绑，特斯拉Autopilot有望上市</Item>
                        <Item arrow="horizontal" onClick={() => {}}>GoFun出行：已经在全国54个城市实现盈利</Item>
                        <Item arrow="horizontal" onClick={() => {}}>丰田e-4me概念车亮相2019东京车展 科技感十足</Item>
                        <Item arrow="horizontal" onClick={() => {}}>外媒：2020年第一季度结束，特斯拉上海工厂单月产能可达1.4万辆</Item>
                    </div>
                    <div style={{ backgroundColor: '#fff' }}>
                        <Flex className="home-tab-item">
                            <Flex.Item className="home-tab-item-left">
                                <Img src="20191025092136621.gif" />
                            </Flex.Item>
                            <Flex.Item className="home-tab-item-right">
                                <h3>
                                恒大新能源汽车全球研究总院落户上海 许家印出席活动
                                </h3>
                                <div className="txt_info">
                                    <i className="iconfont icon-shijian"></i>
                                    <span>3小时前</span>
                                    <div className="right">
                                        <i className="iconfont icon-liulan"></i>
                                        <span>13</span>
                                    </div>
                                </div>
                            </Flex.Item>
                        </Flex>
                        <Item arrow="horizontal" onClick={() => {}}>手机+AIOT“双引擎” 持续赋能小米各业务线</Item>
                        <Item arrow="horizontal" onClick={() => {}}>BluePrism进军中国市场  开启RPA行业新赛道</Item>
                        <Item arrow="horizontal" onClick={() => {}}>金融科技迎转型关键期，向前金服迭代升级智能风控平台“听风者”</Item>
                        <Item arrow="horizontal" onClick={() => {}}>周鸿祎：必须以作战视角看待网络安全</Item>
                        <Item arrow="horizontal" onClick={() => {}}>开启人工智能绚烂新世界 微软小冰年度大会发布Avatar Framework</Item>
                    </div>
                    </Tabs>
                </div>
                {/*footer*/}
                <Header isFooter={true}/>
                <div className="footer">
                    <p>© 2023-2023 ICP备案：xxxxxxxxx</p>
                    <p>UQCharles-Yixin Zhang</p>
                    <p>办公电话：+61-04908927302</p>
                    <p>地址：Brisbane, Australia</p>
                </div>

            </div>
        )
    }
}
