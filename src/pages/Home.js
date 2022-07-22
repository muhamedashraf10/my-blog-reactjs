import CreatePost from "../component/CreatePosts";
import Post from "../component/posts";
import SideLeft from "../component/sideLeft";
import SideRight from "../component/sideRight";
import Story from "../component/Stories";
import "./Home.css";

const Home = ({ posts, handelerSavePost }) => {
  return (
    <div className="home">
      <div className="row ">
        <div className="col-3">{<SideLeft />}</div>
        <div className="col-6 center-side">
          <div className="row">
            <div className=" mb-5 col-12 ">{<Story />}</div>
            <div className=" mb-5 col-12 ">{<CreatePost />}</div>
            <div className="col-12">
              {<Post posts={posts} handelerSavePost={handelerSavePost} />}
            </div>
          </div>
        </div>
        <div className="col-3">{<SideRight />}</div>
      </div>
    </div>
  );
};

export default Home;
