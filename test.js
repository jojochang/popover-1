var log = console.log.bind(console)
var e = (selector) => {
    var element = document.querySelector(selector)
    return element
}

var es = (selector) => {
    var elements = document.querySelectorAll(selector)
    return elements
}

var appendHtml = (element, html) => element.insertAdjacentHTML('beforeend', html)

var closest = (element, selector) => {
    var element = element.parentElement
    while (element != null) {
        if (element.className == selector || element.id == selector || element.tagName == selector) {
            return element
        }
        element = element.parentElement
    }
    return null
}


class Tog {
    constructor(o) {
        this.trigger = o.trigger
        this.content = o.content
    }


    insertTemplates() {
        var t = `
            <div class='wrapper'>
            <button class="btn ${this.trigger}">
                ${this.trigger}
            </button>
           
                ${this.content}
            </div>    
    
        `
        var container = e('.container')
        appendHtml(container, t)
    }


    show() {
        // var box = e('.red')       
        var btn = e(`.${this.trigger}`)
        var wrapper = closest(btn, 'wrapper')
        var box = wrapper.querySelector('.red')
        btn.addEventListener('click', (event) => {
            if (!box.classList.contains('show')) {
                // 显示box
                // log("1")
                box.classList.add("show")
            } else {
                // 隐藏box
                // log("2")
                box.classList.remove("show")
            }
        })
    }

    hidden() {
        var cot = e('.container')
        var boxes = es('.red')
        // var wrapper = closest(btn, 'wrapper')
        // var box = wrapper.querySelector('.red')
        cot.addEventListener('click', (event) => {
            var self = event.target
            // log(self)
            if (!self.classList.contains('btn') && !self.classList.contains('red')) {
                for (let index = 0; index < boxes.length; index++) {
                    const element = boxes[index]
                    element.classList.remove('show')
                }
            }
        })
    }
}



var click1 = new Tog({
    trigger: 'btn',
    content: `<div class="red">hi1</div>`
  })
click1.insertTemplates()
click1.show()
click1.hidden()


var click2 = new Tog({
    trigger: 'btn2',
    content: `<div class="red">hi2</div>`
  })
click2.insertTemplates()
click2.show()
click2.hidden()

var click3 = new Tog({
    trigger: 'btn3',
    content: `<div class="red">hi3</div>`
  })
click3.insertTemplates()
click3.show()
click3.hidden()
