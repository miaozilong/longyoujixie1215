import React from 'react'
import classes from './NewsMain.css'
import img1 from './img/1.jpg'
import img2 from './img/11221131.jpg'
import img3 from './img/19093110tb.jpg'
export const AboutMain = () => (
  <div>
      <div className="row">
          <ol className="breadcrumb">
              <li><a href="#">首页</a></li>
              <li>新闻中心</li>
          </ol>
      </div>
      <div className="row">
          <div className="news-context">
              <ul className="media-list">
                  <li className="media">
                      <div className="media-left">
                          <a href="#">
                              <img className="media-object" src={img1} alt="..." />
                          </a>
                      </div>
                      <div className="media-body">
                          <h4 className="media-heading"><a href='#'>家庭用微型小卷扬机的使用规范</a></h4>
                          <p>
                              家庭用微型小卷扬机是相比于其他的领域中大型的还有功率上比较高的产品来形成的,它在家庭中主要就是帮助完成很多的工作, 这样就可以直接的实现到对它各种使用的效率提升,而作为对人们环境产生也比较大得产品,更需要多种的注意.
                          </p>
                          <p>
                              从挑选产品到最后的使用以及保养的各个环节上都必须很好的进行下来对它的使用,而且从简单的调整或者是在某些地方的安装上, 更需要多种的去稳定好其中的安全,才会在今后的使用中更有效果的被发挥出来.使用规范对家庭用微型小卷扬机来说,
                          </p>
                      </div>
                  </li>
                  <li className="media">
                      <div className="media-left">
                          <a href="#">
                              <img className="media-object" src={img2} alt="..." />
                          </a>
                      </div>
                      <div className="media-body">
                          <h4 className="media-heading"><a href='#'>卷扬机厂家被选择的原因</a></h4>
                          <p>
                              各个行业在不同的积累上都有着属于它们的厂家,卷扬机厂家就是利用了网络和实际的科技上的辅助来展现在更多顾客的面前, 不管是在什么样的地区,只要是运输是比较便利的情况下都可以很好的完成对它多种的使用.这样的厂家可以保障的质量也是顾客比较在意的, 它从基础的零件挑选上就一直保持着很好的工作质量,而在最后的技术上的组合中就会让专业的人员来实施很好的加工,并且从创新的角度来看, 更是厂家需要具备的能力.选择原因.
                          </p>
                      </div>
                  </li>
                  <li className="media">
                      <div className="media-left">
                          <a href="#">
                              <img className="media-object" src={img3} alt="..." />
                          </a>
                      </div>
                      <div className="media-body">
                          <h4 className="media-heading"><a href="#">中希两国总理见证CCS与希腊百利钢公司签署框架合作协议</a></h4>
                          <p>
                              在中华人民共和国总理李克强和希腊共和国总理萨马拉斯（ANTONIS SAMARAS）的共同见证下，中国船级社（CCS）与希腊百利钢航运公司（PARAGON SHIPPING）在北京人民大会堂签署了框架合作协议以及两艘新建4800箱集装箱船加入CCS船级协议。交通运输部杨传堂部长及中国驻希腊大使杜起文等有关领导出席了合作文件的签字仪式。 CCS总裁孙立成和百利钢公司首席执行官迈克·保都格楼（Michael Bodouroglou）代表双方签署合作协议。
                          </p>
                      </div>
                  </li>
              </ul>
          </div>
      </div>

  </div>
)

export default AboutMain
