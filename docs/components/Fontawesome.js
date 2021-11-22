import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useThemeContext from '@theme/hooks/useThemeContext'; //docs: https://v2.docusaurus.io/docs/2.0.0-alpha.69/theme-classic#usethemecontext

export default function Fontawesome({icon, color=black}) {
    const { isDarkTheme } = useThemeContext();

    if(isDarkTheme) {
        color = "white";
    }

    return (
       <>
           <FontAwesomeIcon icon={icon} style={{color: color}}  />
       </>
    )
}
