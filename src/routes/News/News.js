import React from 'react'
import {browserHistory} from 'react-router'
import classes from './News.css'
import ReactDocumentTitle from 'react-document-title';
import NewsCenter from 'components/NewsCenter'

const goBack = (e) => {
    e.preventDefault()
    return browserHistory.goBack()
}

export const News = () => (
    <ReactDocumentTitle title="龙游机械-新闻中心">
        <div>
            <NewsCenter/>
        </div>
    </ReactDocumentTitle>
)

export default News
