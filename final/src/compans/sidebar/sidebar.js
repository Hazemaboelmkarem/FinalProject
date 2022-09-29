function Sidebar() {

	return (
		<div>
			<div className="wrapper clear">
				<div className="clear"></div>
				<div className="contentLeft"></div>
				<div className="sidebarRight">
					<div className="sidebar-widget">
						<h3>About us</h3>
						<div className="aboutMeWidget">
							<img src="images/ourlogo.png" alt="Francoise img" />
							<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
						</div>
					</div>
					<div className="sidebar-widget">
						<h3>follow me</h3>
						<div className="followMeSocialLinks">
							<a href="#"><i className="fa fa-instagram"></i></a>
							<span></span>
							<a href="#"><i className="fa fa-facebook"></i></a>
							<span></span>
							<a href="#"><i className="fa fa-twitter"></i></a>
							<span></span>
							<a href="#"><i className="fa fa-heart"></i></a>
							<span></span>
							<a href="#"><i className="fa fa-pinterest"></i></a>
							<span></span>
							<a href="#"><i className="fa fa-google-plus"></i></a>
						</div>
					</div>

					<div className="sidebar-widget">
						<h3>Recent post</h3>
						<div className="popularPostsWidget">
							<div className="popularPostsWidgetItem">
								<a href="#" className="popularPostsItemImg"><img src="images/content/popularPostImg.jpg" alt="Francoise img" /></a>
								<time datetime="2015-05-15">15.05.2015</time>
								<h4><a href="#">MY BEDSIDE TABLE: THE CURATOR</a></h4>
							</div>

						</div>
					</div>


				</div>
			</div>

		</div>
	)
}
export default Sidebar;