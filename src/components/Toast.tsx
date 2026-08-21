import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Bookmark } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export const Toast: React.FC = () => {
  const { toastMessage } = useWishlist();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#171717] text-[#F7F5F0] px-5 py-3.5 rounded-none shadow-2xl border border-[#333333] max-w-md"
          id="toast-notification"
        >
          <div className="w-6 h-6 rounded-full bg-[#596056] text-white flex items-center justify-center shrink-0">
            <Bookmark className="w-3.5 h-3.5 fill-current" />
          </div>
          <p className="text-sm font-light text-[#E8E1D6] tracking-wide">{toastMessage}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
