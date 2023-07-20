import React, { Component } from 'react'
import { Flex } from 'antd-mobile'
import Img from './Img'
import { obj } from 'prop-types'

export default class SubListItem extends Component {
  render() {
    return (
      <Flex>
        <Flex.Item className="list-item-left">
            <Img alt="" src={obj.img} height={80}/>
        </Flex.Item>
        <Flex.Item className="list-item-right">
            <h3>{obj.title}</h3>
            <p>{obj.des}</p>
        </Flex.Item>
    </Flex>
    )
  }
}
