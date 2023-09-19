import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={"30px"} />
        </>
      ),
      href: "https://www.linkedin.com/in/venkatesh-koppar/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={"30px"} />
        </>
      ),
      href: "https://github.com/Venkatesh-j-koppar",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={"30px"} />
        </>
      ),
      href: "mailto:venkateshkoppar@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={"30px"} />
        </>
      ),
      href: "./resume.pdf",
      style: "rounded-br-lg",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex items-center w-40 h-14 bg-gray-500 px-4 ml-[-100px] hover:ml-[-10px]  duration-300 hover:rounded-md" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              <>{child}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
