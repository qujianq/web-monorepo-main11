// src/composables/useDark.ts
export function useDark() {
  /** 开启暗黑模式 */
  function enableDarkMode() {
    document.documentElement.classList.add('dark')
    localStorage.setItem('color-scheme', 'dark')
  }

  /** 关闭暗黑模式 */
  function disableDarkMode() {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('color-scheme', 'light')
  }

  /**
   * 应用保存的主题
   * 通常在页面加载时调用
   */
  function applySavedTheme() {
    const savedTheme = localStorage.getItem('color-scheme')
    if (savedTheme === 'dark') {
      enableDarkMode()
    }
    else {
      disableDarkMode() // 默认情况下关闭暗黑模式
    }
  }

  /**
   * 检测系统是否偏好深色模式
   * 可用于初始化或自动切换主题
   */
  function prefersDarkScheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  return {
    enableDarkMode,
    disableDarkMode,
    applySavedTheme,
    prefersDarkScheme,
  }
}
