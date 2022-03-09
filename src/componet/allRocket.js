<div className="py-5">
      <div className="container">
        <div className="row hidden-md-up">
        {data.map((data,i)=>(
            <div key={i} className="col-md-4">
            <div className="card">
              <div className="card-block">
              <img className="card-img-top" src={data.links.mission_patch}  alt="..loading"/>
                <h4 className="card-title">{data.mission_name}</h4>
                <h6 className="card-subtitle text-muted">{data.rocket.rocket_name}</h6>
                <p className="card-text p-y-1">{data.details}</p>
                <h6>{data.launch_year}</h6>
                <h6>{data.launch_date_utc}</h6>
                <a href="#" className="card-link">link</a>
                <a href="#" className="card-link">Second link</a>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>