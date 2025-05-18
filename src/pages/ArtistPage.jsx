import { useParams } from "react-router-dom";


import VanGogh from "../assets/vanGogh.jpg";
import StarryNight from "../assets/starryNight.jpg";
import CicekAcan from "../assets/cicekAcan.jpg";
import FridaKahlo from "../assets/fridaKahlo.jpg";
import BrokenColumn from "../assets/brokenColumn.jpg";
import SalvadorDali from "../assets/salvadorDali.jpg";
import PersistenceMemory from "../assets/persistenceMemory.jpg";
import PabloPicasso from "../assets/pabloPicasso.jpg";
import Guernica from "../assets/guernica.jpg";
import DaVinci from "../assets/daVinci.jpg";
import MonaLisa from "../assets/monaLisa.jpg";
import JacksonPollock from "../assets/jacksonPollock.jpg";
import No5 from "../assets/no5.jpg";
import AndyWarhol from "../assets/andyWarhol.jpg";
import Marilyn from "../assets/marilyn.jpg";
import HenriMatisse from "../assets/henriMatisse.jpg";
import Dance from "../assets/dance.jpg";

const artistDetails = {
  "van-gogh": {
    name: "Vincent van Gogh",
    image: VanGogh,
    biography:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda recusandae possimus sunt vero rem reprehenderit labore autem aut amet, dolorum in, exercitationem quasi inventore est beatae velit voluptas cumque modi.",
    works: [
      {
        title: "Yıldızlı Gece",
        image: StarryNight,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "Çiçek Açan Badem Ağacı",
        image: CicekAcan,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  "frida-kahlo": {
    name: "Frida Kahlo",
    image: FridaKahlo,
    biography:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda recusandae possimus sunt vero rem reprehenderit labore autem aut amet, dolorum in, exercitationem quasi inventore est beatae velit voluptas cumque modi.",
    works: [
      {
        title: "Kırık Sütun",
        image: BrokenColumn,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  "salvador-dali": {
    name: "Salvador Dalí",
    image: SalvadorDali,
    biography:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda recusandae possimus sunt vero rem reprehenderit labore autem aut amet, dolorum in, exercitationem quasi inventore est beatae velit voluptas cumque modi.",
    works: [
      {
        title: "Belleğin Azmi",
        image: PersistenceMemory,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  "pablo-picasso": {
    name: "Pablo Picasso",
    image: PabloPicasso,
    biography:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda recusandae possimus sunt vero rem reprehenderit labore autem aut amet, dolorum in, exercitationem quasi inventore est beatae velit voluptas cumque modi.",
    works: [
      {
        title: "Guernica",
        image: Guernica,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  "leonardo-da-vinci": {
    name: "Leonardo da Vinci",
    image: DaVinci,
    biography:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda recusandae possimus sunt vero rem reprehenderit labore autem aut amet, dolorum in, exercitationem quasi inventore est beatae velit voluptas cumque modi.",
    works: [
      {
        title: "Mona Lisa",
        image: MonaLisa,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  "jackson-pollock": {
    name: "Jackson Pollock",
    image: JacksonPollock,
    biography:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda recusandae possimus sunt vero rem reprehenderit labore autem aut amet, dolorum in, exercitationem quasi inventore est beatae velit voluptas cumque modi.",
    works: [
      {
        title: "No. 5, 1948",
        image: No5,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  "andy-warhol": {
    name: "Andy Warhol",
    image: AndyWarhol,
    biography:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda recusandae possimus sunt vero rem reprehenderit labore autem aut amet, dolorum in, exercitationem quasi inventore est beatae velit voluptas cumque modi.",
    works: [
      {
        title: "Marilyn Diptych",
        image: Marilyn,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
  "henri-matisse": {
    name: "Henri Matisse",
    image: HenriMatisse,
    biography:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda recusandae possimus sunt vero rem reprehenderit labore autem aut amet, dolorum in, exercitationem quasi inventore est beatae velit voluptas cumque modi.",
    works: [
      {
        title: "The Dance",
        image: Dance,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
};

const ArtistPage = () => {
  const { id } = useParams();
  const artist = artistDetails[id];

  if (!artist)
    return (
      <div className="text-center py-20">
        <h2>Sanatçı bulunamadı.</h2>
      </div>
    );

  return (
    <div className=" mx-8 px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{artist.name}</h1>

      {/* Sanatçı fotoğrafı */}
      {artist.image && (
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-80 object-cover rounded-2xl mb-8 shadow"
        />
      )}

      {/* Biyografi */}
      <div className="bg-white rounded-2xl p-6 shadow mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          {artist.biography}
        </p>
      </div>

      {/* Eserler */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Eserleri</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {artist.works.map((work, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          >
            {work.image && (
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
            )}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                {work.title}
              </h3>
              <p className="text-gray-600 mt-2">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;
