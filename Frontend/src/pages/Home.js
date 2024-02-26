import "./home.css";
import hero from "../images/hero.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container hero-bg">
      <div class="px-4 pt-5 my-5 text-center ">
        <h1 class="display-4 fw-bold  pt-2 pb-4 head">JOURNEY VERSE TRAVELS</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Embark on a Journey of Discovery: Explore, Experience, and Embrace
            the World!{" "}
          </p>
          <p class="lead mb-4">
            Dive into Azure Waters, Scale Towering Peaks, and Roam Enigmatic
            Streets. Let Every Sunset Paint a Story, Every Sunrise Awaken a
            Dream, and Every Destination Be a Symphony of Experiences. Discover
            Hidden Treasures, Forge Unforgettable Bonds, and Create a Tapestry
            of Memories That Transcends Time. Embrace the Unknown, Embody
            Adventure, and Let the World Be Your Canvas as You Leave Footprints
            of Wonder Wherever You Go. This Is Your Odyssey; This Is Your
            Legacy.
          </p>
          <div class="d-grid gap-2 pb-4 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" class="btn  btn-lg px-4 me-sm-3">
              <Link to="/blog">BLOG</Link>
            </button>
            <button type="button" class="btn  btn-lg px-4 ">
              <Link to="/createblog">CREATE BLOG</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
