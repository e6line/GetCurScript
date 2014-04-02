GetCurScript
============
#动态加载js文件，已经被讨论过无数次，由于各个浏览器不同的加载顺序和执行顺序，使得获取当前加载并执行文件变的困难；


#当然，如果单个文件加载，不会有些问题。可以通过scripts[scripts.length-1]获取。因为加载后即可执行，所以其实当前执行的就是最后一个。


#如果批量加载，将是另外一种情况。我们无法确认当前加载进来的js文件是哪一个。有些浏览器内置了document.currentScript可以很方便的获取当前执行js文件的路径。


#不幸的是，只是新版的chrome和firefox支持这个属性。另外一种方式，是很巧妙的利用了抛异常的方式。异常中带有一个stack属性，包含了产生异常的js文件路径。


#ie可以用检测js的加载状态，“interactive”代表末执行完，即当前执行的js文件，可以迭代查找。但很遗憾的是safari浏览器是个例外，它不符合上述两种情况，下面上述两种情况兼容写法：
