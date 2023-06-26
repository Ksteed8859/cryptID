import { gql } from '@apollo/client'

export const QUERY_USER = gql `
{
    user {
        username
        bookmarks {
            _id
            bookmarkDate
            cryptids {
                _id
                name
            }
        }
    }
}`