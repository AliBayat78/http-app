import { useState } from 'react'
import './newComment.css'
import { postComment } from '../../services/postCommentService'
import { useNavigate } from 'react-router-dom'

const NewComment = () => {
  const navigate = useNavigate()

  const [comment, setComment] = useState({
    name: '',
    email: '',
    content: '',
  })

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value })
  }

  const postCommentHandler = async () => {
    try {
      await postComment({ ...comment, postId: 10 })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="newComment">
      <h4>Add new Comment</h4>
      <div>
        <label>name :</label>
        <input onChange={changeHandler} type="text" name="name" value={comment.name} />
      </div>
      <div>
        <label>email :</label>
        <input onChange={changeHandler} type="email" name="email" value={comment.email} />
      </div>
      <div>
        <label>body :</label>
        <input onChange={changeHandler} type="textarea" name="content" value={comment.content} />
      </div>
      <button onClick={postCommentHandler}>Add new Comment</button>
    </div>
  )
}

export default NewComment
