
const userAgent = navigator.userAgent.toLowerCase();

const browserInfo: Record<string, string | boolean> = {
    userAgent,
    isMobile: /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent),
    isPc: !/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent),
    isFirefox: /firefox/i.test(navigator.userAgent),
    isMac: /macintosh|mac os x/i.test(navigator.userAgent),
    isWindows: /windows|win32/i.test(navigator.userAgent),
    isEdge: /edge/i.test(navigator.userAgent),

}

export default browserInfo;