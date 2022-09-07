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
          <div>
            <div className="ticket ">
            <div className="d-flex bilet">
            <div className="rasm-grinch">
                <img src="https://www.film.ru/sites/default/files/movies/posters/4081716-1043520.jpg" alt="" />
              </div>
              <div>
              <p className='by-ticket'>Buy ticket film</p>
              <div className="d-flex">
              <p className='by-ticket'>$800</p>
              <button className='buy'>Buy</button>
              </div>
              </div>
            </div>
            <div className="d-flex bilet">
            <div className="rasm-grinch">
                <img src="https://proprikol.ru/wp-content/uploads/2020/05/kartinki-grincha-6.jpg" alt="" />
              </div>
              <div>
              <p className='by-ticket'>Buy ticket film</p>
              <div className="d-flex">
              <p className='by-ticket'>$800</p>
              <button className='buy'>Buy</button>
              </div>
              </div>
            </div>
            <div className="d-flex bilet">
            <div className="rasm-grinch">
                <img src="https://resizer.mail.ru/p/ddf52fef-042c-599c-b34c-497aba3269d4/dpr:188/AAACXkGOvQ6k_wKE7eguW1tnHZq71y68Zt0BFL9h74_yaiZimaWjfI9aSEThYfxP3iHZDA0QCaviCkyoYal5a5Y1UAk.jpg" alt="" />
              </div>
              <div>
              <p className='by-ticket'>Buy ticket film</p>
              <div className="d-flex">
              <p className='by-ticket'>$800</p>
              <button className='buy'>Buy</button>
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
