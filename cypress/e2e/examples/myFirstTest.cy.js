const navbarText = Cypress.env('navbarText');

context('My First Test', () =>{
    // beforeEach(() => {
    //     cy.visit('http://example.cypress.io/commands/actions')
    // })

    // it('has a h1 tag', () => {
    //     cy.get('h1').should('exist');
    // })

    // it('renders a correct h1 tag', () => {
    //     cy.get('h1').should('contain.text', 'Actions');
    // })

    // it('renders a parragraph under the h1', () => {
    //     cy.get('.container').eq(1).find('p').should('exist');
    // })

    // it('renders a section with a correct ellements', () => {
    //     cy.get('.container').eq(2).within(() => {
    //         cy.get('h4').should('exist');
    //         cy.get('p').should('exist');
    //     })
    // })

    // beforeEach(() => {
    //     cy.visit('/');
    // })

    // it('correctly renders the cyperss website link', () => {
    //     cy.findByText(navbarText).should('exist');
    // })

    // it('types into an email field', () => {
    //     cy.visit('/commands/actions')
    //     cy.findByPlaceholderText('Email').type('test@email.com')
    //     cy.wait(2000).then(() => {
    //         console.log('Console.log used')
    //         fetch('https://api.spacexdata.com/v3/missions')
    //         .then((res) => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    //     })
    //     cy.log('Cypress log used')
    // })

    // it('shows an active class for the current pages', () => {
    //     cy.visit('/commands/actions')
    //     cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active');
    // })

    // it('should not have active class on inactive pages', () => {
    //     cy.visit('/commands/actions')
    //     cy.get('.dropdown-menu').find('li').eq(0)
    //     .should('not.have.class', 'active')
    //     .find('a')
    //     .should('have.attr', 'href', '/commands/querying');
    // })

    // it('links to the actions page correctly', () => {
    //     cy.visit('/')
    //     cy.findAllByText('Actions').first().click({force: true})
    //     cy.url().should('include', 'commands/actions')
    // })

    // it('lets you type in an input field', () => {
    //     cy.visit('/commands/actions')
    //     cy.findByPlaceholderText('Email').type('test').should('have.value', 'test')
    // })
    
    // it('lets you clear an input field', () => {
    //     cy.visit('/commands/actions')
    //     cy.findByLabelText('Describe:').type('test desc').should('have.value', 'test desc')
    //     .clear().should('have.value', '')
    // })

    // it('lets you check a checkbox', () => {
    //     cy.visit('/commands/actions')
    //     cy.get('.action-checkboxes [type=checkbox]').first().check().should('be.checked')
    // })

    // before(() => {
    //     cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)
    // })

    // beforeEach(() => {
    //     cy.visit('/')
    //     cy.get('h1').should('exist')
    // })

    // afterEach(() => {
    //     cy.log('after each hook called')
    // })

    // after(()=>{
    //     cy.log('after hook called')
    // })

    // it('has an h1 one tag', () => {
    //     cy.get('h1').should('contain.text', 'Kitchen Sink');
    // })

    // it('pulls data from fixture', () => {
    //     cy.fixture('example').then((data) => {
    //         cy.log(data)
    //     })
    // })

    // it('updates fixture', () => {
    //     cy.fixture('example').then((data) => {
    //         data.email = 'updated@example.com';
    //         cy.log('UPDATED DATA: ', data)
    //     })
    // })

    // beforeEach(() => {
    //     cy.fixture('example').then(function (data) {
    //         this.data = data;
    //         cy.log('THIS DATA: ', this.data)
    //     })
    // })

    // it('uses fixture data in network request', function () {
    //     cy.visit('/commands/network-requests')
    //     cy.intercept('GET', '**/comments/*', this.data).as('getComment')
    //     cy.get('.network-btn').click()
    //     cy.wait('@getComment').then((res) => {
    //         cy.log('Response: ', res)
    //     })
    // })

    // const token = 'token';
    // it('sets a token in local storage', () => {
    //     cy.setLocalStorage(token, 'abcs123')
    // })

    // it('sets and gets local storage item', () => {
    //     cy.setLocalStorage(token, 'abcs123')
    //     cy.getLocalStorage(token).should('eq', 'abcs123')
    // })

    // it('overwritrs the type command by using sensetive cjaracters', () => {
    //     cy.visit('/commands/actions')
    //     cy.findByPlaceholderText('Email').type('test')
    //     cy.findByPlaceholderText('Email').type('test', {sensetive: true})
    // })

    beforeEach(() => {
        cy.visit('/commands/actions')
    })

    // it('triggers a popove on click', () => {
    //     cy.get('.action-btn').click()
    //     cy.findByText('This popover shows up on click').should('be.visible')
    // })

    // it('can click on different section of canvas', () => {
    //     cy.get('#action-canvas').click('top')
    //     cy.get('#action-canvas').click('bottomRight')
    //     cy.get('#action-canvas').click(80, 100)
    // })

    // it('can double click to edit', () => {
    //     cy.get('.action-div').dblclick().should('not.be.visible')
    //     cy.get('.action-input-hidden').should('be.visible')
    // })

    // it('can right click to edit item', () => {
    //     cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    //     cy.get('.rightclick-action-input-hidden').should('be.visible')
    // })

    it('shows the nav links on hover', () => {
        cy.get('.dropdown-toggle').trigger('mouseover')
        cy.get('.dropdown-menu').should('be.visible')
    })
})