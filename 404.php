<?php get_header() ?>

	<div id="container">
		<div id="content">
		
			<div class="outer_content">
				<div class="content">

			<div id="post-0" class="post error404 not-found">
				<h2 class="entry-title"><?php _e( 'Not Found', 'colorshades' ) ?></h2>
				<div class="entry-content">
					<p><?php _e( 'Apologies, but we were unable to find what you were looking for. Perhaps  searching will help.', 'colorshades' ) ?></p>
				</div>
				<form id="searchform-404" class="blog-search" method="get" action="<?php bloginfo('home') ?>">
					<div>
						<input id="s-404" name="s" class="text" type="text" value="<?php the_search_query() ?>" size="40" />
						<input class="button" type="submit" value="<?php _e( 'Find', 'colorshades' ) ?>" />
					</div>
				</form>
			</div><!-- .post -->
			
				</div>
			</div>

		</div><!-- #content -->
	</div><!-- #container -->

<?php get_sidebar() ?>
<?php get_footer() ?>