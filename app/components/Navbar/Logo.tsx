"use client";

import Image from "next/image";
import { useRouter } from "next/router";

import { useEffect } from "react";

const Logo = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);

  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
      src="/images/logo.png"
    />
  );
};
export default Logo;
