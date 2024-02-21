import React from 'react'

function portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='porfolio_item'>
          <div className='portfolio__item-image'>
            <h3>Project 1</h3>
            <a href='https://github.com/' className='btn'>Github</a>
          </div>
        </article>
      </div>

    </section>
  )
}

export default portfolio