<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes() ?>>
<head profile="http://gmpg.org/xfn/11">
	<title><?php wp_title( '-', true, 'right' ); echo wp_specialchars( get_bloginfo('name'), 1 ) ?></title>
	<meta http-equiv="content-type" content="<?php bloginfo('html_type') ?>; charset=<?php bloginfo('charset') ?>" />
	<link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url') ?>" />
<?php wp_head() // For plugins ?>
	<link rel="alternate" type="application/rss+xml" href="<?php bloginfo('rss2_url') ?>" title="<?php printf( __( '%s latest posts', 'coloshades' ), wp_specialchars( get_bloginfo('name'), 1 ) ) ?>" />
	<link rel="alternate" type="application/rss+xml" href="<?php bloginfo('comments_rss2_url') ?>" title="<?php printf( __( '%s latest comments', 'coloshades' ), wp_specialchars( get_bloginfo('name'), 1 ) ) ?>" />
	<link rel="pingback" href="<?php bloginfo('pingback_url') ?>" />
	
	<script src="<?php bloginfo( 'template_directory' ); ?>/js/colorshades-colors.js" type="text/javascript"></script>
    <script src="<?php bloginfo( 'template_directory' ); ?>/js/colorshades-compressed.js" type="text/javascript"></script>
    <!--[if lt IE 7]>
        <style type="text/css">
            div.post div.date {
                right: 600px;
            }
        </style>
    <![endif]-->
</head>

<body class="<?php coloshades_body_class() ?>">

<div id="swatch_container">
	<div onmouseout="stopScrolling();" onmouseover="scrollDivUp('swatches');" class="scroller">
		<img src="<?php bloginfo( 'template_directory' ); ?>/images/up.gif" alt="Scoll up" />
	</div>
	<div id="swatches">
		<div id="swatch_default" class="swatch_holder">
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
		</div>
		<div id="swatch_dolores" class="swatch_holder">
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
		</div>
		<div id="swatch_grannysmith" class="swatch_holder">
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
		</div>
		<div id="swatch_indian" class="swatch_holder">
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
		</div>
		<div id="swatch_jambajuice" class="swatch_holder">
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
		</div>
		<div id="swatch_sandstone" class="swatch_holder">
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
		</div>
		<div id="swatch_olive" class="swatch_holder">
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
		</div>
		<div id="swatch_coolrunnings" class="swatch_holder">
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
		</div>
		<div id="swatch_bw" class="swatch_holder">
			<div class="swatch"></div>
			<div class="swatch"></div>
		</div>
		<div id="swatch_neutralblue" class="swatch_holder">
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
		</div>
		<div id="swatch_bananaflambe" class="swatch_holder">
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
		</div>
		<div id="swatch_denim" class="swatch_holder">
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
		</div>
		<div id="swatch_winters-end" class="swatch_holder">
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
		</div>
		<div id="swatch_sumatra" class="swatch_holder">
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
			<div class="swatch"></div>
		</div>
	</div>
	<div onmouseout="stopScrolling();" onmouseover="scrollDivDown('swatches');" class="scroller">
		<img src="<?php bloginfo( 'template_directory' ); ?>/images/down.gif" alt="Scroll down" />
	</div>
</div>

<div id="wrapper" class="hfeed">

<div class="outer_content">
<div class="content">
	<div id="header">
		<h1 id="blog-title"><span><a href="<?php bloginfo('home') ?>/" title="<?php echo wp_specialchars( get_bloginfo('name'), 1 ) ?>" rel="home"><?php bloginfo('name') ?></a></span></h1>
		<div id="blog-description"><?php bloginfo('description') ?></div>
	</div><!--  #header -->

	<div id="access">
		<?php coloshades_globalnav() ?>
	</div><!-- #access -->
	
	<div style="clear:both;"></div>
</div>
</div>