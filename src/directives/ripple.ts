function ripple(el: any, binding: any) {
  var color = binding.value === undefined ? "#fff" : binding.value;
  el.style.position = "relative";
  el.style.overflow = "hidden";
  el.onclick = function (ev: any) {
    var circle = document.createElement("div");
    var offset = this.getBoundingClientRect();
    var x = ev.pageX - offset.left - document.body.scrollLeft;
    var y = ev.pageY - offset.top - document.body.scrollTop;
    circle.setAttribute(
      "style",
      "background: " +
        color +
        "; width: 10px; height: 10px; opacity: 0; border-radius: 100em; position: absolute; top: " +
        y +
        "px; left: " +
        x +
        "px; animation: anka-ripple 1s ease-in-out;"
    );
    this.append(circle);
    ev.stopPropagation();
    setTimeout(function () {
      circle.parentNode?.removeChild(circle);
    }, 400);
  };
}

export default ripple;
