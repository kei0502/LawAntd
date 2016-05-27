import React from 'react';
import {Input, Button} from 'antd';
import classNames from 'classnames';
const InputGroup = Input.Group;
require('../../css/web.css');
const SearchInput = React.createClass({
    getInitialState() {
        return {value: '', focus: false};
    },
    handleInputChange(e) {
        const value = e.target.value;
        this.setState({value: value}, this.handleSearch);
    },
    handleFocusBlur(e) {
        this.setState({focus: e.target === document.activeElement});
    },
    handleSearch() {
        if (this.props.onSearch) {
            this.props.onSearch(this.state.value.trim());
        }
    },
    render() {
        const {style, size, ...restProps} = this.props;
        const btnCls = classNames({'ant-search-btn': true, 'ant-search-btn-noempty': !!this.state.value.trim()});
        const searchCls = classNames({'ant-search-input': true, 'ant-search-input-focus': this.state.focus});
        return (<div className="ant-search-input-wrapper" style={style}>
            <InputGroup className={searchCls}>
                <Input {...restProps} value={this.state.value} onChange={this.handleInputChange} placeholder="搜索..."
                                      onFocus={this.handleFocusBlur} onBlur={this.handleFocusBlur}
                                      onPressEnter={this.handleSearch}/>
                <div className="ant-input-group-wrap">
                    <Button icon="search" className={btnCls} size={size} onClick={this.handleSearch}/>
                </div>
            </InputGroup>
        </div>);
    }
});
export default SearchInput;