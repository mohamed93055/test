import {
  AiFillContacts,
  AiFillInfoCircle,
  AiFillProduct,
} from "react-icons/ai";
import { FiHome } from "react-icons/fi";

export default function Icons({
  title,
  active,
}: {
  title: string;
  active: boolean;
}) {
  return (
    <>
      {title === "Home" ? (
        <FiHome className={`${active ? "text-gray-100" : null}  text-lg`} />
      ) : null}
      {title === "About" ? (
        <AiFillInfoCircle
          className={`${active ? "text-gray-100" : null}  text-lg`}
        />
      ) : null}
      {title === "Product" ? (
        <AiFillProduct
          className={`${active ? "text-gray-100" : null}  text-lg`}
        />
      ) : null}
      {title === "Contact us" ? (
        <AiFillContacts
          className={`${active ? "text-gray-100" : null}  text-lg`}
        />
      ) : null}
    </>
  );
}
