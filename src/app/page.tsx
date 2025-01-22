import { DEFAULT_LOCALE } from "@/constants/globals";
import { permanentRedirect } from "next/navigation";

export default function Home() {
  permanentRedirect(`/${DEFAULT_LOCALE}/dashboard`)
}
