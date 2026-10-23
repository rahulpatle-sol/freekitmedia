import { cn } from "@/lib/utils";

export default function Template({ children }: LayoutProps<"/">) {
  return <div className={cn("page-in")}>{children}</div>;
}
