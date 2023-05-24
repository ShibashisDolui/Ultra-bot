"use client";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "./NewChat";
import { collection, query, orderBy } from "firebase/firestore";
import { db } from "@component/firebase";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

function Sidebar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col min-h-screen bg-gradient-to-br from-indigo-900 to-pink-900">
      <div className="flex-1">
        <div>
          <NewChat />

          <div className="hidden sm:inline">
            <ModelSelection />
          </div>

          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}

            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>

      {session ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={session.user?.image!}
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          alt="Profile Picture"
        />
      ) : null}
      <div className="flex items-center mb-auto">
        <ArrowLeftOnRectangleIcon className="h-5 w-5 text-white mr-2" />
        <button
          onClick={() => signOut()}
          className="hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mt-auto transition-all duration-200"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
