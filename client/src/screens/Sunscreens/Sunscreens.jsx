import { useState, useEffect } from "react";
import { getAllSunscreens } from "../../services/sunscreens";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";

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
    <main>
      <div className="sunscreeens">
        {sunscreens.map((sunscreen) =>(
          <Link className="card" to={`/sunscreens/${sunscreen._id}`}>
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
  );
};

export default Sunscreens;
