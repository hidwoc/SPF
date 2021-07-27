import { useState, useEffect } from "react";
import { getOneSunscreen } from "../../services/sunscreens";
import { Link, useParams } from "react-router-dom";
import "./SunscreenDetails.css";
import Layout from "../../components/Layout/Layout";

const SunscreenDetail = (props) => {
  const { user } = props;
  const [sunscreen, setSunscreen] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchSunscreen = async () => {
      const sunscreen = await getOneSunscreen(id);
      setSunscreen(sunscreen);
    };
    fetchSunscreen();
  }, [id]);
  return (
    <Layout user={props.user}>
      <div className="sunscreen-detail">
        {!sunscreen ? (
          <h4>Loading!</h4>
        ) : (
          <div>
            <div className="detail">
              <div className="leftSunDetails">
                <div className="name">
                  <h2>{sunscreen.name}</h2>
                </div>
                <div className="applyToAndSPF">
                  <div className="applyto-info">
                    <h2>
                      Apply To: <span id="applyToSpan"> {sunscreen.applyTo}</span>
                    </h2>
                  </div>
                  <div className="spf-info">
                    <h2>SPF {sunscreen.SPF}</h2>
                  </div>
                </div>
                <div className="category-info">
                  <h2>{sunscreen.category.join(", ")}</h2>
                </div>
                {user ? (
                  <div className="button-container">
                    <Link
                      className="edit-button"
                      to={`/sunscreens/${sunscreen._id}/edit`}
                    >
                      Edit
                    </Link>
                  </div>
                ) : null}
              </div>
              <div className="rightSunDetails">
               <div className="detail-img">
                <img
                  className="sunscreen-detailPage-image"
                  src={sunscreen.imgURL}
                  alt={sunscreen.name}
                />
                </div>
                <h2 className="price-details">{`$${sunscreen.price}`}</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SunscreenDetail;
