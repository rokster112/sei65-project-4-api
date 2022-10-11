/* eslint-disable camelcase */
import { useState } from 'react'
import  { useEffect }  from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading'
import { Link } from 'react-router-dom'


const SingleGamePage = () => {
  const { id } = useParams()
  const [ singleGame, setSingleGame ] = useState()
  const [ errors, setErrors ] = useState(false)

  const navigate = useNavigate()
  
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/games/${id}/`, singleGame)
        setSingleGame(data)
        console.log(data)
      } catch (error) {
        console.log(error)
        setErrors(error)
      }
    }  
    getData()
  }, [])

  console.log('single game ->', singleGame)

  const deleteGame = async (id) => {
    try { 
      const { data } = await axios.delete(`/api/games/${id}/`)
      setErrors(data)
      window.location.reload(navigate('/games'))
    } catch (error){
      setErrors(error.response)
    }
  }

  
  

  // singleGame.map(item => {
  //   const { genres } = item
  //   return genres
  // })


  {/* { singleGame.genres.map(genre => {
        const { name } = genre
        
        return (
          <>
            <h1>{name}</h1>
          </>
        )
      })} */}



  return (
    <div className='single-game-page-body'>
      <div className='single-game-page-container'>
        {singleGame ? 
          <>
            <div className='single-game-title-container'>
              <h1 className='single-game-title'>{singleGame.title}</h1>
            </div>
            <div className='single-game-description-container'>
              <div className="single-game-image-container">
                <img className="single-game-image" style={{ width: 400, height: 320 }} src={singleGame.image_url}></img>
              </div>
              <div className='single-game-box'>
                <h4 className='single-game-description'>Year: {singleGame.year}</h4>
                <h4 className='single-game-description'>Publisher: {singleGame.publisher}</h4>
                <h4 className='single-game-description'>Developer: {singleGame.developer}</h4>
                {/* <h4>{singleGame.genres && singleGame.genres.length && singleGame.genres.map((genre) => {
                  <p key={id}>{genre.name}</p>
                })}</h4> */}
              </div>
              {/* <div className='single-game-genres'></div> */}
            </div>
          </>
        
          :
          <h2>Somethings gone wrong</h2>
        }
        <div className='single-game-button-container'> 
          <button className='single-game-buttons' onClick={() => {
            deleteGame(id)
          }}>Delete</button>
          <Link to={`/api/games/update/${id}/`}><button className='single-game-buttons'>EDIT</button></Link>
        </div>
      </div> 
    </div>

  )
}

export default SingleGamePage