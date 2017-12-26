import React from 'react'
import classes from './ContactMain.css'
import imgcontact from './img/1_51w6_3vwl.png'
import baiduMapImg from './img/20171226105528.png'

export const AboutMain = () => (
    <div>
        <div className="row">
            <ol className="breadcrumb">
                <li><a href="/">首页</a></li>
                <li>联系我们</li>
            </ol>
        </div>
        <div className="row">
            <div className="contact-context">
                <div className="page-header">
                    <h3>南通龙游机械有限公司</h3>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <table  border="0" width="100%">
                            <tr><td colspan="2">公司地址：江苏省如皋市城南街道高新区</td></tr>
                            <tr>
                                <td colspan="1">技术及业务咨询：15996604333</td>
                                <td colspan="1">联系人:缪经理</td>
                            </tr>
                            <tr>
                                <td>传真：0513-87260058</td>
                                <td>邮箱：miaozijun058@aliyun.com</td>
                            </tr>
                            <tr>
                                <td>商务QQ：46928680</td>
                                <td>人力资源电话：0513-87260058</td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-md-3">
                        <img src={imgcontact} className="img-responsive"/>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="row map">
            <a href="https://j.map.baidu.com/HViRN" target="_blank">
                <img src={baiduMapImg} alt="百度地图" className="responsive-img"/>
            </a>
        </div>
    </div>
);

export default AboutMain
