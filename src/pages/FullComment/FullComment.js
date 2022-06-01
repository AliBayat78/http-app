import { useEffect, useState } from 'react'
import './fullComment.css'
import { getOneComment } from '../../services/getOneCommentService'
import { deleteComment } from '../../services/deleteCommentService'
import { useNavigate, useParams } from 'react-router-dom'

const FullComment = () => {
  const [comment, setComment] = useState(null)
  const params = useParams()
  const navigate = useNavigate()
  const commentId = params.id
  // get comment => id => async await => get full comment data

  // inline styles
  const styles = {
    color: '#444',
    // we can use dynamic styling like below
    backgroundColor: !commentId ? '#efefef' : 'red',
    padding: '10px',
  }

  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((res) => setComment(res.data))
        .catch()
    }
  }, [commentId])

  const deleteHandler = async () => {
    try {
      await deleteComment(commentId)
      navigate('/')
    } catch (error) {}
  }

  let commentDetail = <p style={styles}> please select a comment</p>

  if (commentId) commentDetail = <p>Loading...</p>

  if (comment) {
    commentDetail = (
      <div className="fullComment">
        <p>name : {comment.name}</p>
        <p>email : {comment.email}</p>
        <p>body : {comment.body}</p>
        <button onClick={() => deleteHandler()}>Delete</button>
      </div>
    )
  }

  return commentDetail
}

export default FullComment
