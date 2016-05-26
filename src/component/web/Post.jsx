import React from 'react';
require('../../css/web.css');
const Post = React.createClass({
    render(){
        let {title, date, text, imgs}=this.props.post, indexedImg = [], rendered = [];
        imgs.forEach(img=> {
            let index = img.place;
            if (index in indexedImg) {
                indexedImg[index].push(img);
            } else {
                indexedImg[index] = [img];
            }
        });
        text.forEach((content, index)=> {
            if (indexedImg[index]) {
                indexedImg[index].forEach((img, i)=> {
                    rendered.push(<img src={img.src} alt={img.src} key={'img_'+index+'_'+i} width="100%"/>);
                });
            }
            rendered.push(<p className="post-content" key={"p_"+index}>{content}</p>);
        });
        if (indexedImg[text.length]) {
            indexedImg[text.length].forEach((img, i)=> {
                rendered.push(<img src={img.src} alt={img.src} key={'img_'+text.length+'_'+i} width="100%"/>);
            });
        }
        return (<div className="post">
            <h1 className="post-title">{title}</h1>
            {this.props.showDate ? (<p className="post-date">发布日期：{date}</p>) : null}
            {rendered}
        </div>);
    }
});
export default Post;