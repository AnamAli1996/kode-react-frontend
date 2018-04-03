var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Children, cloneElement } from 'react';
import { render } from 'react-dom';

var Tabs = function (_Component) {
    _inherits(Tabs, _Component);

    function Tabs() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Tabs);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = { currentTab: _this.props.defaultTab }, _this.tabSelect = function (name) {
            _this.isControlled ? _this.props.onChangeTab && _this.props.onChangeTab(name) : _this.setState(function () {
                return { currentTab: name };
            });
        }, _this.isControlled = typeof _this.props.tab !== 'undefined' || typeof _this.props.onChangeTab !== 'undefined', _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Tabs, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var self = this;

            var TabLink = function (_Component2) {
                _inherits(TabLink, _Component2);

                function TabLink() {
                    var _ref2;

                    var _temp2, _this2, _ret2;

                    _classCallCheck(this, TabLink);

                    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        args[_key2] = arguments[_key2];
                    }

                    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = TabLink.__proto__ || Object.getPrototypeOf(TabLink)).call.apply(_ref2, [this].concat(args))), _this2), _this2.onClick = function (evt) {
                        evt.preventDefault();
                        if (_this2.props.onClick) {
                            _this2.props.onClick();
                        }
                        self.tabSelect(_this2.props.tab);
                    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
                }

                _createClass(TabLink, [{
                    key: 'render',
                    value: function render() {
                        var _props = this.props,
                            children = _props.children,
                            onClick = _props.onClick,
                            href = _props.href,
                            tab = _props.tab,
                            rest = _objectWithoutProperties(_props, ['children', 'onClick', 'href', 'tab']);

                        return React.createElement(
                            'a',
                            { href: href || '#' + tab, onClick: this.onClick },
                            children
                        );
                    }
                }]);

                return TabLink;
            }(Component);

            var TabHeader = function (_Component3) {
                _inherits(TabHeader, _Component3);

                function TabHeader() {
                    _classCallCheck(this, TabHeader);

                    return _possibleConstructorReturn(this, (TabHeader.__proto__ || Object.getPrototypeOf(TabHeader)).apply(this, arguments));
                }

                _createClass(TabHeader, [{
                    key: 'render',
                    value: function render() {
                        var _props2 = this.props,
                            render = _props2.render,
                            child = _props2.children,
                            propsToPass = { isActive: self.currentTab == this.props.tab };


                        return render ? render(propsToPass) : cloneElement(Children.only(child), propsToPass);
                    }
                }]);

                return TabHeader;
            }(Component);

            var TabPane = function (_Component4) {
                _inherits(TabPane, _Component4);

                function TabPane() {
                    _classCallCheck(this, TabPane);

                    return _possibleConstructorReturn(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).apply(this, arguments));
                }

                _createClass(TabPane, [{
                    key: 'render',
                    value: function render() {
                        var _props3 = this.props,
                            render = _props3.render,
                            child = _props3.children,
                            propsToPass = { isActive: self.currentTab == this.props.tab };


                        return self.currentTab == this.props.tab || this.props.renderInActiveTabs ? render ? render({ isActive: self.currentTab == this.props.tab }) : cloneElement(Children.only(child), propsToPass) : null;
                    }
                }]);

                return TabPane;
            }(Component);

            this.TabLink = TabLink;
            this.TabHeader = TabHeader;
            this.TabPane = TabPane;
        }
    }, {
        key: 'render',
        value: function render() {
            var renderTabs = this.props.children,
                TabLink = this.TabLink,
                TabHeader = this.TabHeader,
                TabPane = this.TabPane;


            return renderTabs({ TabLink: TabLink, TabHeader: TabHeader, TabPane: TabPane });
        }
    }, {
        key: 'currentTab',
        get: function get() {
            return this.isControlled ? this.props.tab : this.state.currentTab;
        }
    }]);

    return Tabs;
}(Component);

export default Tabs;