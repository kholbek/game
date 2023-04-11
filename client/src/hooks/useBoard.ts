import { useEffect, useRef } from "react";
import { useAppActions, useAppState } from "../context/AppContext";

 /**
  * 
  * @param speed Selected Speed in number
  * 
  *   1x speed = 12s
  *   2x speed = 10s
  *   3x speed = 8s
  *   4x speed = 6s
  *   5x speed = 4s
  * 
  * @returns number in ms
  */
function getSpeedMs(speed: number): number {
  if(speed === 1) return 10 * 1000
  if(speed === 2) return 8 * 1000
  if(speed === 3) return 6 * 1000
  if(speed === 4) return 4 * 1000
  if(speed === 5) return 2 * 1000
  return 0
}

function animateValue(
  obj: HTMLSpanElement,
  start: number,
  end: number,
  duration: number,
  callBack?: Function) {
    let whenToStop = Math.random()
    let startTimestamp = 0

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      let value = progress * (end - start) + start
      obj.innerHTML = value.toFixed(2)
      if (progress < whenToStop) {
        window.requestAnimationFrame(step);
      } else {
        callBack?.(value)
      }
    };
    window.requestAnimationFrame(step);
  }
  
export function useBoard() {
    const { gameState, speed } = useAppState()
    const { finishGame } = useAppActions()
    const ref = useRef(0) // https://legacy.reactjs.org/docs/strict-mode.html
    const valueRef = useRef<HTMLSpanElement>(null)
    const ballRef = useRef<HTMLDivElement>(null)
    const pathRef = useRef<SVGPathElement>(null)

    useEffect(() => {
        if(
          gameState === 'STARTED'
          && valueRef.current !== null 
          && !ref.current
          && ballRef.current
          && pathRef.current
          && finishGame
          ) {
            ref.current++
            animateValue(valueRef.current, 0, 10, getSpeedMs(speed), (value: number) => {
              if(ballRef.current && pathRef.current) {
                ballRef.current.classList.add('stop-animation')
                pathRef.current.classList.add('stop-animation')
                finishGame(value)
              }
            })
        }
    }, [ref, valueRef, speed, gameState, ballRef, pathRef, finishGame])

    useEffect(() => {
        if(gameState === 'STARTED' && ballRef.current && pathRef.current) {
          ballRef.current.classList.add(`start-anim-ball-${speed}`)
          pathRef.current.classList.add(`start-anim-path-${speed}`)
        }
    }, [gameState, ballRef, pathRef, speed])

    return {
        valueRef, pathRef, ballRef
    }
}