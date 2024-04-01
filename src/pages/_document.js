import { LoginModal } from "@/components/modals/auth/LoginModal";
import { Warning } from "@/components/modals/warning";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <Warning />
      <LoginModal />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
