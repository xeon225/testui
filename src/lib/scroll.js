"use strict";
import scrollBar from "cyanmaple/src/maple/methods/scroll_bar";
/**
 * @file    全局事件 scroll
 *          使用捕捉方式
 * */

import listener from "./listener.js";

/**
 * @summary     全局滚动事件监听
 * @memberOf    maple.view
 * @method
 * @param       {Function}  callback
 * @return      {Object}
 * */
let scroll = callback => {
    return listener.on("scroll", callback);
  },
  /**
   * @summary     监控目标对象进出可视区
   * @memberOf    scroll
   * @method
   * @param       {Element}   target
   * @param       {Function}  callback
   * */
  observe = (target, callback) => {
    listener.on(target, "intersectionObserver", callback);
  },
  /**
   * @summary     取消监控目标对象进程可视区
   * @memberOf    scroll
   * @method
   * @param       {Element}   target
   * @param       {Function}  [callback]
   * */
  unobserve = (target, callback) => {
    listener.off(target, "intersectionObserver", callback);
  },
  /**
   * @summary     禁止页面滚动
   * @memberOf    scroll
   * @method
   * @param       {boolean}   disabled
   * */
  disabled = disabled => {
    if (disabled) {
      body.dataset.overflowState =
        window.getComputedStyle(body).overflow || "visible";

      body.style.overflow = "hidden";
    } else {
      body.style.overflow = body.dataset.overflowState || "visible";
    }
  },
  scrollTarget,
  body = document.body,
  doc = document.documentElement,
  tempTop = body.scrollTop;
/**
 * @summary     禁止页面滚动
 * @method
 * @memberOf    scroll
 * @param       {boolean}   disabled
 * */
scroll.disabled = function(disabled) {
  if (disabled) {
    this._overflowState = window.getComputedStyle(body).overflow || "visible";

    body.style.overflow = "hidden";
  } else {
    body.style.overflow = this._overflowState || "visible";
  }
};

/**
 * 测试获取滚动条信息的对象为 document.body 还是 document.documentElement
 * */

body.scrollTop = tempTop + 1;

if (body.scrollTop === tempTop + 1) {
  // document.body 可用
  scrollTarget = body;

  body.scrollTop = tempTop;
} else {
  scrollTarget = doc;
}

scroll.observe = observe;
scroll.unobserve = unobserve;
scroll.scrollBar = scrollBar;
scroll.disabled = disabled;

export default scroll;

export const Scroll = {
  /**
   * @summary 与 App 类约定的注入接口
   * @param   {Object}    app
   * @desc    注入为 $scroll
   * */
  inject(app) {
    app.inject("$scroll", scroll);
  }
};
