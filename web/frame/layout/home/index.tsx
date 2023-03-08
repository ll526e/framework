import './index.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
interface ListItem {
  title: string
  id: number
  overview: string
  backdrop_path: string
  poster_path: string
}
const HomeWrap = () => {
  const imgUrl = 'https://image.tmdb.org/t/p/original'
  const [list, setList] = useState<ListItem[]>([])
  useEffect(() => {
    axios.get('/api/discover/movie').then(({ data }) => {
      setList(data.results)
    })
  }, [])
  return (
    <main className="m-home">
      <div className="m-home-wrap">
        <ul>
          {
            list.map(el => {
              return (
                <li key={el.id}>
                  <p>{el.title}</p>
                  <p>{el.overview}</p>
                  <img width={100} height={160} src={`${imgUrl}/${el.backdrop_path}`} alt="" />
                </li>
              )
            })
          }
        </ul>
      </div>
    </main>
  )
}

export default HomeWrap
