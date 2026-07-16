import { AnimatePresence, motion } from "framer-motion";

export default function Contact({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="contact-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="contact-content"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
          >
            <div className="contact-text">
         
              <h1>I take appointments by call or text.</h1>
              <a className="contact-phone" 
                href="tel:+12069793771" 
                onClick={(e) => e.stopPropagation()}
              >
                (206) 979-3771
              </a>
              <p>
                When reaching out, please include your desired hairstyle,
                current hair length, and any reference photos.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}