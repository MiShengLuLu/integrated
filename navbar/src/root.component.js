import { BrowserRouter, Link } from 'react-router-dom'

export default function Root(props) {
  return <BrowserRouter>
    <ul>
      <li>
        <Link to="/">@single-spa/welcome</Link>
      </li>
      <li>  
        <Link to="/vanilla">@integrated/vanilla</Link>
      </li>
      <li>  
        <Link to="/react">@integrated/react</Link>
      </li>
      <li>
        <Link to="/vue3">@integrated/vue3</Link>
      </li>
    </ul>
  </BrowserRouter>;
}
