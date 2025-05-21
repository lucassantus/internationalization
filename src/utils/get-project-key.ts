import { application } from "@/constants/application";

export function getProjectKey(key: string) {
  const keys: string[] = ["@", key, "/", application.version];

  return keys.join("");
}