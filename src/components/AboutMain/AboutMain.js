import React from 'react'
import classes from './AboutMain.css'
import AboutUsImg from './img/aboutus.jpg'

export const AboutMain = () => (
    <div>
        <div className="row">
            <ol className="breadcrumb">
                <li><a href="/">首页</a></li>
                <li>关于我们</li>
            </ol>
        </div>

        <div className="row">
            <div className="about-context">
                <img className="img-responsive aboutus-img" src={AboutUsImg}/>
                <p>南通龙游机械有限公司是一家集研发、销售、租赁服务于一体的卷扬机及绞车的专业公司，是国内研发能力最强、品种最多、产销量最大的卷扬机及绞车的企业之一。公司中、高级技术人员20多名，主要产品分三大类，共两百八十多个品种：起重用各型号系列卷扬机；海洋作业平台及大型船舶系泊定位绞车、各种型号起重船、工程船用起货绞车、锚机系列、绞盘系列及船坞、引船系统；煤矿及有色金属矿等矿用系列绞车,并承接各种非标大吨位卷扬机及绞车的设计，销售。</p>
                <p>公司注重科技创新和技术进步，致力于大吨位高技术含量起重类卷扬机及海洋石油作业平台、大型船舶系泊定位绞车、煤矿及有色金属矿等矿用绞车和大型矿用提升机的新产品研发，公司着力于科技创新和科技进步并始终引领行业的发展。</p>
                <p>近年来，公司为国家公路、铁路、桥梁、码头、电建、水利、矿山、船舶、军事及海上石油钻井平台等工程建设提供了优质的产品配套服务，先后为中交二航局、中铁大桥局、四川路桥、杭州湾大桥及上海隧桥等大型桥梁工程提供设备；为中铁武研院、郑州大方、秦皇岛通联、武桥重工、大桥局七公司、郑州华中、河南江河、上海港机、无锡陆通、湖南天桥、湖北蒲起、中铁宝桥等十多家国内知名企业配套了近四百多台卷扬机、先后在京津、石太、合武、郑西、武广、哈大、京沪等高速铁路客运专线使用；公司致力于海洋作业平台及大型船舶系泊定位绞车的研发，消化吸收当今世界一流公司最先进技术，与世界顶级配套商合作；为大连重工起重配套的大型甲板起重机专用绞车；还先后为大连船舶重工、中远船务、烟台莱佛士、熔盛造船、浙江扬帆、山东荣喜集团、深圳船舶等国内多家大中型船企配套生产了牵引绞车及引船系统；公司生产的矿用绞车先后为新鑫矿业、铜陵有色、建井公司提供了配套。公司以尖端的技术、优质的品质、具备竞争力的价格以及覆盖全国、延伸海外的完备销售网络、强大的服务体系而深得用户的依赖。</p>
                <p>规模彰显实力，创新展示活力。雄厚的技术力量、精良的加工设备、专业化的员工团队，严格的质量控制检测手段和现代化的管理体系是企业迅猛发展的基础和确保产品品质的保障，领先一步、追求卓越、一切为用户着想是企业不断追求的目标。</p>
                <div className="row hidden">
                    <div className="col-md-4">
                        <img className="img-responsive" src="img/ko7s.jpg"/>
                    </div>
                    <div className="col-md-4">
                        <img className="img-responsive" src="img/c0on.jpg"/>
                    </div>
                    <div className="col-md-4">
                        <img className="img-responsive" src="img/d9nj.jpg"/>
                    </div>
                </div>
                <div className="row hidden">
                    <div className="col-md-12">
                        <img width="100%" className="img-responsive" src="img/oz9l.jpg"/>
                    </div>
                </div>
                <p>“十三五”期间，龙游人将继续秉承“成功建于诚信、努力终有回报”理念，肩负“创龙游国际品牌，兴中华民族工业”的使命，加快管理创新和转型升级步伐，为实现伟大的中国梦而不懈努力！</p>
            </div>
        </div>

    </div>
);

export default AboutMain
