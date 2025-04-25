import Button from "./GButton";
import SocialButton from "./SocialButton";
import LanguageSelector from "./language";
import Switch from "./Toggle";

const Footer = () => {
  return (
    <footer>
      <hr />
      {/* <div className="flex justify-between items-center">
        <div className="flex flex-col fle items-left mx-5 gap-2">
          <div className="font-[700]">Get the GetResponse App</div>
          <div>
            <Button />
          </div>
        </div>
        <div className="flex flex-col  items-center  justify-center gap-2">
          <div className="font-[700]">Follow us</div>
          <div className="flex">
            <SocialButton />
          </div>
        </div>
        <div className="flex flex-col  items-left gap-2">
          <div className="font-[700]">Change the language</div>
          <div>
            <LanguageSelector />
          </div>
        </div>
        <div className="flex flex-col items-left mx-5 gap-2">
          <div className="font-[700]">Turn on high contrast</div>
          <div>
            <Switch />
          </div>
        </div>
      </div> */}

      <div className="px-14 py-5">
        <ul className="flex justify-between">
          <li className="ml-5">
            <div className="font-[700]">Get the GetResponse App</div>
            <div>
              <Button />
            </div>
          </li>
          <li>
            <div className="font-[700]">Follow us</div>
            <div className="flex">
              <SocialButton />
            </div>
          </li>
          <li>
            <div className="font-[700]">Change the language</div>
            <div>
              <LanguageSelector />
            </div>
          </li>
          <li className="mr-5">
            <div className="font-[700]">Turn on high contrast</div>
            <div>
              <Switch />
            </div>
          </li>
        </ul>
      </div>
      <div className="flex justify-between px-14">
        <div>Copyright © 2025 GetResponse. Email marketing & beyond®</div>

        <div>
          <ul className="flex gap-8">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Anti-Spam Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
