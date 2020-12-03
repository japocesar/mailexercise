import { mails } from '../data/mails';

export const getTags = ( ) => {
    const { messages } = mails;
    const tags = [];
    messages.map(msg => msg.tags.map( item => tags.push(item)));
    return [...new Set(tags)]
}