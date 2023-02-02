import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 6:44PM" />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 7:02PM" />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Today at 8:54PM" />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
