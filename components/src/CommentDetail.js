import React from 'react'
import { randAvatar } from '@ngneat/falso'

const CommentDetail = ({ author, timeAgo }) => {
  return (
    <div className="comment">
      <a href="www.google.com" className="avatar">
        <img alt="avatar" src={randAvatar()} />
      </a>
      <div className="content">
        <a href="www.google.com" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{timeAgo}</span>
        </div>
        <div className="text">How artistic!</div>
      </div>
    </div>
  )
}

export default CommentDetail
