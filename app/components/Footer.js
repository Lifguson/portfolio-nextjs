import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div>
        <div>
          © 2023 Leon Wellstead<a></a>
        </div>
        <div>
          <a>
            <AiOutlineGithub />
          </a>
          <a>
            <AiOutlineTwitter />
          </a>
          <a>
            <AiOutlineLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
