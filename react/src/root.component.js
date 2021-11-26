// export default function Root(props) {
//   return <section>{props.name} is mounted!</section>;
// }
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'

export default function Root(props) {
  return <BrowserRouter basename="/react">
    <div>
      <Link to="/"></Link>
      <Link to="/about"></Link>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>;
}

