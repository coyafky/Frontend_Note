在JavaScript中，`document load` 和 `document ready` 是两个不同的概念，它们涉及到浏览器何时以及如何处理HTML文档。以下是它们的详细区别：

Document Load：适用于所有资源加载完毕后的操作，例如图片尺寸计算、资源初始化等。
Document Ready：适用于DOM结构加载完毕后的操作，例如DOM操作、事件绑定等。


### Document Load
`document load` 事件是指整个页面（包括所有依赖的资源，如图片、样式表、脚本等）都已完全加载完毕。这个事件可以通过 `window.onload` 来监听。

**示例代码：**
```javascript
window.onload = function() {
  console.log("Page fully loaded, including all resources.");
};
```

### Document Ready
`document ready` 事件是指DOM（文档对象模型）已经完全加载并可以被操作，但并不保证所有资源（如图片）都已加载完毕。在jQuery中，这个事件通常通过 `$(document).ready()` 来监听。在原生JavaScript中，可以使用 `DOMContentLoaded` 事件。

**示例代码（jQuery）：**
```javascript
$(document).ready(function() {
  console.log("DOM is fully loaded and ready.");
});
```

**示例代码（原生JavaScript）：**
```javascript
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM is fully loaded and ready.");
});
```

### 区别总结
1. **触发时机**：
   - `document load`：整个页面及其所有资源（图片、样式表、脚本等）都已加载完毕。
   - `document ready`：仅DOM结构已完全加载并可以被操作，不保证所有资源都已加载完毕。

2. **事件监听**：
   - `document load`：通过 `window.onload` 监听。
   - `document ready`：在jQuery中通过 `$(document).ready()` 监听，在原生JavaScript中通过 `DOMContentLoaded` 事件监听。

3. **使用场景**：
   - `document load`：适用于需要在所有资源都加载完毕后执行的代码，例如图片尺寸计算、资源初始化等。
   - `document ready`：适用于需要在DOM结构加载完毕后立即执行的代码，例如DOM操作、事件绑定等。

通过理解这两个事件的区别，您可以根据具体需求选择合适的事件来执行您的JavaScript代码。
