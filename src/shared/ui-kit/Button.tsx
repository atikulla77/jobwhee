interface ButtonProps {
  type: string;
  action: string;
  onClick?: () => void;
  padding?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  type = "active",
  action = "Next",
  onClick,
  padding = true,
}) => {
  return (
    <button
      type="submit"
      disabled={type === "disabled" && true}
      onClick={onClick}
      className={`w-full h-full text-base flex items-center justify-center ${
        type === "disabled" ? "" : "cursor-pointer"
      } text-[#18470D] ${
        type === "transparent"
          ? `${padding ? "xl:px-[41px] px-[25px]" : ""}`
          : `${padding ? "xl:px-[25px] px-[20px]" : ""}`
      }  md:text-[15px] text-[14px] rounded-full font-medium transition-all duration-300
        ${
          type === "active"
            ? "bg-[#CBEC5E] hover:bg-[#ACD624] cursor-pointer"
            : type === "transparent"
            ? "border border-[#CCCCCC] cursor-pointer hover:bg-[#ACD624]"
            : type === "nonBorder"
            ? "bg-transparent"
            : "bg-[#E2E2E2] text-[#B8B8B8]"
        }`}
    >
      {action}
    </button>
  );
};

export default Button;
