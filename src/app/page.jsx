import SideBar from "@/components/Sidebar";
import TopBar from "@/components/Topbar";

export default function Home() {
  return (
    <div className="bg-foreground h-screen">
      <SideBar />
      <div className="ml-14">
        <TopBar />
        <main>Hello World</main>
      </div>
    </div>
  );
}
