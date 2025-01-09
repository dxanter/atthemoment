document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuTrigger = document.querySelector('.mobile-menu-trigger')
    const topBar = document.querySelector('.top-bar')
    const navLinks = document.querySelectorAll('.main-nav ul a')

    // Smooth scroll to section
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const targetId = link.getAttribute('href').substring(1)
            const targetElement = document.getElementById(targetId)
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth',
                })
            }
            mobileMenuTrigger.classList.remove('open')
            topBar.classList.remove('mobile-menu-show')
        })
    })

    // Mobile menu toggle
    mobileMenuTrigger?.addEventListener('click', (e) => {
        e.preventDefault()
        mobileMenuTrigger.classList.toggle('open')
        topBar.classList.toggle('mobile-menu-show')
    })

    // Sticky top-bar on scroll
    const handleScroll = () => {
        if (window.scrollY > 100) {
            topBar.classList.add('top-bar--fixed')
        } else {
            topBar.classList.remove('top-bar--fixed')
        }
    }

    window.addEventListener('load', handleScroll)
    window.addEventListener('scroll', handleScroll)

    // Animation logic
    if (document.body.classList.contains('animation')) {
        const elements = [
            '.main-section__text h1',
            '.main-section__p1',
            '.main-section__p2',
            '.top-bar',
            '.social-fixed-icons',
            '.main-section .container',
            '.article-about-meditation',
        ]

        const animateElements = (elSelectors, delay = 0) => {
            elSelectors.reduce((promise, selector) => {
                return promise.then(() => {
                    return new Promise((resolve) => {
                        const el = document.querySelector(selector)
                        if (el) {
                            el.style.transition = 'opacity 0.6s ease'
                            el.style.opacity = '1'
                            setTimeout(resolve, delay)
                        } else {
                            resolve()
                        }
                    })
                })
            }, Promise.resolve())
        }

        setTimeout(() => {
            animateElements(elements, 500)
            const container = document.querySelector('.main-section .container')
            container?.classList.add('magic-bg')
        }, 1000)
    }
})
