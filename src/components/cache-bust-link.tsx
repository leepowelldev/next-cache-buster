"use client";

import Link from "next/link";
import { ReactNode } from "react";

export function CacheBustLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return <Link href={`${href}?t=${Date.now()}`}>{children}</Link>;
}
