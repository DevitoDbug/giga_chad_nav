import Link from "next/link";
import { Menu, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onOpenSidebar: () => void;
}

export function Navbar({ onOpenSidebar }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 border-b bg-background">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold mr-6">
          Logo
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-foreground hover:text-primary">
            Home
          </Link>
          <Link href="/" className="text-foreground hover:text-primary">
            Dashboard
          </Link>
          <Link href="/" className="text-foreground hover:text-primary">
            Projects
          </Link>
          <Link href="/" className="text-foreground hover:text-primary">
            Team
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
          <span className="sr-only">Profile</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onOpenSidebar}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open sidebar</span>
        </Button>
      </div>
    </nav>
  );
}
