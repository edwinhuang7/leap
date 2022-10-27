import "./About.scss";
import { images } from "../../constants";

const info = [
  { title: "Safe Documents", description: "LawConnect stores its data on servers provided by Amazon Web Services and is safer than email.", imgUrl: images.safeDocs },
  { title: "Work Remotely", description: "You can sign in to LawConnect and view,collaborate and share your documents from anywhere..", imgUrl: images.workRemote },
  { title: "Greater Collaboration", description: "Collaborate on documents with clients, lawyers and other parties with LawConnect's Comment and Reply.", imgUrl: images.greaterCollab },
];
const About = () => {
  return (
    <>
      <div className="app__about">
        <h2 className="large-text-centered">One Solution Designed to Make Your Firm More Money</h2>
        <div className="app__profiles">
          {info.map((about) => (
            <div className="app__profile-item">
              <img src={about.imgUrl} alt={about.title} />
              <h4 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h4>
              <p className="p-text-black" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
