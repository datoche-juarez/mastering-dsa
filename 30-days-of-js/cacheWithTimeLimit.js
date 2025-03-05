// LeetCode 30 Days of JavaScript
// 2622. Cache With Time Limit
// March 4th, 2025

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */

class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const currentTime = Date.now();
    const expiresAt = currentTime + duration;

    // Check if the key exists in cache
    if (this.cache.has(key)) {
      const entry = this.cache.get(key);

      if (currentTime < entry.expiresAt) {
        // Key exists and is valid; update it
        this.cache.set(key, { value, expiresAt });

        return true;
      }
    }

    // Otherwise, add a new key
    this.cache.set(key, { value, expiresAt });

    return false;
  }

  get(key) {
    const currentTime = Date.now();
    if (this.cache.has(key)) {
      const entry = this.cache.get(key);
      if (currentTime < entry.expiresAt) {
        return entry.value;
      } else {
        // Optionally remove expired key
        this.cache.delete(key);
      }
    }
    return -1;
  }

  // The count method for return unexpired keys
  count() {
    const currentTime = Date.now();
    let count = 0;

    for (let [key, entry] of this.cache.entries()) {
      if (currentTime < entry.expiresAt) {
        count++;
      } else {
        // Optionally clean up expired entries
        this.cache.delete(key);
      }
    }
    return count;
  }
}

// Example usage:
const cache = new TimeLimitedCache();
console.log(cache.set(1, 42, 100)); // false (new key added)
console.log(cache.get(1)); // 42 (if within 100ms)
setTimeout(() => console.log(cache.get(1)), 150); // -1 (expired)
