import React from 'react'
const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "Legal Assistant",
    path: "/legalassistant",
  },
  {
    name: "Documentation Helper",
    path: "documentationhelper",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className='w-full flex-row flex justify-between'>
        <div>
            <img className='' width={80} height={80} src='logo.png'></img>
        </div>
        <div className="flex gap-8 flex-row  justify-center items-center">
      
            {links.map((link, index) => {
                return (
                <a
                    href={link.path}
                    key={index}
                    className="text-[#cbacf9] border-b-2 border-[#cbacf9]
                    capitalize font-medium hover:text-[#ffffff] transition-all duration 100"
                >
                    {link.name}
                </a>
                );
            })}
        </div>    
    </nav>
    
  )
}

export default Navbar