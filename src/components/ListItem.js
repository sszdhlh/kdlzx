import React, { Component } from 'react'
import Img from "./Img"
import { Flex } from 'antd-mobile';
export default class ListItem extends Component {
    render() {
        return (

            <div className="sub_list_item">
                <Flex>
                    <Flex.Item className="sub_list_left">
                        <Img src={this.props.imgSrc} alt=""/>
                    </Flex.Item>
                    <Flex.Item className="sub_list_right">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.des}</p>
                    </Flex.Item>
                </Flex>    
            </div>

        )
    }
}