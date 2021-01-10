interface WithIterator<TReturn> {
    [Symbol.iterator](): Iterator<TReturn, void, unknown>;
}

export default WithIterator;