import React from 'react'
import classes from './ServiceMain.css'
import pic1 from './img/1_m3i6.jpg'
import {Link} from 'react-router'

export const ServiceMain = () => (
    <div>
        <div className="row">
            <ol className="breadcrumb">
                <li><a href="/">首页</a></li>
                <li><Link to="/Services">服务中心</Link></li>
                <li>服务解决方案</li>
            </ol>
        </div>

        <div className="row">
            <div className="services-context">
                <img width="100%" src={pic1} className="img-responsive"/>
                <div className="page-header">
                    <h3>我们的建议值得信赖</h3>
                </div>
                <p>您不必为了充分利用自身设备而必须成为卷扬机专家。您可直接受益于我们近20多年的卷扬机生产操作经验而累积的专业知识。</p>

                <div className="page-header">
                    <h3>具体分析</h3>
                </div>
                <p>您想充分利用您的装置和设备，专心地发展您的核心业务吗？意外停工和生产损失是不是很麻烦？您是否将员工的安全放在首位，并遵守法律？如果答案是肯定的，那么请您依靠我们的专业知识来帮助您分析具体情况和识别潜在可改进的方面。</p>

                <div className="page-header">
                    <h3>分析和咨询</h3>
                </div>
                <p>我们的服务顾问拥有广泛的行业专业知识。他们提供给您合适的解决方案，以满足您的企业、环境及业务需求，达到您的目标，并为您解决难题。他们能在您设备的整个生命周期中随时提供协助。</p>

                <div className="page-header">
                    <h3>更多优点</h3>
                </div>
                <ul>
                    <li>省时省力：我们为您编制分析报告并制定改进建议书，那样您就能专心于您的核心业务。</li>
                    <li>降低成本及提高生产率：我们协助您充分使用卷扬机和设备，提高设备可用性。</li>
                    <li>安全及遵守法律：我们保证遵循最高的安全标准，遵守法律 - 让您高枕无忧。</li>
                </ul>
            </div>
        </div>

    </div>
);

export default ServiceMain
