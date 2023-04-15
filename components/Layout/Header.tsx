import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo_ngang.png";
import SearchInput from "../SearchInput";
type HeaderProps = {};

export default function Header(props: HeaderProps) {
  return (
    <header className="h-[70px] bg-slate-900 py-5">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="flex justify-between">
          <Link href={"/"}>
            <Image
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="logo"
              src={logo}
            ></Image>
          </Link>
          <SearchInput></SearchInput>
          <div className="flex flex-shrink-0 items-center gap-[10px]">
            <Image
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-1/318844044_540025561507271_489876402112616100_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=y3Um6WOIuJwAX-osgug&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCd_ZPyNQFje59YI1llVBIAN5yvnvMFh6EX2R_X-ri5ZQ&oe=643F3EA7"
              alt="ava"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            ></Image>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white ">
                Vu Quang
              </span>
              <span className="text-gray-100">Admin User</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
