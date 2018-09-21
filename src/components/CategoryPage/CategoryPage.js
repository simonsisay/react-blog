import React from 'react'
import Blog from '../common/Blog'
import "./category.css"
import TrendingArticles from '../common/TrendingArticles'
import RecentArticles from '../common/RecentArticles'

const CategoryPage = () => {
	return(
		<div className="content">
			<div className="category-header sticky-top">
				<h2 className="h2-responsive category-name font-weight-bold">Design</h2>
				<button className="btn btn-sm btn-outline-green">Follow</button>
			</div>
			
			<TrendingArticles/>
			<RecentArticles />
		</div>
	)
}

export default CategoryPage