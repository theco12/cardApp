import { useState } from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">coffeeRoad</div>
        <div className="navbar__list">
          <Link className="navbar__list--item" href="/stores">
            맛집 목록
          </Link>
          <Link className="navbar__list--item" href="/stores/new">
            맛집 등록
          </Link>
          <Link className="navbar__list--item" href="/stores/likes">
            찜한 가게
          </Link>
          <Link className="navbar__list--item" href="/users/login">
            로그인
          </Link>
        </div>
        {/* mobile button */}
        <div
          role="presentation"
          className="navbar__button"
          onClick={() => {
            setIsOpen((val) => !val);
          }}>
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </div>
      </div>
      {/* mobile menu */}
      {isOpen && (
        <div className="navbar--mobile">
          <div className="navbar__list--mobile">
            <Link className="navbar__mobile--item" href="/stores">
              맛집 목록
            </Link>
            <Link className="navbar__mobile--item" href="/stores/new">
              맛집 등록
            </Link>
            <Link className="navbar__mobile--item" href="/stores/likes">
              찜한 가게
            </Link>
            <Link className="navbar__mobile--item" href="/users/login">
              로그인
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
