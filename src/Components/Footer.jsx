import { useState, useEffect } from "react";
export function Footer() {
  const[info,setInfo] = useState([])

  const loadInfo = async () => {
    let response = await fetch("https://api.spacexdata.com/v3/info", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();

    // console.log(response.headquarters.address)
    setInfo(response)
  };
  useEffect(() => {
    loadInfo();
  }, []);

  return (
    <div>{info.length!==0 ? <><div class="container">
      <footer class="row row-cols-5 py-3 my-3 border-top" style={{marginRight:"-3rem"}}>
        <div class="col">
          <a
            href="/"
            class="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32">
              <use ></use>
            </svg>
          </a>
          <p class="text-muted">© 2021</p>
        </div>

        <div class="col"></div>


        <div class="col">
          <h5>Address</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                {info.headquarters.address}
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                {info.headquarters.city}
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                {info.headquarters.state}
              </a>
            </li>
          </ul>
        </div>

        <div class="col">
          <h5>Links</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href={info.links.website} class="nav-link p-0 text-muted">
                Website
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href={info.links.flickr} class="nav-link p-0 text-muted">
                Flickr
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href={info.links.twitter} class="nav-link p-0 text-muted">
                Twitter
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href={info.links.elon_twitter} class="nav-link p-0 text-muted">
                Elon Twitter
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div></> : <>No Data</>}

    </div>
  );
}
