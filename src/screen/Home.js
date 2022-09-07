import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
import { FaEnvira } from "react-icons/fa"
import { FaGithubAlt } from "react-icons/fa"
import { GiCutDiamond } from "react-icons/gi";
import { AiFillPlayCircle } from "react-icons/ai";
import { GiSofa } from "react-icons/gi";
import "./style.css"

export const Home = () => {

  let key = "51cc7f5f459038d8f6fd27150449d6a1"
  const axios = require('axios').default;
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
      .then((v) => {
        console.log(v.data.results);
        setData(v.data.results)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  const navigate = useNavigate();


  const [imgbut, setImgbut] = useState(0)

  function Nim(i) {
    setImgbut(i)
  }
  function Boss(v) {
    navigate(
      "/info",
      {
        state: v
      }
    )
  }
  function Search(v) {
    let yangi = data.filter(a => {
      return a.title.includes(v)
    })
    setData(yangi)
  }
  return (
    <div className='asosiy'>
      <div className="menu">
        <ul>
          <li className='icon-1'><FaMoneyBillAlt /></li>
          <li className='zag-1'>CINEMACITY</li>
        </ul>
        <ul>
          <li><input type="text" className='input-1' placeholder='Search your film' onInput={(v) => Search(v.target.value)} /> </li>
        </ul>
        <ul>
          <input type="text" className='input-2' placeholder='Search' />
          <button className='icon-2'><GiCutDiamond /></button>
          <button className='icon-2'><FaRegBell /></button>
        </ul>
      </div>
      <div className="row" id='row'>
        <div className="col-3 super">
          <div className='dreg'>
            <div className="plastik">
              <div className='d-flex'>
                <div className='krug'></div>
                <p className='card-name'>Mustafa Polatov</p>
              </div>
              <p className='nomer-card'>8889 909099 6579</p>
            </div>
            <div className="left">
              <div className='d-flex ms-4 menu-left'>
                <p className='icon-4'><FaHome /></p>
                <p className='menu-p'>Home</p>
              </div>
              <div className='d-flex ms-4 menu-left'>
                <p className='icon-4'><FaRegBell /></p>
                <p className='menu-p'>Fovorite</p>
              </div>
              <div className='d-flex ms-4 menu-left'>
                <p className='icon-4'><FaDropbox /></p>
                <p className='menu-p'>Bonus</p>
              </div>
              <div className='d-flex ms-4 menu-left'>
                <p className='icon-4'><FaEnvira /></p>
                <p className='menu-p'>Food&Drinks</p>
              </div>
              <div className='d-flex ms-4  menu-left'>
                <p className='icon-4'><FaGithubAlt /></p>
                <p className='menu-p'>PayPal</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 fon-8">
          <div className="row ovr">
            <div className="col-12">
              <div>
                <div className="rasm">
                  {
                    (data.length > 0)
                      ? (
                        <div>
                          <img src={`https://image.tmdb.org/t/p/original${data[imgbut].backdrop_path}`} alt="" />
                          <div className="ab">
                            <p className='play-bt' onClick={() => Boss(data[imgbut])}><AiFillPlayCircle /></p>
                          </div>
                        </div>
                      )
                      : (
                        <h1>err</h1>
                      )
                  }

                </div>
              </div>
            </div>
            {
              (data.length > 0)
                ? (
                  data.map((v, i) => {
                    return <div className='col-3 mt-4'>
                      <div className='card rik' onClick={() => Nim(i)}>
                        <img src={`https://image.tmdb.org/t/p/original${v.backdrop_path}`} alt="" />
                        <p className='p-home'>{v.title}</p>
                      </div>
                    </div>
                  })
                )
                : (<h1>Dom</h1>)
            }
          </div>

        </div>
        <div className="col-3">
          <div className='uzun'>
            <div className='bir-right '>
              <div className="d-flex pt-3 fon-5">
                <p className='p-cinema'>The Cinema 3D</p>
                <p className='ms-3 oclochk'>10:30</p>
              </div>
              <p className='text-center lux-hall'>Lux Hall</p>
              <div className="sofa">
                <div className=''>
                 <div className="liv">
                 <div className="d-flex   ggg">
                    <p><GiSofa /></p>
                    <p><GiSofa /></p>
                    <p><GiSofa /></p>
                    <p><GiSofa /></p>
                    <p><GiSofa /></p>
                  </div>
                  <div className="d-flex text-center gggg">
                    <p><GiSofa /></p>
                    <p><GiSofa /></p>
                    <p><GiSofa /></p>
                  </div>
                  <div className="d-flex text-center ggggg">
                    <p><GiSofa /></p>
                    <p><GiSofa /></p>
                  </div>
                 </div>
                  <div className='bumaga'>
                    <div>
                      <p className='tic-p'>The Grinchs</p>
                      <p className='tic_p-2'>17th, Dec 10:30</p>
                      <div className='rihght-tic'>
                        <p>Hall:</p>
                        <p>Lux</p>
                      </div>
                      <div className='rihght-tic'>
                        <p>Seats:</p>
                        <p>B2/B1</p>
                      </div>
                      <div className="d-flex">
                        <p className='dolar'>$26</p>
                        <button className='gren'>Sell </button>
                      </div>
                    </div>
                    <div className="img-2">
                      <img src="https://i.pinimg.com/550x/e8/3a/67/e83a673b22d34fed0d7ac7d3f417c233.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
