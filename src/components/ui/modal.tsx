"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.2 } }}
          className="fixed inset-0 bg-[#00000080] z-50 flex items-center justify-center"
          style={{ backdropFilter: "blur(10px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, transition: { duration: 0.2 } }}
            className={cn(
              "bg-[white] max-h-[90vh] overflow-auto p-4 w-96 rounded-xl",
              className
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
