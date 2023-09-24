import {Route, Routes} from 'react-router-dom'
import {publickRoutes} from '../routes'

export const Routers = () => {
  return (
    <Routes>
      {publickRoutes.map((item, index) => (
        <Route key={index} path={item.path} element={item.element} />
      ))}
    </Routes>
  )
}
