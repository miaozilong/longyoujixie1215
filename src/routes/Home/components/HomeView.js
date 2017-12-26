import React from 'react'
import Promise from 'components/Promise'
import IndexShowbox from 'components/IndexShowbox'
import ReactDocumentTitle from 'react-document-title'



export const HomeView = () => (
    <ReactDocumentTitle title="龙游机械-首页">
        <div>
            <Promise />
            <IndexShowbox/>
        </div>
    </ReactDocumentTitle>
)

export default HomeView
