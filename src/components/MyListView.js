import React, { Component } from 'react'
import { Flex, ListView } from 'antd-mobile';
import SubListItem from './SubListItem';
import Img from './Img';
import "../assets/styles/sublist.less"

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

export default class MyListView extends Component {
    constructor(props) {
        super(props);
        //定义数据源
        const dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,  // 设置行数据变化的规则
        });
    
        //定义初始状态
        this.state = {
          dataSource,
          isLoading: true,
        };
      }

      componentDidMount() {
        // 模拟ajax请求获取数据
        setTimeout(() => {
            // this.rData = genData();
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(data),  //把数据对象克隆到listview数据源中
              isLoading: false,   //加载状态
            });
          }, 600);
      }
      
    
    renderRow(rowData){
        //每一行的渲染函数
        
        return <div>
                    <Flex>
                        <Flex.Item className="list-item-left">
                            <Img alt="" src={rowData.img} height={80}/>
                        </Flex.Item>
                        <Flex.Item className="list-item-right">
                            {rowData.title}
                            {rowData.des}
                        </Flex.Item>
                    </Flex>
                </div>

    }

    render() {

        
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                // renderHeader={() => <span>相关详情</span>}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                // {this.state.isLoading ? 'Loading...' : 'Loaded'}
                // </div>)}
                
                // renderSeparator={separator}
                className="am-list"
                // pageSize={4}
                useBodyScroll
                // onScroll={() => { console.log('scroll'); }}
                // scrollRenderAheadDistance={500}
                // 滚动到底部执行onEndReached方法
                // onEndReached={this.onEndReached}
                // onEndReachedThreshold={10}
            />
        )
    }
}