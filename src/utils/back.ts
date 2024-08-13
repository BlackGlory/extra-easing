import { EasingFunction } from '@src/types.js'

/**
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.backease
 */
export function back(amplitude: number): EasingFunction {
  return normalizedTime => {
    // 手动修正误差
    if (normalizedTime === 1) return 1

    return normalizedTime ** 3
         - normalizedTime * amplitude * Math.sin(normalizedTime * Math.PI)
  }
}
