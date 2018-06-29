/* 
 * Pagination
 * BunnyUI https://github.com/iRuxu/BunnyUI
 * 
*/

//define private var && store the value in the memory
let _current = 0;
class Pagination {
    constructor(option) {
        let { total, limit, start, container } = option;

        //container check
        !container
            ? console.error("[Pagination]:container is not defined")
            : $(container).length == 0
                ? console.warn(
                      "[Pagination]:the container is not existing,already use body instead"
                  ) || (container = $("body"))
                : (container = $(container));

        //number check
        if (
            isNaN(total) ||
            isNaN(limit) ||
            total < 1 ||
            limit < 1 ||
            start < 1
        ) {
            console.error("[Pagination]:Invalid total/limit/start number");
            return;
        }
        if (
            !Number.isInteger(total) ||
            !Number.isInteger(limit) ||
            !Number.isInteger(start)
        ) {
            console.warn("[Pagination]:total/limit/start is not an integer");
            total = parseInt(total);
            limit = parseInt(limit);
            start = parseInt(start);
        }
        !start
            ? (start = 1)
            : start > total
                ? (start = total) &&
                  console.warn(
                      "[Pagination]:start overflow maximum,already use total instead"
                  )
                : (start = start);

        this.container = container; //the css expression of container
        this.total = total; //total pages
        this.limit = limit; //max visible pages count
        this.start = start; //default page position

        this.current = start; //current page position
        this._initialize();
    }

    get current() {
        return _current;
    }
    set current(page) {
        if (isNaN(page) || page < 1) {
            console.error("[Pagination]:Invalid page number");
            return;
        }
        if (!Number.isInteger(page)) {
            console.warn("[Pagination]:page is not an integer");
            _current = parseInt(page);
        }
        if (page > this.total) {
            console.warn(
                "[Pagination]:page overflow maximum,already use total instead"
            );
            _current = this.total;
        }
        _current = page;

        //calculate the related info
        let total = this.total;
        let limit = this.limit;
        let groupIndex = Math.ceil(_current / limit);
        let groupCount = Math.ceil(total / limit);

        this._groupIndex = groupIndex;
        this._isLast = _current == total;
        this._isFirst = _current == 1;
        this._index = (_current % limit == 0 ? limit : _current % limit) - 1;
        this._length =
            groupIndex == groupCount
                ? total % limit == 0
                    ? limit
                    : total % limit
                : limit;
    }

    _initialize() {
        if (this.total == 1) return;

        //create the DOM
        const template = `
            <div class="w-pages">
                <div class="w-pages-pc">
                    <div class="w-pages-list">
                        <p class="first edge item" data-type="first"><a href="">&laquo;</a></p>
                        <p class="prev turn item" data-type="prev"><a href="">&lsaquo;</a></p>
                        <ul class="list"></ul>
                        <p class="next turn item" data-type="next"><a href="">&rsaquo;</a></p>
                        <p class="last edge item" data-type="last"><a href="">&raquo;</a></p>
                    </div>
                    <div class="w-pages-skip">
                        <span class="w-pages-skiplabel">跳转至第<input class="text" type="text">页</span>
                        <a class="w-pages-skipbtn item skip" data-type="page" href="javascript:;">GO</a>
                    </div>
                </div>
                <div class="w-pages-m">
                    <div class="w-pages-more">
                        <p class="w-pages-loading"><i></i></p>
                        <a class="w-pages-loadbtn item load" data-type="next" href="">加载更多</a>
                        <p class="w-pages-null null">没有更多了</p>
                    </div>
                </div>
            </div>
        `;

        const sample = $(template);
        this.container.append(sample);
        this.sample = this.container.children(".w-pages");

        //setup item events
        const $turn = this.sample.find(".item");
        const o = this;
        $turn.off("click").on("click", function(e) {
            e.preventDefault();
            if ($(this).hasClass("disabled")) return;

            let page = 1;
            let type = $(this).attr("data-type");
            switch (type) {
                case "prev":
                    page = o.current - 1;
                    break;
                case "next":
                    page = o.current + 1;
                    break;
                case "first":
                    page = 1;
                    break;
                case "last":
                    page = o.total;
                    break;
                default:
                    break;
            }
            o._to(page);
            o.sample.trigger("pagination",$(this));
        });

        this._build();
        this._render();
    }

    _build() {
        const $list = this.sample.find(".list");
        $list.empty();

        const createItem = function(className, text) {
            let e_item = document.createElement("li");
            let e_item_a = document.createElement("a");
            let e_item_text = document.createTextNode(text);
            e_item_a.appendChild(e_item_text);
            e_item.appendChild(e_item_a);
            e_item.className = className;

            let page = document.createAttribute("data-page");
            let type = document.createAttribute("data-type");
            page.value = text;
            type.value = "page";
            e_item.setAttributeNode(page);
            e_item.setAttributeNode(type);
            return e_item;
        };

        const bulkItem = function(count, start) {
            for (let x = start; x < start + count; x++) {
                $list.append(createItem("page item", x));
            }
        };

        if (this.total < this.limit) {
            bulkItem(this.total, 1);
        } else {
            let start = this.limit * (this._groupIndex - 1) + 1;
            bulkItem(this._length, start);
        }

        //setup page events
        const $hook = $list.children("li").add(this.sample.find(".skip"));
        const o = this;
        $hook.on("click", function(e) {
            e.preventDefault();
            if ($(this).hasClass("disabled")) return;

            let page = 1;
            if ($(this).hasClass("skip")) {
                page = $(this)
                    .siblings(".w-pages-skiplabel")
                    .children(".text")
                    .val();
            } else {
                page = $(this).attr("data-page");
            }

            page = parseInt(page);
            o._to(page);
            o.sample.trigger("pagination",$(this));
        });
    }

    _render() {
        //remove disabled
        const $items = this.sample.find(".item");
        $items.removeClass("disabled");

        //pages class
        const $pages = this.sample.find(".page");
        $pages.removeClass("active");
        $pages.eq(this._index).addClass("active disabled");

        //items class
        const $nav = this.sample.find(".w-pages-list");
        const $first = $nav.children(".first");
        const $last = $nav.children(".last");
        const $prev = $nav.children(".prev");
        const $next = $nav.children(".next");
        const $load = this.sample.find(".load");
        const $null = this.sample.find(".null");
        if (this._isFirst) $first.add($prev).addClass("disabled");
        if (this._isLast) {
            $last.add($next).addClass("disabled");
            $load.addClass('hide');
            $null.addClass('show');
        }
    }

    _to(page) {
        //if there is no changes
        if (page == this.current) {
            console.warn("[Pagination]:page is not changed");
            return;
        }

        //Judge if it need rebuild list
        let old = this.current;
        this.current = page;
        let group = Math.ceil(old / this.limit);
        group == this._groupIndex
            ? this._render()
            : this._build() || this._render();
    }

    onchange(callback) {
        const o = this;
        this.sample.on("pagination", function(e,clickElement) {
            let page = o.current;
            callback.call(o,page,clickElement)
        });
    }
}
export default Pagination;
