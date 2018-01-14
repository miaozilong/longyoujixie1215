import React from 'react'
import classes from './Industry.css'
import Promise from '../Promise'
import pic1 from './img/JKD系列电控快速卷扬机.jpg'
import pic2 from './img/高速铁路客运专线电动调速卷扬机3.jpg'
import pic3 from './img/JMW系列电控慢速卷扬机.jpg'
import pic4 from './img/JM系列大容量摩擦式卷扬机.jpg'
import pic5 from './img/JM系列电控慢速卷扬机.jpg'
import pic6 from './img/大型船舶锚泊定位绞车.jpg'

export const Industry = () => (
  <div>
      <Promise />
      <div className="container">
          <div className="row">
              <div className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                      <img src={pic1} alt="..." />
                          <div className="caption">
                              <h3><a href="industry-01.html">工程机械</a></h3>
                              <p>本系列卷扬机主要用提升、牵移、装卸重物，如各种大中型砼、钢结构及机械设备的安装和移动，适用于建筑安装公司、厂矿的土术建筑工程及桥梁施工。特别适用于配套起重机主卷扬机起重用。</p>
                          </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                      <img src={pic2} alt="..." />
                          <div className="caption">
                              <h3><a href="industry-02.html">高速铁路客运</a></h3>
                              <p>该系列卷扬机吸收了国外先进技术，采用进口液压马达驱动，内藏式硬齿面行星减速机减速。具有体积小、重量轻、传动平稳，无级调速范围大等特点，特别适合全液压提梁机、架桥机的配套使用。</p>
                          </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                      <img src={pic3} alt="..." />
                          <div className="caption">
                              <h3><a href="industry-03.html">核电行业</a></h3>
                              <p>本系列为蜗轮蜗杆减速机传动卷扬机。主要用于卷扬、拉卸、拖起重物。如各种大中型砼、钢结构及机械设备的安装的拆卸。适用于建筑安装公司、矿区、工厂的土木建筑及安装工程。</p>
                          </div>
                  </div>
              </div>

          </div>
          <div className="row">

              <div className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                      <img src={pic4} alt="..." />
                          <div className="caption">
                              <h3><a href="industry-04.html">风电行业</a></h3>
                              <p>本系列卷扬机主要用于各种大型、特大型砼、钢结构及钢索、钢缆的长距离牵引及大行程起吊。其特点钢丝绳速度恒定，起吊平稳。适用于各种桥梁、港口、码头等路桥工程施工及大型厂矿、电力工程设备安装。</p>
                          </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                      <img src={pic5} alt="..." />
                          <div className="caption">
                              <h3><a href="industry-05.html">钢铁行业</a></h3>
                              <p>本系列为齿轮减速机传动卷扬机。主要用于卷扬、拉卸、拖曳重物。如各种大中型砼、钢结构及机械设备的安装和拆卸。适用于建筑安装公司、矿区、工厂的土木建筑及安装工程。</p>
                          </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                      <img src={pic6} alt="..." />
                          <div className="caption">
                              <h3><a href="industry-06.html">造船行业</a></h3>
                              <p>公司设计的引船车、滑道、牵引绞车、立式绞盘能满足国内所有使用大、中型船坞、船台的船舶上下水要求。</p>
                          </div>
                  </div>
              </div>
          </div>

      </div>
  </div>
)

export default Industry
