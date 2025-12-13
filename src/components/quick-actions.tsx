import { ChevronRightIcon, Sheet, UserCheck } from "lucide-react";
import { Item, ItemActions, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";

export function QuickActions() {
  return (
    <div className="flex flex-col gap-4">
      <Item variant="outline" size="sm" asChild>
        <a href="/">
          <ItemMedia>
            <UserCheck className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Navigate to the lead capture page.</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>

      <Item variant="outline" size="sm" asChild>
        <a href="/">
          <ItemMedia>
            <Sheet className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Export lead data to CSV format.</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  );
}
