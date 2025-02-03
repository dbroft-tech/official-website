
// Portfolio Filtering
  const initPortfolioFilters = () => {
    const filterButtons = document.querySelectorAll('[data-filter]')
    const portfolioItems = document.querySelectorAll('.portfolio-item')

    if (filterButtons.length && portfolioItems.length) {
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'))
          // Add active class to clicked button
          button.classList.add('active')

          const filterValue = button.getAttribute('data-filter')

          portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
              item.style.display = 'block'
              setTimeout(() => {
                item.style.opacity = '1'
                item.style.transform = 'translateY(0)'
              }, 50)
            } else {
              item.style.opacity = '0'
              item.style.transform = 'translateY(20px)'
              setTimeout(() => {
                item.style.display = 'none'
              }, 300)
            }
          })
        })
      })
    }
  }

  // Form Validation
  const initFormValidation = () => {
    const forms = document.querySelectorAll('.needs-validation')

    forms.forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      })
    })
  }

  // Smooth Scroll
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })
  }

  // Navbar Scroll Effect
  const initNavbarScroll = () => {
    const navbar = document.querySelector('.navbar')
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.classList.add('navbar-scrolled')
        } else {
          navbar.classList.remove('navbar-scrolled')
        }
      })
    }
  }

  // Initialize all features
  window.addEventListener('DOMContentLoaded', () => {
    // Theme initialization
    showActiveTheme(getPreferredTheme())
    document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const theme = toggle.getAttribute('data-bs-theme-value')
        localStorage.setItem('theme', theme)
        setTheme(theme)
        showActiveTheme(theme)
      })
    })

    // Initialize other features
    initPortfolioFilters()
    initFormValidation()
    initSmoothScroll()
    initNavbarScroll()

    // Initialize Bootstrap tooltips and popovers
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
  })