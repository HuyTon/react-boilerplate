# A. Least Recently Used (LRU) Cache
A doubly linked list-based Least Recently Used (LRU) cache. Will keep most recently used items while discarding least recently used items when its limit is reached.

## Description
A cache object that deletes the least-recently-used items. A Least Recently Used (LRU) Cache organizes items in order of use, allowing you to quickly identify which item hasn't been used for the longest amount of time.

### Costs
                              Worst Case
- space	                        O(n)
- get least recently used item	O(1)
- access item	                O(1)

## Illustration of the design
 
        entry             entry             entry             entry
        ______            ______            ______            ______
       | head |.newer => |      |.newer => |      |.newer => | tail |
       |  A   |          |  B   |          |  C   |          |  D   |
       |______| <= older.|______| <= older.|______| <= older.|______|
 
   removed  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  added

## Strengths
    - Super fast accesses. LRU caches store items in order from most-recently used to least-recently used. That means both can be accessed in O(1)O(1) time.
    - Super fast updates. Each time an item is accessed, updating the cache takes O(1)O(1) time.

## Weaknesses
    - Space heavy. An LRU cache tracking nn items requires a linked list of length nn, and a hash map holding nn items. That's O(n)O(n) space, but it's still two data structures (as opposed to one).

## Dataflow
    - Try and retrieve the value from the cache.
    - If the value exists, use it to respond to the request.
    - If a full-page render is required, then save the rendered page before responding to the request.

## There are some problems with this strategy:
    - This solution is simple – but what happens when the use cases get more complex? What happens as you start to add users? Or multiple languages? Or you have tens of thousands of pages? This methodology doesn’t scale well to these use cases.
    - Writing to memory is a blocking task in Node.js, which means that if we’re trying to optimize for performance by using a cache, we’re trading one problem for another.
    - Finally, if you’re using a distributed scaling strategy to run your servers (which is common these days), the cache only applies to a single box or container (if using Docker). In this case, your server instances can’t share a common cache.

# B. Redis LRU cache
To decrease effective of the LRU cache's memory cost. The best solution to consider is using Redis LRU cache.

[https://redis.io/topics/lru-cache](https://redis.io/topics/lru-cache)

## Using Redis as an LRU cache:
  - When Redis is used as a cache, often it is handy to let it automatically evict old data as you add new data. This behavior is very well known in the community of developers, since it is the default behavior of the popular memcached system.
  - Starting with Redis version 4.0, a new LFU (Least Frequently Used) eviction policy was introduced. This is covered in a separated section of this documentation.
  - Starting with Redis 4.0, a new Least Frequently Used eviction mode is available. This mode may work better (provide a better hits/misses ratio) in certain cases, since using LFU Redis will try to track the frequency of access of items, so that the ones used rarely are evicted while the one used often have an higher chance of remaining in memory.
  - If you think at LRU, an item that was recently accessed but is actually almost never requested, will not get expired, so the risk is to evict a key that has an higher chance to be requested in the future. LFU does not have this problem, and in general should adapt better to different access patterns.
  - To configure the LFU mode, the following policies are available:
    + volatile-lfu Evict using approximated LFU among the keys with an expire set.
    + allkeys-lfu Evict any key using approximated LFU.
  - However unlike LRU, LFU has certain tunable parameters: for instance, how fast should a frequent item lower in rank if it gets no longer accessed? It is also possible to tune the Morris counters range in order to better adapt the algorithm to specific use cases.
  - By default Redis 4.0 is configured to:
    + Saturate the counter at, around, one million requests.
    + Decay the counter every one minute.
      Instructions about how to tune these parameters can be found inside the example redis.conf file in the source distribution, but briefly, they are:
        lfu-log-factor 10
        lfu-decay-time 1

# C. Redis Setup and Configures at Server Side

## Configuring Redis as a LRU cache 
In this configuration there is no need for the application to set a time to live for keys using the EXPIRE command (or equivalent) since all the keys will be evicted using an approximated LRU algorithm as long as we hit the 100 megabyte memory limit.
  - CONFIG SET maxmemory 100mb
  - CONFIG SET maxmemory-policy allkeys-lru

## If facing the error: ERR AUTH <password> called without any password configured for the default user. Run the command below in terminal
  - For one time instance:
    config set requirepass admin
  - For long time:
    Open redis.conf file and uncomment the text #requirepass foobared.
    'foobared' is default password, need to change to your password is 'admin'

## Using redis cache middleware: 
Inject the function checkCache to API need to get data from cache. The content of API will be executed if did not have the cached data.
Inside the API content, need to set caching data to using for the next time.

```
Sample: app.get("/api/users/:id", checkCache, async function (req, res) {
  ....
  // Cache user info
  redis_client.set(req.url, JSON.stringify(userObj));   
  ....
}
```