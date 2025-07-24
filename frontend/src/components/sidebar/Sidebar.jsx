import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import LogoutButton from "./LogoutButton";
const Sidebar = () => {
	return (
	<div className="border-r border-gray-300 p-4 flex flex-col gap-3 
  bg-gradient-to-b from-green-300 via-green-200 to-blue-200 
  text-black shadow-md rounded-xl backdrop-blur-sm">



			<SearchInput />
			<div className='divider px'></div>
			<Conversations/>
			<LogoutButton/>
		</div>
	);
};
export default Sidebar;