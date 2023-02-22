import './index.scss'
import axios from 'axios'
import { useEffect } from 'react'

const HomeWrap = () => {
  useEffect(() => {
    axios.get('/api').then(res => {
      console.log(res);
    })
  }, [])
  return (
    <main className="m-home">
      <div className="m-home-wrap">
        xxx
      </div>
    </main>
  )
}

export default HomeWrap
