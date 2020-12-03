export const getMailsByQuery = ( query, mails ) => {
    debugger
    return mails.filter( mail => ( 
        mail.body.toLowerCase().includes(query)
        || mail.subject.toLowerCase().includes(query)
        || mail.sender.toLowerCase().includes(query)
        ) 
    )
}