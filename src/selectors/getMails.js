import { mails } from '../data/mails';

export const getMails = ( tag, query = '' ) => {
    const { messages } = mails;
    const messagesByTag = ( tag === 'all' ) ? messages : messages.filter( message => ( message.tags.includes(tag) ) );
    return ( query === '' ) ? messagesByTag : messagesByTag.filter( mail => ( 
        mail.body.toLowerCase().includes(query)
        || mail.subject.toLowerCase().includes(query)
        || mail.sender.toLowerCase().includes(query)
        ) )
}