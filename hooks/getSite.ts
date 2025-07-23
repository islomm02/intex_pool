import { API } from "@/hooks/getEnv";

export const getSiteData = async () => {
  const res = await fetch(`${API}/api/site`);
  return await res.json();
};
