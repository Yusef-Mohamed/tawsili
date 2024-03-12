import { motion } from "framer-motion";
import { ClassNameValue } from "tailwind-merge";
import { AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { cn } from "@/lib/utils";
interface SheetProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: ClassNameValue;
}

export const Sheet: React.FC<SheetProps> = ({
  children,
  isOpen,
  onClose,
  className,
}) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-[#00000080] z-50 flex"
          style={{ backdropFilter: "blur(10px)" }}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.2 } }}
        >
          <motion.div
            initial={{ translateX: "100%" }}
            animate={{ translateX: "0" }}
            exit={{ translateX: "100%", transition: { duration: 0.2 } }}
            className={cn(
              className,
              "h-full pt-10 px-4 bg-background-50 min-w-[250px] md:min-w-[300px] lg:w-[600px] bg-white text-black  relative"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 text-text-900 left-2 flex items-center justify-center border border-border rounded-full w-8 h-8 hover:bg-text-900 hover:text-background-50 transition-all"
            >
              <IoClose />
            </button>
            {children}
          </motion.div>
          <div className="w-full h-full cursor-pointer" onClick={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Sheet;
