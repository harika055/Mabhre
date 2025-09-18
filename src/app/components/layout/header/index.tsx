import { useEffect, useState } from "react";
import Image from "next/image";
import MenuList from "./MenuList";
import Link from "next/link";
import ThemeToggler from "./ThemeToggle";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Logo from "../logo";

const Header = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState<{ user: any } | null>(null);
  const [menuData, setMenuData] = useState<any>(null);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const fetchData = async () => {
      try {
        const res = await fetch("/api/layout-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setMenuData(data?.MenuData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    signOut();
    setUser(null);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full border-t-4 border-primary transition-all duration-500 ease-in-out before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:bg-primary before:transition-all before:duration-500 before:ease-in-out ${
        sticky ? "before:h-full" : "before:h-0"
      }`}
    >
      <div className="container">
        <nav
          className={`relative flex items-center justify-between ${
            sticky ? "py-5" : "py-7"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Logo sticky={sticky} />
          </div>

          {/* Menu Links Directly in Navbar */}
          <ul className="hidden md:flex items-center gap-8">
            {menuData?.map((menuItem: any, index: any) => (
              <MenuList key={index} item={menuItem} closeMenu={() => {}} />
            ))}
          </ul>

          {/* Right side controls */}
          <div className="flex items-center gap-7">
            <ThemeToggler />
            {user?.user || session?.user ? (
              <div className="relative group flex items-center justify-center">
                <Image
                  src="/images/avatar/avatar_1.jpg"
                  alt="Image"
                  width={35}
                  height={35}
                  quality={100}
                  className="rounded-full cursor-pointer"
                />
                <p className="absolute w-fit text-sm font-medium text-center z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 bg-gray text-white py-1 px-2 min-w-28 rounded-full shadow-2xl top-full left-1/2 transform -translate-x-1/2 mt-3">
                  {user?.user || session?.user?.name}
                </p>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link
                  href={"/signin"}
                  className="flex justify-center items-center gap-2 text-secondary dark:text-white text-base font-semibold rounded-full border border-secondary/20 dark:border-white py-1.5 px-4.5 hover:bg-secondary/15"
                >
                  Sign In
                </Link>
                <Link
                  href={"/signup"}
                  className="flex justify-center items-center gap-2 text-white text-base font-semibold rounded-full bg-secondary py-2 px-4.5 hover:bg-secondary/90"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
