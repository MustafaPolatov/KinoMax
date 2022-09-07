import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./style.css"
export const Info = () => {

  const location = useLocation();


  const [data, setData] = useState();

  useEffect(() => {
    setData(location.state)

  }, [])



  return (
    <div>
      <div className='fon-1'>
        <img src={`https://image.tmdb.org/t/p/original${location.state.backdrop_path}`} alt="" className='info-rasm2' />
        <div className="abs">
          <div className="container  top-m">
            <h1></h1>
            <div className="row">
              <div className="col-5">
                <div className="info-1">
                  <img src={`https://image.tmdb.org/t/p/original${location.state.backdrop_path}`} alt="" className='info-rasm' />
                </div>
              </div>
              <div className="col-5">
                <div className="info-2">
                  <h3>{location.state.title}</h3>
                  <p>{location.state.overview}</p>
                  <div className="but-div">
                    <button className='play-watch'>Play movie for $8</button>
                    <button className='play-watch'>Trailer</button>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className='info-final'>
                  <p className='info-p_2'><span className='yellow'>Director:</span>Ryan Cogler</p>
                  <p className='info-p_2'><span className='yellow'>Writers:</span>Ryan Cogler,Mustafa Polatov</p>
                  <p className='info-p_2'><span className='yellow'>Satrs:</span>Maks Holwey,Jordan Maks,Kayl Walker,Rebeka Adams</p>
                  <p className='studio'>Studio:</p>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png" alt="" />


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
