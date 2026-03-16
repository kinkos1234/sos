import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const learningSidebar = [
  { text: '개요', link: '/overview/' },
  { text: '학습 로드맵', link: '/roadmap' },
  { text: '입문 가이드', link: '/guide/' },
  {
    text: '학습하기',
    items: [
      { text: 'Tier -1: 순수기초', link: '/foundations/' },
      { text: 'Tier 0: 응용기초', link: '/applied/' },
      { text: 'Tier 1: 핵심', link: '/core/' },
      { text: 'Tier 2: 프레임워크', link: '/framework/' },
      { text: 'Tier 3: 구현', link: '/implementation/' },
    ]
  },
  { text: '개념 관계도', link: '/graph' },
  { text: '글쓰기 × 온톨로지', link: '/writing/' },
  { text: 'CMR & Audit', link: '/cmr/' },
  { text: '참고 자료', link: '/references/' },
]

export default withMermaid(
  defineConfig({
    title: 'S.O.S',
    description: '온톨로지 네이티브 시스템 종합 가이드 — AI 시대의 내일',
    lang: 'ko-KR',
    base: '/sos/',
    cleanUrls: true,
    lastUpdated: true,

    head: [
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
      ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap', rel: 'stylesheet' }],
      ['meta', { name: 'theme-color', content: '#7c5cfc' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:title', content: 'Ontology Native System Guide' }],
      ['meta', { property: 'og:description', content: '온톨로지 네이티브 시스템 종합 가이드' }],
      ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-31Q253MJ2M' }],
      ['script', {}, `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-31Q253MJ2M');`],
    ],

    markdown: {
      math: true,
      lineNumbers: true,
      theme: {
        dark: 'vitesse-dark',
        light: 'vitesse-light'
      }
    },

    themeConfig: {
      logo: '/logo.svg',
      siteTitle: 'Study Ontology System',

      nav: [
        { text: '홈', link: '/' },
        { text: '개요', link: '/overview/' },
        { text: '학습 로드맵', link: '/roadmap' },
        { text: '입문 가이드', link: '/guide/' },
        {
          text: '학습하기',
          items: [
            { text: 'Tier -1: 순수기초', link: '/foundations/' },
            { text: 'Tier 0: 응용기초', link: '/applied/' },
            { text: 'Tier 1: 핵심', link: '/core/' },
            { text: 'Tier 2: 프레임워크', link: '/framework/' },
            { text: 'Tier 3: 구현', link: '/implementation/' },
          ]
        },
        { text: '개념 관계도', link: '/graph' },
      ],

      sidebar: {
        '/': learningSidebar,
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com' },
      ],

      footer: {
        message: '원본 자료 <a href="https://www.threads.com/@heretics_gene">@heretics_gene</a> · 편집 <a href="https://www.threads.com/@specal1849">@specal1849</a> · 사이트 기획 <a href="https://www.threads.com/@comad.j">@comad.j</a>',
        copyright: '© 2026 Ontology Native System Guide'
      },

      search: {
        provider: 'local',
        options: {
          translations: {
            button: { buttonText: '검색', buttonAriaLabel: '검색' },
            modal: {
              displayDetails: '상세 보기',
              resetButtonTitle: '초기화',
              backButtonTitle: '뒤로',
              noResultsText: '검색 결과 없음',
              footer: { selectText: '선택', navigateText: '이동', closeText: '닫기' }
            }
          }
        }
      },

      outline: {
        level: [2, 3],
        label: '목차'
      },

      lastUpdated: {
        text: '마지막 수정',
      },

      docFooter: {
        prev: '이전',
        next: '다음'
      },

      darkModeSwitchLabel: '테마',
      lightModeSwitchTitle: '라이트 모드',
      darkModeSwitchTitle: '다크 모드',
      sidebarMenuLabel: '메뉴',
      returnToTopLabel: '맨 위로',
    },

    mermaid: {
      themeVariables: {
        fontFamily: 'Inter, sans-serif'
      },
      flowchart: {
        padding: 20
      }
    },
  })
)
