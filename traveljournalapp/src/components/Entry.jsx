import logo from '../assets/marker-geolocation.png';
export default function Entry({name, country,image,flag,location,famousFor,description}) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={image} 
                    alt="mount fuji" 
                />
            </div>
            <div className="info-container">
                <img className="marker" src="https://w7.pngwing.com/pngs/962/833/png-transparent-red-location-logo-google-map-maker-google-maps-pin-pin-heart-pin-map-thumbnail.png"/>
                <img className="flag" src={flag}/>
                <span className="country">{country}</span>
                <a href={location} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{name}</h2>
                {/* <p className="trip-dates">12 Jan, 2021 - 24 Jan, 2021</p> */}
                <p className="entry-text"><b>{famousFor}</b><br/>{description}</p>
            </div>
        </article>
    )
}