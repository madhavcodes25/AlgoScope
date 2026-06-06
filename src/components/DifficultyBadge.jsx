import React from 'react'
import { useLocation } from 'react-router-dom'
import { ROUTE_DIFFICULTIES } from '../data/difficultyMap'

export const difficultyColors = {
  Beginner: {
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30'
  },
  Intermediate: {
    text: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30'
  },
  Advanced: {
    text: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/30'
  }
}

export default function DifficultyBadge({ difficulty, size = 'sm', className = '' }) {
  const location = useLocation()
  
  const activeDifficulty = difficulty || ROUTE_DIFFICULTIES[location.pathname]
  if (!activeDifficulty) return null

  const styles = difficultyColors[activeDifficulty] || difficultyColors.Beginner

  const sizeClasses = size === 'xs'
    ? 'px-1.5 py-0 text-[9px] tracking-normal'
    : 'px-2.5 py-0.5 text-[10px] tracking-wider'

  return (
    <span className={`inline-flex items-center rounded-full font-mono font-semibold border shrink-0 ${sizeClasses} ${styles.text} ${styles.bg} ${styles.border} ${className}`}>
      {activeDifficulty}
    </span>
  )
}
