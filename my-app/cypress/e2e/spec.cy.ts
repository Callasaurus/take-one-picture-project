describe('loads the homepage and checks everything is mounting correctly', () => {
  it('passes all tests', () => {

    cy.visit('http://localhost:3000/');

    cy.get(':nth-child(1) > .component-top-1 > #headers').should('contain', 'Take These Paintings 2023');
    cy.get(':nth-child(1) > .component-top-1 > #info-text').should('contain', 'Featuring Kehinde Wiley and Henry Nelson O’Neil')
    cy.get(':nth-child(1) > .component-top-1 > button > a').should('contain', 'Find out more')
    cy.get(':nth-child(1) > .component-top-2 > img').should('be.visible')

    cy.get(':nth-child(2) > .component-top-1 > #headers').should('contain', 'Contact us');
    cy.get(':nth-child(2) > .component-top-1 > #info-text').should('contain', 'If you’d like to learn more about how our Take One Picture projects work, don’t hesitate to reach out')
    cy.get(':nth-child(2) > .component-top-1 > button > a').should('contain', 'Get in touch')
    cy.get(':nth-child(2) > .component-top-2 > img').should('be.visible')

    cy.scrollTo(0, 500)
    cy.get('.homepage-previous-paintings > p').should('contain', 'Previous paintings')
    cy.get('[width="1024"]').should('be.visible')
    cy.get('[srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprev2.345f12ff.png&w=1920&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprev2.345f12ff.png&w=3840&q=75 2x"]').should('be.visible')
    cy.get('[srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprev3.ffdf6980.png&w=1920&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprev3.ffdf6980.png&w=3840&q=75 2x"]').should('be.visible')
    cy.get('[width="750"]').should('be.visible')
    cy.get('[srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprev5.73a521ee.png&w=1920&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprev5.73a521ee.png&w=3840&q=75 2x"]').should('be.visible')
    cy.get('[srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprev6.8761096d.png&w=1920&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprev6.8761096d.png&w=3840&q=75 2x"]').should('be.visible')
  })
})

describe('loads the homepage and clicks on Find out more button', () => {
  it('Successfully redirects to the TOP 2023 page', () => {
    cy.visit('http://localhost:3000/');
    cy.get(':nth-child(1) > .component-top-1 > button > a').click()
    cy.get(':nth-child(2) > .component-top-1 > button > a').click()
  })
})

describe('loads the homepage and clicks on Get in touch button', () => {
  it('Successfully redirects to the Contact page', () => {
    cy.visit('http://localhost:3000/');
    cy.get(':nth-child(2) > .component-top-1 > button > a').click()
  })
})

describe('loads the current page and checks everything is mounting correctly', () => {
  it('Passes all tests', () => {
    cy.visit('http://localhost:3000/Components/Current');
    cy.get('.current-top-container > #headers-current').should('contain', 'Take These Paintings 2023')
    cy.get('.current-top-container > #headers-current-info').should('contain', 'At Kilmorie, we became')
    cy.get('.current-top-container > button > a').should('contain', 'Read full TTP 2023 presentation')

    cy.get(':nth-child(2) > :nth-child(1) > .component-top-2 > img').should('be.visible')
    cy.get(':nth-child(2) > :nth-child(2) > .component-top-2 > img').should('be.visible')
    cy.get(':nth-child(2) > :nth-child(1) > .component-top-1 > #headers').should('contain', 'The Parting Cheer (1861)')
    cy.get(':nth-child(2) > :nth-child(1) > .component-top-1 > #info-text').should('contain', 'The Parting Cheer deals with')
    cy.get(':nth-child(2) > :nth-child(1) > .component-top-1 > button').should('contain', 'Find out more')
    cy.get(':nth-child(2) > :nth-child(2) > .component-top-1 > #headers').should('contain', 'Ships of Fools (2017)')
    cy.get('.is-visible > :nth-child(2) > .component-top-1 > #info-text').should('contain', 'Ships of Fools also deals')
    cy.get(':nth-child(2) > :nth-child(2) > .component-top-1 > button').should('contain', 'Find out more')

    cy.get('.current-middle-container > #headers-current').should('contain', 'Why these paintings together?')
    cy.get('.current-middle-container > #headers-current-info').should('contain', 'The Parting Cheer and Ships of Fools were chosen')

    cy.scrollTo(0, 1400)
    cy.get(':nth-child(4) > :nth-child(1) > .component-top-2 > img').should('be.visible')
    cy.get(':nth-child(4) > :nth-child(2) > .component-top-2 > img').should('be.visible')
    cy.get(':nth-child(4) > :nth-child(1) > .component-top-1 > #headers').should('contain', 'Kehinde Wiley')
    cy.get(':nth-child(4) > :nth-child(1) > .component-top-1 > #info-text').should('contain', 'Kehinde Wiley is perhaps')
    cy.get(':nth-child(4) > :nth-child(1) > .component-top-1 > button').should('contain', 'Find out more')
    cy.get(':nth-child(4) > :nth-child(2) > .component-top-1 > #headers').should('contain', 'Henry Nelson O’Neil')
    cy.get('.is-visible > :nth-child(2) > .component-top-1 > #info-text').should('contain', 'Henry Nelson O’Neil was famous for his paintings of modern life')
    cy.get('.is-visible > :nth-child(2) > .component-top-1 > button').should('contain', 'Find out more')
  })
})

