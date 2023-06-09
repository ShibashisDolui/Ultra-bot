import { SessionProvider } from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import Sidebar from "@component/components/Sidebar";
import "./globals.css";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "@component/components/Login";
import ClientProvider from "@component/components/ClientProvider";

export const metadata = {
  title: "UltraBot",
  description: "Intelligent ultra fast chatbot",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-[#202123] max-w-xs min-h-screen overflow-y-auto md:min-w-[20rem]">
                <Sidebar />
              </div>

              <ClientProvider />

              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
