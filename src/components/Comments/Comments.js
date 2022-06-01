import { useEffect, useState } from 'react'
import Comment from './Comment/Comment'
import './comments.css'
import { getAllComments } from '../../services/getAllCommentsService'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { NavLink } from 'react-router-dom'

const CommentsList = () => {
  const [comments, setComments] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments()
        setComments(data)
      } catch (error) {
        setError(true)
      }
    }
    getComments()
  }, [])

  const renderComments = () => {
    let renderValue = <p>Loading ...</p>
    if (error) {
      renderValue = <p>Fetching data failed</p>
      toast.error('There is an error')
    }
    if (comments && !error) {
      renderValue = comments.map((c) => {
        return (
          <NavLink to={`/comment/${c.id}`} key={c.id}>
            <Comment name={c.name} email={c.email} />
          </NavLink>
        )
      })
    }

    return renderValue
  }

  return <section>{renderComments()}</section>
}

export default CommentsList
