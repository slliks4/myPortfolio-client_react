// Component Imports
import MenuBtn from "../../MenuBtn";

// Default Function
export default function AppTopHeader() {
  return (
    <header className="bg-gray-900 p-4 flex justify-between items-center text-4xl w-screen fixed z-10 lg:hidden">
        <h1 className="pr-1 ">
            <span className="text-primary font-semibold">S</span>lliks<span className=''>4</span>
        </h1>
        <MenuBtn />
    </header>
  )
}
