import React from 'react'

import { Carousel, WingBlank } from 'antd-mobile';
// 【1】、引入banner图片文件
import Banner1 from "../assets/images/banner1.png"
import Banner2 from "../assets/images/banner2.png"
import Banner3 from "../assets/images/banner3.png"
import "../assets/styles/banner.less"

export default class Banner extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        //  【2】 、使用banner图片文件
        data: [Banner1, Banner2, Banner3],
      });
    }, 100);
  }
  render() {
    return (
      <div className="banner">
          <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="###"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                // 【3】 、指定val值
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      </div>
    );
  }
}