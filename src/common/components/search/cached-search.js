export default class CachedSearch {
    constructor(searchFunction, resultsHandler) {
        this.searchFunction = searchFunction;
        this.resultsHandler = resultsHandler;

        this.query = '';
        this.queryCount = 0;
        this.cache = {};
        this.cacheHits = 0;
        this.cacheHitsHistory = [];
    }

    changeQuery(query) {
        if (query.length < 3) {
            this.resultsHandler([]);
            return;
        }
        if (this.cache[query]) {
            this.cacheHits += 1;
            this.queryCount += 1;
            this.cacheHitsHistory.concat(query);

            console.log("*** Query retrieved from cache:", query);
            this.resultsHandler(this.cache[query]);
        } else {
            this.searchFunction(query).then(results => {
                this.cache[query] = results;
                this.queryCount += 1;
                
                console.log("*** Query added to cache:", query);
                this.resultsHandler(results);
            });
        }
    }
}