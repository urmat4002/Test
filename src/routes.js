import {MakeTest} from './pages/makeTest'
import {Test} from './pages/test'

export const publickRoutes = [
  {path: '/', element: <Test />},
  {path: '/maketest', element: <MakeTest />},
]
