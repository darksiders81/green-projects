import React, { useEffect, useState } from 'react'
function propertySet(nameValue, newValue) {
    document.documentElement.style.setProperty(nameValue, newValue)
}





export default function useDarkMode() {
    const [isDark, setIsDark] = useState(() => {
        let localData = localStorage.getItem('Theme')
        if (localData) {
            return localData
        } else {
            return ''
        }
    })

    const darkTheme = (isDark) => {
        let darkData = isDark
        if (darkData === 'light') {
            propertySet('--bg-back', '#f4f6f4')
            propertySet('--bg-cardback', '#eff0ef')
            propertySet('--title-text', '#404742')
            propertySet('--text-nav', '#6a6a6a')
            propertySet('--text-body', '#686767')
        } else if (darkData === 'dark') {
            propertySet('--bg-back', '#151515')
            propertySet('--bg-cardback', '#1e1e1e')
            propertySet('--title-text', '#e4e6e4')
            propertySet('--text-nav', '#bcbcbc')
            propertySet('--text-body', '#b6b6b6')
        }
    }
    useEffect(() => {
        darkTheme(isDark)
        localStorage.setItem('Theme', isDark)
    }, [isDark])
    return [isDark, setIsDark]
}
