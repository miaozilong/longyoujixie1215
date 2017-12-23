import React from 'react'
import classes from './IndexShowbox.css'
import AboutsPic from './img/1_frsh.png'
import CulturePic from './img/vqdf.jpg'
import NewsPic from './img/1_zeey.png'

export const IndexShowbox = () => (
  <div>
      <div className="container img-txt">
          <div className="row">
              <div className="col-md-4">
                  <div className="thumbnail">
                      <img src={AboutsPic} alt="关于我们" title='关于我们' />
                          <div className="caption">
                              <h3>关于我们</h3>
                              <div className="headline-redline"></div>
                              <p>
                                  南通龙游机械有限公司是中国领先起重机专业制造商和服务供应商,凭借专业的设计和丰富的行业经验,我们的产品和服务受到广泛认可。
                              </p>
                              <p className="read-more">+查看更多</p>
                          </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="thumbnail">
                      <img src={CulturePic} alt="企业文化" title='企业文化' />
                          <div className="caption">
                              <h3>企业文化</h3>
                              <div className="headline-redline"></div>
                              <p>经营理念： 打过一次交道 便是永远朋友</p>
                              <p>企业使命：创国际品牌  兴民族工业</p>
                              <p className="read-more">+查看更多</p>
                          </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="thumbnail">
                      <img src={NewsPic} alt="新闻资讯" title='新闻资讯' />
                          <div className="caption">
                              <h3>新闻资讯</h3>
                              <div className="headline-redline"></div>
                              <p>家庭用微型小卷扬机的使用规范</p>
                              <p>卷扬机厂家被选择的原因</p>
                              <p className="read-more">+查看更多</p>
                          </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
)

export default IndexShowbox
