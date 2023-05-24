"use client";

import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { db } from "@component/firebase";

function NewChat() {
  const router = useRouter();

  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`/chat/${doc.id}`);
  };

  return (
    <div
      className="bg-gray-900 bg-opacity-40 border-gray-700 border rounded-lg px-5 py-3 text-sm flex items-center justify-center space-x-2 hover:bg-gray-700/70 cursor-pointer text-gray-300 transition-all duration-200 ease-out"
      onClick={createNewChat}
    >
      <PlusIcon className="h-5 w-5 text-white" />
      <p className="text-lg font-bold">New Chat</p>
    </div>
  );
}

export default NewChat;
