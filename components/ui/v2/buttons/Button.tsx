import React from "react";
import Link from "next/link";

type ButtonProps = {
  width?: "normal" | "full";
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  width = "normal",
  onClick,
  href,
  children,
  disabled = false,
  className = "",
  iconLeft,
  iconRight,
}) => {
  const normalWidth = "rounded-full py-[10px] px-[28px]";
  const fullWidth = "rounded-full py-[10px] w-full";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
  const hasIcon = iconLeft || iconRight;
  const iconLayoutClass = hasIcon ? "flex justify-center items-center" : "";
  const finalClassName = `${
    width === "normal" ? normalWidth : fullWidth
  } ${disabledClass} ${iconLayoutClass} ${className}`.trim();

  const content = (
    <>
      {iconLeft && <span>{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span>{iconRight}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href}>
        <p className={finalClassName}>{content}</p>
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={finalClassName}>
      {content}
    </button>
  );
};

export default Button;
