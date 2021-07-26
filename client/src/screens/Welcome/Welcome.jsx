import Layout from "../../components/Layout/Layout";
import "./Welcome.css";
const Welcome = (props) => {
  return (
    <Layout user={props.user}>
      <div className="WelcomePage">
        <div className="WelcomeContainer">
          <div>
            <h1>Welcome to SPF</h1>
            <h3>
              Whether you’re having fun at the beach or just out running
              errands, applying sunblock regularly protects your skin from
              harmful UV rays. Browse the collection and select the sunscreen
              that fits your day!
            </h3>
          </div>
        </div>
        <div className="SunImg">
          <img id="sun-image"></img>
        </div>
      </div>
    </Layout>
  );
};

export default Welcome;
