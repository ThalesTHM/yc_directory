import React from 'react';
import Form from "next/form";

import { Search } from 'lucide-react';
import SearchFormReset from './SearchFormReset';

const SearchForm = ({ query }: { query?: string }) => {

  return (
    <Form action="/" scroll={false} className='search-form'>
        <div className="flex items-center justify-center w-full max-w-3xl mx-auto mt-8 mb-8">
            <input
                name="query"
                defaultValue=""
                className="search-input"
                placeholder="Search Startups"
            />
            
            <div className='flex gap-2'>
                {query && <SearchFormReset />}

                <button type="submit" className="search-btn text-white">
                    <Search className='size-5' />
                </button>
            </div>
        </div>
    </Form>
  )
}

export default SearchForm;