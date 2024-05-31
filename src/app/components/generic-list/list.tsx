import type { ItemBase, ListProps } from "@/app/components/generic-list/models";
import { twMerge } from "tailwind-merge";

export const List = <T extends ItemBase>({
  children,
  items,
  header,
  footer,
  classeName,
}: ListProps<T>) => {
  return (
    <div className="list-content">
      {header}

      <ul className={twMerge(classeName)}>
        {items.map((item, index) => children({ item, index }))}
      </ul>
      {footer}
      {}
    </div>
  );
};
