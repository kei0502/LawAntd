import React from 'react';
import {Pagination, Form} from 'antd';
import SearchInput from './SearchInput';
require('../../css/web.css');
const PostList = React.createClass({
    getInitialState(){
        return {page: 1};
    },
    handlePageChange(page){
        this.setState({page: page});
    },
    handleSearch(text){
        this.setState({search: text});
    },
    render(){
        const posts = this.state.search ? this.props.posts.filter(post=>(post.title.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0)) : this.props.posts, page = this.state.page, sliced = posts.length <= page * 10 ? posts.slice((page - 1) * 10) : posts.slice((page - 1) * 10, page * 10);
        return (<div style={{marginTop:"1em"}}>
            <SearchInput style={{width:"30%", float:"right"}} onSearch={this.handleSearch}/>
            <ul className="post">
                {sliced.map(post=>(<li key={post._id}>
                    <a className="post-title" href={post.href}>{post.title}</a>
                    {this.props.showDate ? (<p className="post-date">发布日期：{post.date}</p>) : null}
                    <p className="post-description">
                        {post.text.length > 0 ? post.text[0] : ""}
                        <a className="post-link" href={post.href}>[继续阅读]</a>
                    </p>
                </li>))}
            </ul>
            <Pagination total={posts.length} onChange={this.handlePageChange}/>
        </div>);
    }
});
export default PostList;