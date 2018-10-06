import React, { Component } from 'react'
import { Menu } from 'antd'


class CategoriesNav extends Component {
    render(){
       return (
    <Menu className="menu" mode='inline' >
        <Menu.Item className="nav-item">
           <a
              className="active" 
              href="/category/art">Art
            </a>
        </Menu.Item>
        <Menu.Item className="nav-item">
          <a 
              className="active" 
              href="/category/politics">Politics
            </a>
        </Menu.Item>
        <Menu.Item className="nav-item">
          <a 
              className="active" 
              href="/category/sport">Sport
            </a>
        </Menu.Item>

        <Menu.Item className="nav-item">
         <a 
            className="active" 
            href="/category/culture">Culture
          </a>
        </Menu.Item>
        <Menu.Item className="nav-item">
           <a
              className="active" 
              href="/category/music">Music
            </a>
        </Menu.Item>
          <Menu.Item className="nav-item tech-cat-nav">
             <a 
              className="active" 
              href="/category/technology">Technology
            </a>
        </Menu.Item>
    </Menu>
  )
    }
 }

 export default  CategoriesNav
