module.exports = {
    locales: ['en-US'],
    keepRemoved: true,
    lexers: {
        ts: [{ lexer: 'JsxLexer', functions: ['t', 'tMark'] }],
        tsx: [{ lexer: 'JsxLexer', functions: ['t', 'tMark'] }],
    },
    output: 'src/locales/$LOCALE/$NAMESPACE.json',
};
