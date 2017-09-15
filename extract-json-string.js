module.exports = {

    extract: function (str) {
        var currIndex = 0
        var objs = []

        while (str[currIndex]) {
            var openClose = this._getOpenCloseBraceIndex(str, currIndex, '{', '}')

            if (openClose) {
                var objStr = str.substr(openClose[0], openClose[1] - openClose[0] + 1)

                try {
                    var parsed = JSON.parse(objStr)
                    if (parsed)
                        objs.push(parsed)
                    currIndex = openClose[1]
                } catch (err) {
                    currIndex++
                }
            } else
                currIndex++

        }


        return objs
    },

    _getOpenCloseBraceIndex: function (str, indexStart, openBrace, closeBrace) {
        var openIndex = str.substr(indexStart).indexOf(openBrace) + indexStart

        if (!openIndex)
            return null

        var openCount = 1
        var closeCount = 0
        var currIndex = openIndex + 1

        while (str[currIndex]) {

            if (str[currIndex] == openBrace) {
                openCount++
                currIndex++
                continue
            } else if (str[currIndex] == closeBrace) {
                closeCount++
                if (openCount == closeCount) {
                    return [openIndex, currIndex]
                }
            }
            currIndex++
        }

        return null
    }

}