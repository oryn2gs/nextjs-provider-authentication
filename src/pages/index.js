"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Homepage = () => {
  const { data: session, status } = useSession();

  const handleLogout = (e) => {
    signOut();
  };

  console.log(session);

  let content;
  content = (
    <>
      <div>Homepage</div>
      <Link href="/login">Login page</Link>
    </>
  );

  if (session) {
    content = (
      <>
        <div>Homepage</div>
        <p>welcome {session.user.name}</p>
        <button onClick={handleLogout}>logout</button>
      </>
    );
  }
  return content;
};

export default Homepage;
