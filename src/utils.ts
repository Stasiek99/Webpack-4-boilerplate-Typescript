export const htmlElementConnector = (htmlElement: HTMLElement, htmlEvent: string, callback: (...args: any) => void): void => {
    htmlElement.addEventListener(htmlEvent, callback)
}