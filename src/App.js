import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Search from './Components/Search';
import './App.css';
import { FaSearch } from 'react-icons/fa';

function App() {

  const [term, setTerm] = useState("java")
  const [debTer, setDebTer] = useState(term)
  const [result, setResult] = useState([])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebTer(term)
    }, 1000)

    return() => clearTimeout(timeout)
  }, [term])

  useEffect(() => {
    const search = async () => {
      const respond = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debTer,
        }
      })
      setResult(respond.data.query.search)
    }

    search()

  }, [debTer])

  const putResult = result.map((el) => {
    return (
      <tr key={el.pageid}>
        <td>{el.title}</td>
        <td><div dangerouslySetInnerHTML={{"__html": el.snippet}} /></td>
      </tr>
    )
  })

  return (
    <div className='App'>
      <nav className="navbar navbar-dark" style={{backgroundColor: '#6f2cf3'}}>
        <div className="container modifSpace">
          <div className="navbar-header">
            <span className="navbar-brand fw-bold">WikipediA</span>
          </div>
          <form className="navbar-form navbar-left" action="/action_page.php">
            <div className="input-group">
              <span className='icon'><FaSearch className='icon' /></span>
              <input
                type='search'
                onChange={(e) => setTerm(e.target.value)}
                value={term}
                placeholder="Search"
                className='form-control ps-5 colorInp'
              />
            </div>
          </form>
        </div>
      </nav>
      <Search putResult = {putResult} />
    </div>
  );
}

export default App;
