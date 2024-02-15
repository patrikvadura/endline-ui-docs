import React from 'react'
import {DocsThemeConfig} from 'nextra-theme-docs'
import {useRouter} from 'next/router'
import Image from 'next/image';

const config: DocsThemeConfig = {
    logo: <Image src="/endline_ui.svg" width={150} height={50} alt="Endline UI"/>,
    project: {
        link: 'https://github.com/shuding/nextra-docs-template'
    },
    chat: {
        link: 'https://endline.patrikvadura.cz',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M11.3 14.5 2 23.6A1.2 1.2 0 1 1 .4 22l9.1-9.2-5.4-5.4a1.2 1.2 0 1 1 1.7-1.8l5.5 5.5L21.9.4A1.2 1.2 0 1 1 23.6 2L13 12.7l4 4a1.2 1.2 0 0 1-1.8 1.8l-4-4Z" />
            </svg>
        )
    },
    search: {
        placeholder: 'Vyhledejte...'
    },
    //docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
    footer: {
        text: 'Endline UI - Powered by Endline - Patrik Vaďura',
    },
    useNextSeoProps() {
        const {asPath} = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: '%s – Endline UI'
            }
        } else {
            return {
                titleTemplate: 'Design system framework – Endline UI'
            }
        }
    },
    head: (
        <>
            <meta property="og:title" content="Endline UI"/>
            <meta property="og:description" content="Design system framework pro vaše webové stránky."/>
            <meta property="og:image" content="/og-image-1200x630_endline-ui.jpg"/>
        </>
    )
}

export default config
