import React from 'react'
import classes from './ProductCenter.css'

export const ProductCenter = (props) => (
    <div className="container product-context" >
        <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active"><a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">JM系列卷扬机</a></li>
            <li role="presentation"><a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab">JKD系列卷扬机</a></li>
            <li role="presentation"><a href="#tab3" aria-controls="tab3" role="tab" data-toggle="tab">JT调速卷扬机</a></li>
            <li role="presentation"><a href="#tab4" aria-controls="tab4" role="tab" data-toggle="tab">JKL系列卷扬机</a></li>
            <li role="presentation"><a href="#tab5" aria-controls="tab5" role="tab" data-toggle="tab">CK打桩机卷扬机</a></li>
        </ul>
        <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="tab1">
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src="img/1_n3f6.png" alt="..." />
                            <div className="caption">
                                <h3>Thumbnail label</h3>
                                <p>...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src="img/1_n3f6.png" alt="..." />
                            <div className="caption">
                                <h3>Thumbnail label</h3>
                                <p>...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src="img/1_n3f6.png" alt="..." />
                            <div className="caption">
                                <h3>Thumbnail label</h3>
                                <p>...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src="img/1_n3f6.png" alt="..." />
                            <div className="caption">
                                <h3>Thumbnail label</h3>
                                <p>...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src="img/1_n3f6.png" alt="..." />
                            <div className="caption">
                                <h3>Thumbnail label</h3>
                                <p>...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src="img/1_n3f6.png" alt="..." />
                            <div className="caption">
                                <h3>Thumbnail label</h3>
                                <p>...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src="img/1_n3f6.png" alt="..." />
                            <div className="caption">
                                <h3>Thumbnail label</h3>
                                <p>...</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div role="tabpanel" className="tab-pane" id="tab2">2..</div>
            <div role="tabpanel" className="tab-pane" id="tab3">.3..</div>
            <div role="tabpanel" className="tab-pane" id="tab4">..4.</div>
            <div role="tabpanel" className="tab-pane" id="tab5">...5</div>
        </div>
    </div>
)

export default ProductCenter
