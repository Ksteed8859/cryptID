import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useEffect } from 'react';
import { cryptidData } from '../data/Data'
import {Link} from 'react-router-dom';

const Search = () => {
    return (
        <main className='main'>
            <h1>Testing Search</h1>

            <div className='grid-container'>
                {cryptidData.map((data) => {
                    return (
                        <Link to = {`/${data.name}`}>
                            <div key={data.name}>
                                <h3>{ data.name }</h3>
                            </div>
                        </Link>  
                    )
                })}
            </div>
        </main>
    )
}

export default Search;