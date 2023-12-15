import { ReactNode } from "react";

export default function StudentLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <aside className="bg-gray-300 w-80 flex justify-center items-center self-stretch text-3xl">
        STUDENT SIDEBAR
      </aside>
      <main className="flex-1 flex justify-center items-center text-5xl">
        {children}
      </main>
    </>
  );
}
