<?php get_header() ?>

	<div id="container">
		<div id="content">

			<h2 class="page-title"><?php _e( 'Tag Archives:', 'coloshades' ) ?> <span><?php single_tag_title() ?></span></h2>

			<div id="nav-above" class="navigation">
				<div class="nav-previous"><?php next_posts_link( __( '<span class="meta-nav">&larr;</span> Older posts', 'coloshades' ) ) ?></div>
				<div class="nav-next"><?php previous_posts_link( __( 'Newer posts <span class="meta-nav">&rarr;</span>', 'coloshades' ) ) ?></div>
			</div>

<?php while ( have_posts() ) : the_post() ?>

			<div id="post-<?php the_ID() ?>" class="<?php coloshades_post_class() ?>">
				<h3 class="entry-title"><a href="<?php the_permalink() ?>" title="<?php printf( __( 'Permalink to %s', 'coloshades' ), the_title_attribute('echo=0') ) ?>" rel="bookmark"><?php the_title() ?></a></h3>
				<div class="entry-date"><abbr class="published" title="<?php the_time('Y-m-d\TH:i:sO') ?>"><?php unset($previousday); printf( __( '%1$s &#8211; %2$s', 'coloshades' ), the_date( '', '', '', false ), get_the_time() ) ?></abbr></div>
				<div class="entry-content">
<?php the_excerpt(__( 'Read More <span class="meta-nav">&rarr;</span>', 'coloshades' )) ?>

				</div>
				<div class="entry-meta">
					<span class="author vcard"><?php printf( __( 'By %s', 'coloshades' ), '<a class="url fn n" href="' . get_author_link( false, $authordata->ID, $authordata->user_nicename ) . '" title="' . sprintf( __( 'View all posts by %s', 'coloshades' ), $authordata->display_name ) . '">' . get_the_author() . '</a>' ) ?></span>
					<span class="meta-sep">|</span>
					<span class="cat-links"><?php printf( __( 'Posted in %s', 'coloshades' ), get_the_category_list(', ') ) ?></span>
					<span class="meta-sep">|</span>
<?php if ( $tag_ur_it = coloshades_tag_ur_it(', ') ) : // Returns tags other than the one queried ?>
					<span class="tag-links"><?php printf( __( 'Also tagged %s', 'coloshades' ), $tag_ur_it ) ?></span>
					<span class="meta-sep">|</span>
<?php endif; ?>
<?php edit_post_link( __( 'Edit', 'coloshades' ), "\t\t\t\t\t<span class=\"edit-link\">", "</span>\n\t\t\t\t\t<span class=\"meta-sep\">|</span>\n" ) ?>
					<span class="comments-link"><?php comments_popup_link( __( 'Comments (0)', 'coloshades' ), __( 'Comments (1)', 'coloshades' ), __( 'Comments (%)', 'coloshades' ) ) ?></span>
				</div>
			</div><!-- .post -->

<?php endwhile; ?>

			<div id="nav-below" class="navigation">
				<div class="nav-previous"><?php next_posts_link( __( '<span class="meta-nav">&larr;</span> Older posts', 'coloshades' ) ) ?></div>
				<div class="nav-next"><?php previous_posts_link( __( 'Newer posts <span class="meta-nav">&rarr;</span>', 'coloshades' ) ) ?></div>
			</div>

		</div><!-- #content -->
	</div><!-- #container -->

<?php get_sidebar() ?>
<?php get_footer() ?>