class Lazyload{
    constructor(selector,callback){
        this.images = document.querySelectorAll(selector)
        this.callback = callback
        this.init()
    }
    init(){
        if(!window.IntersectionObserver){
            this.images.forEach((image)=>{
                if(image.hasAttribute('data-src')){
                    image.src = image.getAttribute('data-src')
                }
                if(image.hasAttribute('data-srcset')){
                    image.srcset = image.getAttribute('data-srcset')
                }
            })
            return
        }
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.intersectionRatio > 0) {
                    observer.unobserve(entry.target);
                    if(entry.target.hasAttribute('data-src')){
                        entry.target.src = entry.target.getAttribute('data-src')
                    }
                    if(entry.target.hasAttribute('data-srcset')){
                        entry.target.srcset = entry.target.getAttribute('data-srcset')
                    }
                    !!this.callback && this.callback.call(entry.target)
                }
            })
        })
        this.images.forEach((image)=>{
            observer.observe(image)
        })
    }
}
export default Lazyload