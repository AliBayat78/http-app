import { NavLink } from 'react-router-dom'

const items = [
  { name: 'Home', to: '/' },
  { name: 'new-comment', to: '/new-comment' },
]

const Navigation = () => {
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink className={(navData) => (navData.isActive ? 'activeLink' : '')} to={item.to}>
                {item.name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
