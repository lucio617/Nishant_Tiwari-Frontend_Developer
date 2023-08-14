import banner_logo from '../images/banner-logo.jpg'

export function Card({title,event_date,link}) {
  return (
    <div>
      <div class="card" style={{width: "18rem" }}>
        <img src={banner_logo} class="card-img-top" alt="..." />
        <div class="card-body" >
          <h5 class="card-title" >{title}</h5>
          <p class="card-text"  style={{ fontSize: '1em' }}>
            Event Date:{event_date}
          </p>
          <a href={link} class="btn btn-primary">
            See more
          </a>
        </div>
      </div>
    </div>
  );
}
