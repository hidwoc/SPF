import { useState, useEffect } from "react";
import { getAllSunscreens } from "../../services/sunscreens";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";

const Sunscreens = (props) => {
  const [sunscreens, setSunscreens] = useState([]);

  useEffect(() => {
    const fetchSunscreens = async () => {
      const allSunscreens = await getAllSunscreens();
      setSunscreens(allSunscreens);
    };
    fetchSunscreens();
  }, []);

  return (
    <Layout>
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
