import { Button } from "./ui/button";

function NavButtonGroup() {
  return (
    <div className="hidden lg:flex lg:items-center lg:gap-9">
      <Button variant="ghost">Профил</Button>
      <Button variant="outline">Заявка за пратка</Button>
    </div>
  );
}

export default NavButtonGroup;
