import React from 'react'
import classes from './Footer.css'

export const Footer = () => (
  <div>
      <div className="foot">
          <div className="container">
              <div className="row">
                  <div className="col-md-2">
                      <div className="foot-left">
                          <img src="img/1_2ivs.png" className="img-responsive" />
                          <div className="longyouji-txt">LONGYOUJIXIE</div>
                          <div className="makeworldeasy">龙游让世界变得更轻松</div>
                      </div>
                  </div>
                  <div className="col-md-1 visible-lg-block">
                      <div className="foot-vertical-line"></div>
                  </div>
                  <div className="foot-right">
                      <div className="col-md-9">
                          <div className="row">
                              <div className="col-md-6">
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="header">产品中心</div>
                                          <ul>
                                              <li><a href="#">起重类卷扬机</a></li>
                                              <li><a href="#">矿用类卷扬机</a></li>
                                              <li><a href="#">船用类卷扬机</a></li>
                                              <li><a href="#">海工类卷扬机</a></li>
                                              <li><a href="#">CK打桩机系列</a></li>
                                              <li><a href="#">机加工</a></li>
                                          </ul>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="header">行业应用</div>
                                          <ul>
                                              <li><a href="#">钢铁治金</a></li>
                                              <li><a href="#">核电行业</a></li>
                                              <li><a href="#">航天军工</a></li>
                                              <li><a href="#">汽车行业</a></li>
                                              <li><a href="#">机械制造</a></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="header">新闻中心</div>
                                          <ul>
                                              <li><a href="#">公司新闻</a></li>
                                              <li><a href="#">行业动态</a></li>
                                              <li><a href="#">媒体报道</a></li>
                                          </ul>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="header">关于我们</div>
                                          <ul>
                                              <li><a href="#">公司简介</a></li>
                                              <li><a href="#">企业文化</a></li>
                                              <li><a href="#">企业资质</a></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="row tel">
                                      <div className="col-md-2"></div>
                                      <div className="col-md-3">
                                          <i className="glyphicon glyphicon-earphone"></i>
                                      </div>
                                      <div className="col-md-6">
                                          服务热线<br />
                                          0513-87260058
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container">
              <div className="row">
              </div>
          </div>
          <div className="text-center copyright">
              Copyright © 2016-2020. 南通龙游机械有限公司版权所有
              服务热线:15996604333
              传真:0513-87260058
              邮箱:miaozijun058@aliyun.com
              &nbsp;&nbsp;
              <div><a href="http://www.miitbeian.gov.cn" target="_blank">苏ICP备16040183号</a></div>
          </div>
      </div>
  </div>
)

export default Footer
