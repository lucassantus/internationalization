import { application } from "@/constants/application";

export function getProjectKey(key: string){
  return "@".concat(key).concat("/").concat(application.version)
}