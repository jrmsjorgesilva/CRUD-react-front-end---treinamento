import axios from 'axios'
import { useState, useEffect } from 'react'
import Noticia from './Noticia'

const Noticias = () => {

  const [noticias, setNoticias] = useState([])

  // chave publica de API
  const API_KEY = '805486f03b8542de944323ac65215e78'

  // chamada axios
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2022-04-11&sortBy=publishedAt&apiKey=${API_KEY}`).then((res) => {
        //   console.log(res.data.articles[0].content, res.data.articles[0].title);
        setNoticias(res.data.articles.map((noticia) => noticia.title && noticia.content))
      }, [])
  }, [])
  
  const deleteNoticia = (title) => {
      setNoticias(noticias.filter((noticia) => noticia !== title))
  }

  return (

    // (noticias.length > 0)

    // &&

    <div className='container'>
        {noticias.map((noticia) => (
            <Noticia key={noticia.title} noticiaTitle={noticia.title} noticiaContent={noticia.content} deleteNoticia={deleteNoticia} />
        ))}
    </div>
  )
}

export default Noticias