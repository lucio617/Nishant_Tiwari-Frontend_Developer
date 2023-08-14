import { Link } from "react-router-dom";
import { useEffect } from "react";
import banner_logo from "../images/banner-logo.jpg"
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useState } from "react";
import { useGlobalContext } from "./ContextReducer";
export function Navbar() {
    const {globalState,setGlobalState}=useGlobalContext("")
    const [dragon, setDragon] = useState([])
    const loadData = async () => {
        let response = await fetch("https://api.spacexdata.com/v3/dragons", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        response = await response.json();

         global.rocket_image=response[0].flickr_images[0]
        setDragon(response[0])
    };
    useEffect(() => {
        loadData();
    }, []);
    return (
        <div>{dragon.length != 0 ? <><div>
            <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        SpaceX
                    </a>


                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    FALCON 9
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    FALCON HEAVY
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    DRAGON
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    STARSHIP
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    HUMAN SPACEFLIGHT
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    RIDESHARE
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    STARSHIELD
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    STARLINK
                                </a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Link className="btn bg-white text-success mx-1" to="">
                                SignUp
                            </Link>
                        </div>

                        {/* <button
                            id="hamburger"
                            aria-expanded="false"
                            aria-controls="menu"
                            aria-label="Menu"
                            role="button"
                            aria-haspopup="dialog"
                        >
                            <div id="bar1" class="bar"></div>
                            <div id="bar2" class="bar"></div>
                            <div id="bar3" class="bar"></div>
                        </button> */}
                        <FormatListBulletedIcon></FormatListBulletedIcon>
                    </div>
                </div>
            </nav>

            <div class="banner ">
                <div class="container " >
                    <div class="row m-4">
                        <div class="col-sm-5" style={{ marginTop: "12rem" }} >
                            <h1>Dragons</h1>
                            <p>{dragon.description}</p>
                            <button class="btn btn-success">Learn More</button>
                        </div>
                        <div class="col-sm-7" style={{ marginTop: "10rem" }}>
                            <img class="img-thumbnail" src={dragon.flickr_images[0]} style={{ width: "300px", height: "300px" }} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="carousel-caption" style={{ zIndex: "10" }}>
                  <div className="d-flex justify-content-center">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search History"
                      aria-label="Search"
                      value={globalState}
                      onChange={(e)=>{setGlobalState(e.target.value)}}
                    />
                    {/* <button
                      className="btn text-white "
                      style={{ backgroundColor: "#00bc8c" }}
                      type="submit"
                    >
                      Search
                    </button> */}
                  </div>
                </div>
        </div></> : <>No Data</>}</div>

    );
}
