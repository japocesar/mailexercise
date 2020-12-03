import { mails } from '../data/mails';

export const getMails = ( tag ) => {
    const { messages } = mails;
    return ( tag === 'all' ) ? messages : messages.filter( message => ( message.tags.includes(tag) ) );
}