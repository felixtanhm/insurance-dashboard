import SideBarToolTip from "./SidebarTooltip";

function SideBar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-white sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 mt-14">
        <SideBarToolTip href={"/"} content={"Home"} />
        <SideBarToolTip href={"/policies"} content={"Policies"} />
        <SideBarToolTip href={"/customers"} content={"Customers"} />
      </nav>
    </aside>
  );
}

export default SideBar;
