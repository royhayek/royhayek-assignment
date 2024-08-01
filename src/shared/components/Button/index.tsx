// Packages
import classNames from "classnames";

// Interfaces
interface ButtonProps {
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  secondary?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

// Component
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  loading = false,
  disabled = false,
  secondary = false,
  className = "",
}) => {
  const buttonClassNames = classNames(
    "w-full px-4 py-2 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-75",
    {
      "bg-gray-400 text-gray-100": disabled,
      "cursor-not-allowed opacity-50": loading,
      "bg-green-600 hover:bg-green-700 focus:ring-green-400 text-white": !secondary && !disabled,
      "bg-transparent border-2 border-gray-300 focus:ring-gray-400 text-gray-300 hover:bg-gray-50":
        secondary && !disabled,
    },
    className
  );

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={buttonClassNames}>
      {children}
    </button>
  );
};

export default Button;
