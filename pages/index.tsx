import { FC } from 'react'
import Layout from '../components/Layout/Layout'
import bgImage from '../images/menu-bg.jpg'
import Menu from '../components/menu/Menu'

const Home:FC = () => {

  return (
    <Layout bgImage={bgImage}>
      <Menu/>
    </Layout>
  )
}

export default Home