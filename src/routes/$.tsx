import { createFileRoute } from "@tanstack/react-router";
import { IndexComponent } from "./index";

export const Route = createFileRoute("/$")({
  component: IndexComponent,
});
