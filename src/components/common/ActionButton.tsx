import Link from "next/link";
import { Button } from "../ui/button";

function ActionButton() {
  return (
    <Button
      asChild
      className="button-gradient repate h-12 rounded-[5px] p-2.5 text-lg leading-6 font-medium text-white"
    >
      <Link href="/">Get a Quote</Link>
    </Button>
  );
}

export default ActionButton;
