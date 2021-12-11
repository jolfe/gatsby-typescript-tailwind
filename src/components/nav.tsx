import React from "react"
import { Link } from "gatsby"

interface INav {
  navItems: string[]
  logo: string
}

const Nav: React.FC<INav> = ({ navItems, logo }) => {
  return (
    <nav className="nav flex w-full h-24  bg-slate-200">
      <img className="ml-4" src={logo} alt="logo" />
      <ul className="flex flex-row justify-end mx-8 m-auto w-full">
        {navItems.map((item, index) => {
          return (
            <li className="inline-flex" key={index}>
              <button className="w-20 rounded-xl p-2 mx-2 bg-amber-500 shadow-lg shadow-yellow-500/50">
                <Link to="#About">{item}</Link>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
