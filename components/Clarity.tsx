"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityComponent() {
  useEffect(() => {
    Clarity.init("uzss6sz0nd");
  }, []);

  return null;
}
