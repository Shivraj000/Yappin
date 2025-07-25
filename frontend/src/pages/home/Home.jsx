import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`w-full sm:w-[300px] border-r border-slate-500 ${
          selectedConversation ? "hidden sm:block" : "block"
        }`}
      >
        <Sidebar />
      </div>

      {/* Message Container */}
      <div
        className={`w-full sm:flex-1 ${
          selectedConversation ? "block" : "hidden sm:block"
        }`}
      >
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
