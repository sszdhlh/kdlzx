import { Icon } from 'antd-mobile'
import {NavBar, SearchBar} from 'antd-mobile'
import React, { Component } from 'react'
import Img from '../components/Img'
import "../assets/styles/header.less"

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <NavBar
          leftContent={[
              this.props.isFooter?"" : <Img key="0" src="logo.png" alt="" height={30}/>
          ]}
        // mode="light"
        // icon={<Icon type='left'/>}
        // onLeftClick={() => console.log('onLeftClick')}
        // rightContent={[
        //     <Icon key="0" type='search' style={{marginRight:'16px'}}/>,
        //     <Icon key="1" type='ellipsis'/>
        // ]}

        >
          {
            this.props.isFooter?
            <div style={{width:"100%", textAlign:"right"}}><Img key="0" src="logo.png" alt="" height={30}></Img></div>:
            <SearchBar placeholder='Search' maxLength={8}/>
          }
        </NavBar>
      </div>
    )
  }
}
