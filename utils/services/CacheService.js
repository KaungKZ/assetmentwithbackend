class CacheService {
  constructor() {
    this.cache = {};
  }

  SIX_HOURS_IN_MS = 6 * 60 * 60 * 1000;

  /**
   * Set cache by specifying the key, value and expiry date
   *
   * @param {*} key
   * @param {*} data
   * @param {*} durationInMs
   */
  set(key, data, durationInMs = this.SIX_HOURS_IN_MS) {
    const expiry = new Date(new Date().getTime() + durationInMs);
    this.cache[key] = { data, expiry };
  }

  /**
   * Get the cached result by the key
   *
   * @param {*} key
   * @returns
   */
  get(key) {
    const item = this.cache[key];

    if (item && item.expiry > new Date()) {
      return item.data;
    }

    return null; // Return null if the data is not in the cache or it's expired
  }

  /**
   * Clear the cached result by the key
   *
   * @param {*} key
   */
  clear(key) {
    delete this.cache[key];
  }

  /**
   * Clear all cached results.
   */
  clearAll() {
    this.cache = {};
  }
}

const CacheServiceInstance = new CacheService();

export default CacheServiceInstance;
