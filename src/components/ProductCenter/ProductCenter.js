import React from 'react'
import classes from './ProductCenter.css'
import pic1 from './img/img_3519.jpg'
import pic2 from './img/JM大容量摩擦式卷扬机.jpg'
import pic3 from './img/JM电控慢速大吨位卷扬机.jpg'
import pic4 from './img/JMW电控慢速卷扬机.jpg'

import pic5 from './img/JKD电控快速卷扬机.jpg'
import pic6 from './img/JK电控高速卷扬机.jpg'
import pic7 from './img/JK电控快速小吨位卷扬机.jpg'

import pic8 from './img/JT调速卷扬机.jpg'
import pic9 from './img/电动调速卷扬机1.jpg'
import pic10 from './img/电动调速卷扬机2.jpg'
import pic11 from './img/电动调速卷扬机3.jpg'

import pic12 from './img/2JKL手控双筒快速溜放卷扬机.jpg'
import pic13 from './img/JKLA手控快速溜放卷扬机.jpg'
import pic14 from './img/JKL手控快速溜放卷扬机.jpg'

import pic15 from './img/CK冲孔桩机.jpg'


export const ProductCenter = (props) => (
    <div className="container product-context">
        <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active"><a href="#tab1" aria-controls="tab1" role="tab"
                                                          data-toggle="tab">JM系列卷扬机</a></li>
            <li role="presentation"><a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab">JKD系列卷扬机</a></li>
            <li role="presentation"><a href="#tab3" aria-controls="tab3" role="tab" data-toggle="tab">JT调速卷扬机</a></li>
            <li role="presentation"><a href="#tab4" aria-controls="tab4" role="tab" data-toggle="tab">JKL系列卷扬机</a></li>
            <li role="presentation"><a href="#tab5" aria-controls="tab5" role="tab" data-toggle="tab">CK打桩机卷扬机</a></li>
        </ul>
        <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="tab1">
                <div className="row masonry-container">
                    <div className="col-sm-6 col-md-4 masonry-item">
                        <div className="thumbnail">
                            <img src={pic1} alt="..."/>
                            <div className="caption">
                                <h3>JMW系列电控慢速卷扬机</h3>
                                <p>本系列卷扬机主要用于各种大型、特大型砼、钢结构及钢索、钢缆的长距离牵引及大行程起吊。其特点钢丝绳速度恒定，起吊平稳。适用于各种桥梁、港口、码头等路桥工程施工及大型厂矿、电力工程设备安装。</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 masonry-item">
                        <div className="thumbnail">
                            <img src={pic2} alt="..."/>
                            <div className="caption">
                                <h3>JMM系列大容量摩擦式卷扬机</h3>
                                <p>本系列卷扬机主要用于各种大型、特大型砼、钢结构及钢索、钢缆的长距离牵引及大行程起吊。其特点钢丝绳速度恒定，起吊平稳。适用于各种桥梁、港口、码头等路桥工程施工及大型厂矿、电力工程设备安装。</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 masonry-item">
                        <div className="thumbnail">
                            <img src={pic3} alt="..."/>
                            <div className="caption">
                                <h3>JM系列电控慢速大吨位卷扬机</h3>
                                <p>本系列卷扬机主要用于各大型、特大型砼、钢结构及机械设备的安装和拆卸。其结构特点是钢丝绳排列有序、起吊安全可靠。适用于各种桥梁、港口、码头等路桥工程及大型厂矿工程设备安装。</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 masonry-item">
                        <div className="thumbnail">
                            <img src={pic4} alt="..."/>
                            <div className="caption">
                                <h3>JM系列电控慢速</h3>
                                <p>本系列为齿轮减速机传动卷扬机。主要用于卷扬、拉卸、拖曳重物。如各种大中型砼、钢结构及机械设备的安装和拆卸。适用于建筑安装公司、矿区、工厂的土木建筑及安装工程。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="tab2">
                <div className="row masonry-container">
                    <div className="col-sm-6 col-md-4 masonry-item">
                        <div className="thumbnail">
                            <img src={pic5} alt="..."/>
                            <div className="caption">
                                <h3>JKD系列电控快速卷扬机</h3>
                                <p>
                                    本系列卷扬机主要用提升、牵移、装卸重物，如各种大中型砼、钢结构及机械设备的安装和移动，适用于建筑安装公司、厂矿的土木建筑工程及桥梁施工。特别适用于配套起重机主卷扬机起重用。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 masonry-item">
                        <div className="thumbnail">
                            <img src={pic6} alt="..."/>
                            <div className="caption">
                                <h3>JK电控高速卷扬机</h3>
                                <p>
                                    本系列卷扬机主要用于建筑施工中的物料提升，是井架，龙门架专用提升卷扬机。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 masonry-item">
                        <div className="thumbnail">
                            <img src={pic7} alt="..."/>
                            <div className="caption">
                                <h3>JK电控快速小吨位卷扬机</h3>
                                <p>
                                    本系列卷扬机主要用于提升、迁移重物。适用于建筑，矿区及工厂的土木建筑施工工程及小型设备安装。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="tab3">
                <div className="row masonry-container">
                    <div className="col-sm-6 col-md-4 masonry-item">
                        <div className="thumbnail">
                            <img src={pic8} alt="..."/>
                            <div className="caption">
                                <h3>JT系列调速卷扬机</h3>
                                <p>本系列卷扬机主要用提升、牵移重物，如各种大型砼、钢结构、机械设备的安装及施工用升降吊蓝。其结构特点：速度为变频无级调速，高、低速两级制动，使用方便，安全可靠。</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 masonry-item">
                        <div className="thumbnail">
                            <img src={pic9} alt="..."/>
                            <div className="caption">
                                <h3>电动调速卷扬机(一)</h3>
                                <p>该系列卷扬机在液压卷扬机基础上，为了满足国内电动提架设备的要求而专门设计。该机采用带制动的起重变频电机驱动，进口内藏式硬齿面行星减速机减速，具有体积小、重量轻、控制方便、无级调速范围大等优点，使用较为广泛。</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 masonry-item">
                        <div className="thumbnail">
                            <img src={pic10} alt="..."/>
                            <div className="caption">
                                <h3>电动调速卷扬机(二)</h3>
                                <p>该系列卷扬机以起重变频电机驱动，配套的大速比中硬齿面减速机由公司设计，齿轴、齿轮分别采用42CrMo、35CrMo锻造，最大速比可达620：1，符合起重机设计标准。该机结构紧凑，使用维护方便，制作周期较短，价格适中，使用最为广泛。</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 masonry-item">
                        <div className="thumbnail">
                            <img src={pic11} alt="..."/>
                            <div className="caption">
                                <h3>电动调速卷扬机(三)</h3>
                                <p>该系列卷扬机采用起重变频或起重冶金电机驱动，标准减速加开式齿轮副减速。该机传动平稳，使用维护方便，制作周期短，成本较低。</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div role="tabpanel" className="tab-pane" id="tab4">
                <div className="row masonry-container">
                    <div className="col-sm-6 col-md-4 masonry-item">
                        <div className="thumbnail">
                            <img src={pic12} alt="..."/>
                            <div className="caption">
                                <h3>2JKL手控双筒快速溜放卷扬机系列</h3>
                                <p>
                                    本系列卷扬机主要用于建筑工地、厂矿、港口等工程垂直提升重物，尤其适用于桥梁、码头、建筑基础工程自由落体冲及打桩作业。其结构特点为双卷筒卷扬，能满足提锤、下笼、捞沙、灌浆等多功能要求。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 masonry-item">
                        <div className="thumbnail">
                            <img src={pic13} alt="..."/>
                            <div className="caption">
                                <h3>JKLA系列手控快速溜放卷扬机</h3>
                                <p>
                                    本系列卷扬机主要用于建筑工地、厂矿、港口等工程垂直提升重物，尤其适用于桥梁、码头、建筑基础工程自由落体冲孔打桩作业。其结构特点为主轴不转（俗称定轴）。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 masonry-item">
                        <div className="thumbnail">
                            <img src={pic14} alt="..."/>
                            <div className="caption">
                                <h3>JKL系列手控快速溜放卷扬机</h3>
                                <p>
                                    本系列卷扬机主要用于建筑工地、厂矿、港口等工程垂直提升重物，尤其适用于桥梁、码头、建筑基础工程自由落体冲孔打桩作业。其结构特点为主轴旋转（俗称转轴）。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="tab5">
                <div className="row masonry-container">
                    <div className="col-sm-6 col-md-4 masonry-item">
                        <div className="thumbnail">
                            <img src={pic15} alt="..."/>
                            <div className="caption">
                                <h3>CK系列冲孔桩机</h3>
                                <p>
                                    本系列冲孔桩机是桥梁、码头、公路、铁路等建筑基础施工中必不可少的机械设备，具有冲孔直径大、深度深、孔的垂直度高、施工成本低、消耗功率小、操作方便等优点。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
)

export default ProductCenter
