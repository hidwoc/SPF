import { useState, useEffect } from "react";
import { getAllSunscreens } from "../../services/sunscreens";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import "./Sunscreens.css";

const Sunscreens = (props) => {
  const [sunscreens, setSunscreens] = useState([]);

  useEffect(() => {
    const fetchSunscreens = async () => {
      const allSunscreens = await getAllSunscreens();
      setSunscreens(allSunscreens);
    };
    fetchSunscreens();
  }, []);

  // const defaultPic = () => {
  //   props.imgURL.src = "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Cosmetic-PNG/Sunscreen_Tube_PNG_Clipart_Picture.png?m=1507172109"
  //   props.imgURL.width = "300"
  // }
  // props.imgURL.onError = defaultPic;

  return (
    <Layout user={props.user}>
      <main>
        <div className="allTheScreens">
          {sunscreens.map((sunscreen) => (
            <Link
              className="cardLink"
              to={`/sunscreens/${sunscreen._id}`}
              key={sunscreen._id}
            >
              <Card
                _id={sunscreen._id}
                name={sunscreen.name}
                imgURL={sunscreen.imgURL}
                price={sunscreen.price}
                key={sunscreen._id}
              />
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Sunscreens;
