function getCurScript() {
        var stack;
        if(document.currentScript) { //firefox 4+
            return document.currentScript.src;
        }
        try {
            a.b.c();
        } catch (e) {
            stack = e.stack;
            if (!stack && window.opera) {
                stack = (String(e).match(/of linked script \S+/g) || []).join(" ");
            }
        }
        if (stack) {
            stack = stack.split(/[@ ]/g).pop();
            stack = stack[0] === "(" ? stack.slice(1, -1) : stack.replace(/\s/, "");
            return stack.replace(/(:\d+)?:\d+$/i, "");
        }

        var nodes = head.getElementsByTagName("script"); //只在head标签中寻找
        for(i = 0; node = nodes[i++];) {
            if( node.readyState === "interactive") {
                return node.src;
            }
        }
        return '';
    }