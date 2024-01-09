const schema = {
  method: 'type',
  process: async (flags, page, params, html, usingPuppeteer) => {
    const { selector, text, options } = params
    if (!selector || !text) throw new Error('incorrect-type-options: ' + JSON.stringify(selector) + ", " + JSON.stringify(text))

    // Check if the value is pointing to an environment variable
    let textValue = text.env ? process.env[text.env] : text

    await page.type(selector, textValue.toString(), options || {})
  }
}

module.exports = schema
