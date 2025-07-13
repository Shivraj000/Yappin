import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import LogoutButton from "./LogoutButton";
const Sidebar = () => {
	return (
	<div className="border-r border-gray-300 p-4 flex flex-col gap-3 
  bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 
  text-black shadow-md rounded-xl backdrop-blur-sm">


			<SearchInput />
			<div className='divider px'></div>
			<Conversations/>
			<LogoutButton/>
		</div>
	);
};
export default Sidebar;