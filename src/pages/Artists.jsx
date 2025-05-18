import { Link } from "react-router-dom";

import ArtCard from "../components/ArtCard";
import TopArtistSlider from "../components/TopArtistSlider";
import { artistList } from "../data/artistList";



const Artists = () => {
  return (
    <div>
      <TopArtistSlider />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-6 mx-16 my-16">
        {artistList.map((artist) => (
          <Link to={`/artists/${artist.id}`} key={artist.id} data-aos="fade-up">
            <ArtCard
              image={artist.image}
              title={artist.title}
              description={artist.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Artists;
