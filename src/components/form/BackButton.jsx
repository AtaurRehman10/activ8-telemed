import { motion } from 'framer-motion'

export default function BackButton({ onClick }) {
  return (
    <motion.div
      whileHover={{ x: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer', userSelect: 'none', marginBottom: 24, alignSelf: 'flex-start' }}
    >
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
        <path d="M14 5L8 11L14 17" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 16, color: '#6b7280' }}>Back</span>
    </motion.div>
  )
}
