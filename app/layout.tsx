"use client";

import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { AppSidebar } from "./components/sidebar";
import { Navbar } from "./components/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <Navbar onOpenSidebar={() => setOpen(true)} />
        <SidebarProvider>
          <div className="flex w-full">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetContent side="left" className="p-0 w-64">
                <div> 1.New menu stuff </div>
                <div> 2.New menu stuff</div>
              </SheetContent>
            </Sheet>
            <aside className="block">
              <AppSidebar />
            </aside>
            <main className="flex-1 mx-2 w-full mt-20">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
