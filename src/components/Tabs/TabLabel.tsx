"use client";

import clsx from "clsx";
import Link from "next/link";

interface Props {
  label: string;
  selected: boolean;
  href: string;
  classTabLabel?: string;
  customClassActive?: string;
}

const TabLabel: React.FC<Props> = ({
  label,
  selected,
  href,
  classTabLabel,
  customClassActive,
}) => {
  return (
    <>
      <Link
        type="link"
        href={href}
        className={clsx(
          "w-fit cursor-pointer border-solid border-Gray/9 py-2 max-t:px-2",
          "mobile-paragraph-p1 t:desktop-heading-h5",
          classTabLabel,
          selected && customClassActive,
          {
            " text-primary-1 ": selected,
            "text-[#aaa]": !selected,
          }
        )}
      >
        {label}
      </Link>
    </>
  );
};

export default TabLabel;
