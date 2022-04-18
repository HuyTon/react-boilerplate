import React, { useState, useMemo } from "react";
import searchLayoutReducer from "Store/reducers/search-layout-reducer";
import APIRequestHelper from '@utilities/api/api-request-helper';
import CachedSearch from "./cached-search";
import ResultsTable from "./ResultsTable";
import CacheInfo from "./CacheInfo";

export default () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    // When a functional component needs to update, it runs the entire function again.
    // Every time the component needs to render, it’s going to create a new instance 
    // of CachedResults! This defeats the purpose of the cache, since it needs to 
    // persist its results set across render cycles. Solution is using useMemo (Shallow
    // comparison for React functional component).
    // useMemo is a function that takes two parameters:
    // . a function that calculates the value to return.
    // . a list of props or state values that trigger a recalculation on change.
    const cachedSearch = useMemo(() => new CachedSearch(search, setResults), []);

    const handleQueryChange = (query) => {
        setQuery(query);
        cachedSearch.changeQuery(query);
    }

    return(
        <div>
            <h3>Class Based Search</h3>
            <form>
                <label>Search:</label>
                <input onChange={({ target: { value } }) => handleQueryChange(value)} />
            </form>
            <ResultsTable results={this.state.results} />
            <CacheInfo cacheObject={this.CachedSearch} />
        </div>
    );
}