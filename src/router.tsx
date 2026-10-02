import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function getBasePath(): string {
  if (typeof window === "undefined") return "/";
  const path = window.location.pathname;
  if (path.includes("/madhu-mitha-luxury-wish")) {
    return "/madhu-mitha-luxury-wish";
  }
  return "/";
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    basepath: getBasePath(),
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
