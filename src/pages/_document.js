import { LoginModal } from "@/components/modals/auth/LoginModal";
import { Warning } from "@/components/modals/warning";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-slate-900" style={{backgroundRepeat: "no-repeat"}}>
      <Warning />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
