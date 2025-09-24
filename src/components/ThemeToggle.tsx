import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

interface ThemeToggleProps {
  darkMode: boolean;
  isMobile: boolean;
  onThemeChange: () => void;
}

export function ThemeToggle({
  darkMode,
  onThemeChange,
  isMobile,
}: ThemeToggleProps) {
  return (
    <div className="flex items-center justify-between w-20 p-1 rounded-full border border-gray-300 bg-white dark:bg-primary shadow-sm">
      <button
        onClick={() => {
          if (darkMode) onThemeChange();
        }}
        className={`flex items-center justify-center w-8 h-8 cursor-pointer rounded-full transition-all duration-300
        ${
          !darkMode
            ? "bg-yellow-500 text-white shadow"
            : "text-gray-400 hover:text-yellow-500"
        }
      `}
      >
        <LightModeIcon fontSize={isMobile ? "small" : "medium"} />
      </button>

      <button
        onClick={() => {
          if (!darkMode) onThemeChange();
        }}
        className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all duration-300
        ${
          darkMode
            ? "bg-blue-900 text-white shadow"
            : "text-gray-400 hover:text-blue-900"
        }
      `}
      >
        <DarkModeIcon fontSize={isMobile ? "small" : "medium"} />
      </button>
    </div>
  );
}
