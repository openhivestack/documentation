import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { HexagonIcon } from "lucide-react";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <HexagonIcon className="text-cyan-500" />
        OpenHive
      </>
    ),
  },
};
