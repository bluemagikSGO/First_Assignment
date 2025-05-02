import Button from "./GButton";
import SocialButton from "./SocialButton";
import LanguageSelector from "./language";
import Switch from "./Toggle";

const Footer = () => {
  return (
    <footer className="bg-white">
      <hr />
      <div className="px-4 sm:px-8 lg:px-14 py-5">
        <ul className="flex flex-col max-lg:gap-6 lg:flex-row lg:justify-between">
          <li className="ml-0 lg:ml-5">
            <div className="font-bold">Get the GetResponse App</div>
            <div>
              <Button />
            </div>
          </li>
          <li>
            <div className="font-bold">Follow us</div>
            <div className="flex">
              <SocialButton />
            </div>
          </li>
          <li>
            <div className="font-bold">Change the language</div>
            <div>
              <LanguageSelector />
            </div>
          </li>
          <li className="mr-0 lg:mr-5">
            <div className="font-bold">Turn on high contrast</div>
            <div>
              <Switch />
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col max-lg:gap-4 lg:flex-row lg:justify-between px-4 sm:px-8 lg:px-14 py-5">
        <div>Copyright © 2025 GetResponse. Email marketing & beyond®</div>
        <div>
          <ul className="flex flex-col max-lg:gap-2 lg:flex-row lg:gap-8">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Anti-Spam Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
