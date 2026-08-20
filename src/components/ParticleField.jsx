import { useEffect, useRef } from 'react'
import { createNoise3D } from 'simplex-noise'

class HSLA {
  constructor(h = 0, s = 0, l = 0, a = 0) {
    this.h = h
    this.s = s
    this.l = l
    this.a = a
  }

  toString() {
    return `hsla(${this.h},${this.s * 100}%,${this.l * 100}%,${this.a})`
  }
}

class Particle {
  constructor() {
    this.x = 0
    this.y = 0
    this.pastX = 0
    this.pastY = 0
    this.color = new HSLA()
  }
}

export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return undefined

    const config = {
      backgroundColor: '#eee9e9',
      particleNum: window.innerWidth < 720 ? 280 : 700,
      step: 5,
      base: 1000,
      zInc: 0.001,
    }

    const particles = []
    let context
    let screenWidth = 0
    let screenHeight = 0
    let centerX = 0
    let centerY = 0
    let hueBase = 0
    let zoff = 0
    let noise3D = createNoise3D()
    let frameId = 0
    let running = true

    const getNoise = (x, y, z) => {
      let amp = 1
      let f = 1
      let sum = 0
      for (let i = 0; i < 4; i += 1) {
        amp *= 0.5
        sum += amp * (noise3D(x * f, y * f, z * f) + 1) * 0.5
        f *= 2
      }
      return sum
    }

    const initParticle = (particle) => {
      particle.x = particle.pastX = screenWidth * Math.random()
      particle.y = particle.pastY = screenHeight * Math.random()
      particle.color.h = hueBase + (Math.atan2(centerY - particle.y, centerX - particle.x) * 180) / Math.PI
      particle.color.s = 1
      particle.color.l = 0.5
      particle.color.a = 0
    }

    const resize = () => {
      const parent = canvas.parentElement
      screenWidth = canvas.width = parent?.clientWidth || window.innerWidth
      screenHeight = canvas.height = parent?.clientHeight || window.innerHeight
      centerX = screenWidth / 2
      centerY = screenHeight / 2
      context = canvas.getContext('2d')
      context.lineWidth = 0.3
      context.lineCap = context.lineJoin = 'round'
    }

    const update = () => {
      if (!running) return
      const { step, base } = config
      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i]
        particle.pastX = particle.x
        particle.pastY = particle.y
        const angle = Math.PI * 6 * getNoise((particle.x / base) * 1.75, (particle.y / base) * 1.75, zoff)
        particle.x += Math.cos(angle) * step
        particle.y += Math.sin(angle) * step
        if (particle.color.a < 1) particle.color.a += 0.003
        context.beginPath()
        context.strokeStyle = particle.color.toString()
        context.moveTo(particle.pastX, particle.pastY)
        context.lineTo(particle.x, particle.y)
        context.stroke()
        if (particle.x < 0 || particle.x > screenWidth || particle.y < 0 || particle.y > screenHeight) {
          initParticle(particle)
        }
      }
      hueBase += 0.1
      zoff += config.zInc
      frameId = window.requestAnimationFrame(update)
    }

    const onClick = () => {
      context.save()
      context.globalAlpha = 0.8
      context.fillStyle = config.backgroundColor
      context.fillRect(0, 0, screenWidth, screenHeight)
      context.restore()
      noise3D = createNoise3D()
    }

    const onVisibility = () => {
      running = document.visibilityState === 'visible'
      if (running) frameId = window.requestAnimationFrame(update)
    }

    resize()
    for (let i = 0; i < config.particleNum; i += 1) {
      const particle = new Particle()
      initParticle(particle)
      particles.push(particle)
    }

    window.addEventListener('resize', resize)
    canvas.addEventListener('click', onClick)
    document.addEventListener('visibilitychange', onVisibility)
    frameId = window.requestAnimationFrame(update)

    return () => {
      running = false
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('click', onClick)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-canvas" id="c" aria-hidden="true" />
}
