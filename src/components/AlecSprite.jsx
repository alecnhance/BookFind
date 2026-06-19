import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'

const SPRITE_W    = 48
const SPEED       = 90    // px/s horizontal
const BOUNCE_H    = 14    // px vertical bounce amplitude
const BOUNCE_P    = 0.40  // seconds per bounce cycle
const FLIP_DUR    = 0.55  // seconds for one full backflip
const FLIP_JUMP   = 72    // px upward during flip

export function SpriteBody({ frame }) {
  const leftLegH   = frame === 0 ? 10 : 7
  const rightLegH  = frame === 0 ? 7  : 10
  const leftShoeY  = frame === 0 ? 35 : 32
  const rightShoeY = frame === 0 ? 32 : 35

  return (
    <svg viewBox="0 0 24 36" width={SPRITE_W} height={72}
      style={{ display: 'block', imageRendering: 'pixelated' }}>

      {/* Hair */}
      <rect x="3"  y="0" width="18" height="7" rx="2" fill="#1a0800" />
      {/* Middle part */}
      <rect x="11" y="0" width="2"  height="3"        fill="#2e1200" />

      {/* Face */}
      <rect x="4" y="4" width="16" height="10" rx="1.5" fill="#f5c9a0" />

      {/* Eyes — blue */}
      <rect x="6"  y="7" width="3" height="2" rx="0.5" fill="#60a5fa" />
      <rect x="15" y="7" width="3" height="2" rx="0.5" fill="#60a5fa" />

      {/* Smile */}
      <rect x="9" y="11" width="6" height="1.5" rx="0.8" fill="#c0786a" />

      {/* Neck */}
      <rect x="10" y="13" width="4" height="3" fill="#f5c9a0" />

      {/* Shirt — wide shoulders */}
      <rect x="0" y="15" width="24" height="2" rx="1" fill="#2563eb" />
      <rect x="3" y="16" width="18" height="7"         fill="#2563eb" />

      {/* Arms */}
      <rect x="0"  y="15" width="4" height="9" rx="1" fill="#f5c9a0" />
      <rect x="20" y="15" width="4" height="9" rx="1" fill="#f5c9a0" />

      {/* Pants */}
      <rect x="3" y="23" width="18" height="3" fill="#1e3a8a" />

      {/* Legs */}
      <rect x="3"  y="26" width="8" height={leftLegH}  rx="1" fill="#1e3a8a" />
      <rect x="13" y="26" width="8" height={rightLegH} rx="1" fill="#1e3a8a" />

      {/* Shoes */}
      <rect x="2"  y={leftShoeY}  width="10" height="1.5" rx="0.5" fill="#111" />
      <rect x="12" y={rightShoeY} width="10" height="1.5" rx="0.5" fill="#111" />
    </svg>
  )
}

export default function AlecSprite({ flipKey = 0 }) {
  const x      = useMotionValue(0)
  const y      = useMotionValue(0)
  const rotate = useMotionValue(0)
  const [facingLeft, setFacingLeft] = useState(false)
  const [frame, setFrame] = useState(0)

  const s = useRef({
    xPos: 0, dir: 1,
    bounceTime: 0, frameTime: 0,
    lastTs: null,
    flipping: false, flipTime: 0,
  })

  // Trigger flip whenever flipKey increments
  useEffect(() => {
    if (flipKey > 0) {
      s.current.flipping  = true
      s.current.flipTime  = 0
    }
  }, [flipKey])

  useEffect(() => {
    let rafId

    const tick = (ts) => {
      const c = s.current
      if (c.lastTs === null) c.lastTs = ts
      const dt = Math.min((ts - c.lastTs) / 1000, 0.1)
      c.lastTs = ts

      // ── Horizontal roam ──
      const maxX = window.innerWidth - SPRITE_W - 16
      c.xPos += c.dir * SPEED * dt
      if (c.xPos >= maxX) { c.xPos = maxX; c.dir = -1; setFacingLeft(true)  }
      else if (c.xPos <= 0) { c.xPos = 0;  c.dir =  1; setFacingLeft(false) }
      x.set(c.xPos)

      // ── Vertical + rotation ──
      if (c.flipping) {
        c.flipTime += dt
        const p = Math.min(c.flipTime / FLIP_DUR, 1)           // 0 → 1
        y.set(-FLIP_JUMP * Math.sin(p * Math.PI))               // arc up and back
        rotate.set(-360 * p)                                    // full backflip
        if (p >= 1) {
          c.flipping = false
          c.flipTime = 0
          rotate.set(0)
          c.bounceTime = 0  // restart bounce from y=0 to avoid pop
        }
      } else {
        c.bounceTime += dt
        y.set(-BOUNCE_H * Math.abs(Math.sin((c.bounceTime * Math.PI) / BOUNCE_P)))
        rotate.set(0)
      }

      // ── Walk frame ──
      c.frameTime += dt
      if (c.frameTime >= 0.16) {
        c.frameTime = 0
        setFrame(f => (f + 1) % 2)
      }

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <motion.div style={{ x, position: 'fixed', bottom: 12, left: 0, zIndex: 50, pointerEvents: 'none' }}>
      <motion.div style={{ y, rotate }}>
        <div style={{ transform: facingLeft ? 'scaleX(-1)' : 'scaleX(1)' }}>
          <SpriteBody frame={frame} />
        </div>
      </motion.div>
    </motion.div>
  )
}
