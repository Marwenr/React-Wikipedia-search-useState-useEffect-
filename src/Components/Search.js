import React from 'react'

function Search({ putResult }) {

  return (
      <div className='container mt-3 result'>
        <div className='row'>
          <div className='col'>
            <table className='table'>
              <thead>
                <tr className='text-center'>
                  <th scope='col'>Title</th>
                  <th scope='col'>Desciption</th>
                </tr>
              </thead>
              <tbody>{putResult}</tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default Search
