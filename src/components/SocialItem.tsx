import {
  LiaTwitter,
  LiaFacebookF,
  LiaLinkedinIn,
  LiaInstagram,
} from "react-icons/lia";

export default function SocialItem() {
  const classname = `text-gray-700 hover:text-blue-500 text-xl cursor-pointer `;
  return (
    <>
      <LiaTwitter className={classname} />
      <LiaFacebookF className={classname} />
      <LiaLinkedinIn className={classname} />
      <LiaInstagram className={classname} />
    </>
  );
}