describe('loads the previous page and checks everything is mounting correctly', () => {
  it('Successfully redirects to the Contact page', () => {
    cy.visit('http://localhost:3000/Components/Previous');
    cy.get('.previous-top-container > #headers-current').should('contain', '2022: Take This Planet')
    cy.get('.is-visible > :nth-child(2) > .component-top-1 > #headers').should('contain', 'Take This Planet')
    cy.get('.is-visible > :nth-child(2) > .component-top-1 > #info-text').should('contain', 'In 2022, we aimed to')
    cy.get('.is-visible > :nth-child(2) > .component-top-1 > #info-text').should('be.visible')
    cy.get('.is-visible > :nth-child(2) > .component-top-1 > #info-text').should('be.visible')
    cy.get('.is-visible > :nth-child(3) > .component-top-1 > #headers').should('contain', 'Angela Wright')
    cy.get('.is-visible > :nth-child(3) > .component-top-1 > #info-text').should('contain', 'Angela is an installation artist')
    cy.get(':nth-child(1) > .previous-button > button > a').should('contain', 'Read full TTP 2022 presentation')

    cy.scrollTo(0, 1100)
    cy.get('.previous-middle-container > #headers-current').should('contain', '2021: Take This Picture')
    cy.get(':nth-child(2) > :nth-child(2) > .component-top-2 > img').should('be.visible')
    cy.get(':nth-child(2) > :nth-child(2) > .component-top-1 > #headers').should('contain', 'Take This Picture')
    cy.get('.is-visible > :nth-child(2) > .component-top-1 > #info-text').should('contain', 'In 2021, we wanted to')
    cy.get('.is-visible > :nth-child(3) > .component-top-1 > #headers').should('contain', 'Jadé Fadojutimi')
    cy.get('.is-visible > :nth-child(3) > .component-top-1 > #info-text').should('contain', 'Jadé grew up in East London')
    cy.get('.is-visible > .previous-button > button > a').should('contain', 'Read full TTP 2021 presentation')
  })
})

describe('loads the about page and checks everything is mounting correctly', () => {
  it('Passes all tests', () => {
    cy.visit('http://localhost:3000/Components/About');
    cy.get('#headers-current').should('contain', 'Our Take One Picture mission')
    cy.get('.about-top-container > :nth-child(2)').should('contain', 'Annually, the National Gallery')
    cy.get('.about-top-container > :nth-child(3)').should('contain', 'We believe the Take One Picture project')
    cy.get(':nth-child(1) > .embla__slide__img').should('be.visible')
    cy.get('.embla-thumbs__slide--selected > .embla-thumbs__slide__button > .embla-thumbs__slide__img').should('be.visible')

    cy.scrollTo(0, 1100)
    cy.get('.component-top-2 > img').should('be.visible')
    cy.get('#headers').should('contain', 'Lisa Drage')
    cy.get('#info-text').should('contain', 'Lisa has taken')
    cy.get('.component-top-1 > button > a').should('contain', 'Contact')
  })
})

describe('loads the contact page and checks everything is mounting correctly', () => {
  it('Passes all tests', () => {
    cy.visit('http://localhost:3000/Components/Contact');
    cy.get('#headers-current').should('contain', 'Contact us')
    cy.get('#headers-current-info').should('contain', 'We believe that Take One Picture projects')
    cy.get('.form').should('be.visible')

    cy.scrollTo(0, 1100);
    cy.get('.component-top-2 > img').should('be.visible')
    cy.get('#headers').should('contain', 'Thanks for visiting')
    cy.get('#info-text').should('contain', 'Thank you for visiting the site!')
  })
})

describe('Testing whether the navbar redirects properly', () => {
  it('Passes all tests', () => {
    cy.visit('http://localhost:3000');
    cy.get('.navbar-links-right > :nth-child(1) > a').click()
    cy.get('.current-top-container > #headers-current').should('contain', 'Take These Paintings 2023')
    cy.get(':nth-child(2) > a').click()
    cy.get('.previous-top-container > #headers-current').should('contain', '2022: Take This Planet')
    cy.get('.navbar-links-right > :nth-child(3) > a').click()
    cy.get('#headers-current').should('contain', 'Our Take One Picture mission')
    cy.get('.navbar-links-right > :nth-child(4) > a').click()
    cy.get('#headers-current').should('contain', 'Contact us')
  })
})

export {}
