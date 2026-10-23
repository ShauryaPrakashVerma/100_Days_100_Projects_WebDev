import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil debitis adipisci, recusandae ut illum necessitatibus.',
      color: 'lightseagreen',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      color: 'blue',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      color: 'gray',
      tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1773332598414-44a45e364d85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      color: 'lightseagreen',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      color: 'lightseagreen',
      tag: 'Satisfied'
    }
  ]

  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App