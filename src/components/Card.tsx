function Card({url, title, location, date}){
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={url}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{location}</p>
          <p>{date}</p>
          <div className="card-actions justify-end">
            
          </div>
        </div>
      </div>
    );
}

export default Card;