import {Menu} from "lucide-react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";

interface MobileSidebarProps {
    isPro: boolean;
}
const MobileSidebar = ({isPro}:MobileSidebarProps) => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4">
                <Menu className="h-6 w-6 text-primary"/>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-secondary pt-10 w-32">
                <Sidebar isPro={isPro}/>
            </SheetContent>
        </Sheet>
    );
};

export default MobileSidebar;