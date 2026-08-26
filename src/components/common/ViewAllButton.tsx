
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface ViewAllButtonProps {
 children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
function ViewAllButton({ children,onClick, className }: ViewAllButtonProps) {
  return (
    <div className="text-center">
      <Button
        onClick={onClick}
        variant="ghost"
        className={cn(
          "text-[18px] font-medium leading-[24px]  rounded-none cursor-pointer border-0 border-b border-white outline-none hover:bg-transparent  px-0",
          className,
        )}
      >
        {children}
      </Button>
    </div>
  );
}

export default ViewAllButton;
