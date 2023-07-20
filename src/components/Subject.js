import React, { Component } from 'react'
import { Flex} from 'antd-mobile';
import "../assets/styles/subject.less"


export default class Subject extends Component {
    render() {
        return (
            <div class="subject">
                <Flex>
                    <Flex.Item>
                        <a href="###">
                            <i style={{backgroundPositionX:0}}></i>
                            <p>Jave EE</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="###">
                            <i style={{backgroundPositionX:-50}}></i>
                            <p>全栈UI设计</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="###">
                            <i style={{backgroundPositionX:-100}}></i>
                            <p>H5前端</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="###">
                            <i style={{backgroundPositionX:-150}}></i>
                            <p>Python</p>
                        </a>
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <a href="###">
                            <i style={{backgroundPositionX:-200}}></i>
                            <p>iOS</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="###">
                            <i style={{backgroundPositionX:-250}}></i>
                            <p>大数据</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a href="###">
                            <i style={{backgroundPositionX:-300}}></i>
                            <p>C++</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item></Flex.Item>
                </Flex>
            </div>
        )
    }
}