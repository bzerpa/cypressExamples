const URL = 'http://zero.webappsecurity.com/feedback.html'
const NAME_INPUT = '#name'
const EMAIL_INPUT = '#email'
const SUBJECT_INPUT = '#subject'
const COMMENT_SELECTOR = '#comment'
const SUBMIT_BTN = 'input[name="submit"]'

class FeedbackPage {

    static visit(){
        cy.visit(URL);
    }

    static fillFeedbackForm(){
        cy.get(NAME_INPUT).type('Name')
        cy.get(EMAIL_INPUT).type('Name@mail.com')
        cy.get(SUBJECT_INPUT).type('pero que subject ni subject')
        cy.get(COMMENT_SELECTOR).type('La puta madre')
    }

    static submitFeedbackForm(){
        cy.get(SUBMIT_BTN).click()
    }

}

export default FeedbackPage