import React, { useCallback, useEffect, useState } from 'react'
import { AppRouter } from './routers/AppRouter'

export const MailApp = () => {

    const [selectedTag, setSelectedTag] = useState('all');
    
    const [query, setQuery] = useState('');
    
    const changeTag = useCallback(
        ( newTag ) => {
        setSelectedTag(newTag);
        setQuery('');
        }, []
    )

    const handleQuery = useCallback(
        ( queryStr ) => {
            setQuery(queryStr || '');
        }, []
    )

    return (
        <AppRouter
            selectedTag={selectedTag} 
            changeTag={changeTag}
            handleQuery={handleQuery}
            query={query}
            setQuery={setQuery}
        />
    )
}
