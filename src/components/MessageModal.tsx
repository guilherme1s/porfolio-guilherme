import CloseIcon from "@mui/icons-material/Close";

interface MessageModalProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

export function MessageModal({ message, isOpen, onClose }: MessageModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative bg-white w-1/3 max-w-full p-12 rounded-lg shadow-lg z-50">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <span className="text-4xl">
            <CloseIcon fontSize="large" />
          </span>
        </button>

        <div className="flex items-center text-2xl font-medium mb-4 text-center justify-center gap-2">
          <h2>{message}</h2>
        </div>
      </div>
    </div>
  );
}
