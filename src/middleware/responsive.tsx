

export const isMobile = (window: Window): boolean => {
    return window.innerWidth <= 768
}

// Self closing tag
export const selfCloser = (e: any, ref: React.RefObject<any>, fun: Function) => {
    if(ref.current && !ref.current.contains(e.target)) {
        fun()
    }
}