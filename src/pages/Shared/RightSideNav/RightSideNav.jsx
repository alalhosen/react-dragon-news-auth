import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import QZone1 from '../../../assets/QZone1.png'
import QZone2 from '../../../assets/QZone2.png'
import QZone3 from '../../../assets/QZone3.png'

const RightSideNav = () => {
  return (
    <div>
      {/* Login With */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl font-bold">Login With</h2>
        <button className="btn btn-outline w-full">
          <GrGoogle></GrGoogle>
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Login With Github
        </button>
      </div>

      {/* Find Us on */}
      <div className="p-4  mb-6">
        <h2 className="text-2xl mb-3  font-bold">Find Us On</h2>
        <a
          className="p-4 flex text-lg items-center border rounded-t-lg"
          href=""
        >
          <FaFacebook
            className="mr-3
          "
          ></FaFacebook>
          <span>Facebook</span>
        </a>
        <a
          className="p-4 flex text-lg items-center border-x"
          href=""
        >
          <FaTwitter className="mr-3"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a
          className="p-4 flex text-lg items-center border rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-3"></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>

      {/* Q Zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl font-bold">Q Zone</h2>
        <img src={QZone1} alt="" />
        <img src={QZone2} alt="" />
        <img src={QZone3} alt="" />
       
      </div>
    </div>
  );
};

export default RightSideNav;
