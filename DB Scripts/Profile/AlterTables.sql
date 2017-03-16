USE [AltaPerspectiva]
GO
/*Virtual Stores*/
SET ANSI_NULLS ON
GO

DROP TABLE [Questions].[CategoryIcon]
Go


CREATE TABLE [Questions].[CategoryIcon](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[IconName] [varchar](250) NOT NULL,
	
)
insert into [Questions].[CategoryIcon](IconName) values('fa fa-music');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-search');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-envelope-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-heart');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-star');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-star-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-user');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-film');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-th-large');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-th');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-th-list');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-check');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-times');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-search-plus');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-search-minus');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-power-off');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-signal');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-cog');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-trash-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-home');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-file-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-clock-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-road');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-download');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-arrow-circle-o-down');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-arrow-circle-o-up');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-inbox');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-play-circle-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-repeat');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-refresh');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-list-alt');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-lock');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-flag');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-headphones');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-volume-off');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-volume-down');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-volume-up');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-qrcode');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-barcode');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-tag');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-tags');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-book');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-bookmark');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-print');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-camera');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-font');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-bold');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-italic');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-text-height');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-text-width');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-align-left');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-align-center');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-align-right');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-align-justify');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-list');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-outdent');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-indent');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-video-camera');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-picture-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-pencil');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-map-marker');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-adjust');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-tint');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-pencil-square-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-share-square-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-check-square-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-arrows');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-step-backward');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-fast-backward');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-backward');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-play');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-pause');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-stop');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-forward');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-fast-forward');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-step-forward');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-eject');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-chevron-left');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-chevron-right');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-plus-circle');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-minus-circle');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-times-circle');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-check-circle');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-question-circle');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-info-circle');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-crosshairs');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-times-circle-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-check-circle-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-ban');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-arrow-left');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-arrow-right');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-arrow-up');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-arrow-down');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-share');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-expand');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-compress');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-plus');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-minus');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-asterisk');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-exclamation-circle');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-gift');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-leaf');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-fire');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-eye');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-eye-slash');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-exclamation-triangle');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-plane');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-calendar');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-random');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-comment');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-magnet');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-chevron-up');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-chevron-down');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-retweet');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-shopping-cart');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-folder');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-folder-open');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-arrows-v');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-arrows-h');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-bar-chart');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-twitter-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-facebook-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-camera-retro');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-key');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-cogs');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-comments');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-thumbs-o-up');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-thumbs-o-down');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-star-half');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-heart-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-sign-out');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-linkedin-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-thumb-tack');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-external-link');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-sign-in');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-trophy');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-github-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-upload');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-lemon-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-phone');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-square-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-bookmark-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-phone-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-twitter');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-facebook');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-github');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-unlock');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-credit-card');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-rss');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-hdd-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-bullhorn');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-bell');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-certificate');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-hand-o-right');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-hand-o-left');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-hand-o-up');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-hand-o-down');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-arrow-circle-left');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-arrow-circle-right');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-arrow-circle-up');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-arrow-circle-down');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-globe');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-wrench');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-tasks');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-filter');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-briefcase');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-arrows-alt');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-users');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-link');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-cloud');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-flask');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-scissors');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-files-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-paperclip');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-floppy-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-bars');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-list-ul');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-list-ol');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-strikethrough');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-underline');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-table');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-magic');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-truck');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-pinterest');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-pinterest-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-google-plus-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-google-plus');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-money');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-caret-down');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-caret-up');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-caret-left');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-caret-right');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-columns');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-sort');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-sort-desc');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-sort-asc');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-envelope');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-linkedin');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-undo');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-gavel');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-tachometer');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-comment-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-comments-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-bolt');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-sitemap');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-umbrella');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-clipboard');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-lightbulb-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-exchange');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-cloud-download');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-cloud-upload');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-user-md');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-stethoscope');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-suitcase');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-bell-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-coffee');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-cutlery');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-file-text-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-building-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-hospital-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-ambulance');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-medkit');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-fighter-jet');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-beer');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-h-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-plus-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-angle-double-left');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-angle-double-right');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-angle-double-up');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-angle-double-down');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-angle-left');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-angle-right');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-angle-up');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-angle-down');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-desktop');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-laptop');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-tablet');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-mobile');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-circle-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-quote-left');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-quote-right');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-spinner');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-circle');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-reply');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-github-alt');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-folder-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-folder-open-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-smile-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-frown-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-meh-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-gamepad');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-keyboard-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-flag-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-flag-checkered');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-terminal');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-code');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-reply-all');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-star-half-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-location-arrow');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-crop');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-code-fork');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-chain-broken');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-question');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-info');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-exclamation');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-superscript');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-subscript');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-eraser');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-puzzle-piece');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-microphone');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-microphone-slash');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-shield');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-calendar-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-fire-extinguisher');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-rocket');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-maxcdn');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-chevron-circle-left');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-chevron-circle-right');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-chevron-circle-up');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-chevron-circle-down');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-html5');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-css3');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-anchor');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-unlock-alt');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-bullseye');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-ellipsis-h');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-ellipsis-v');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-rss-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-play-circle');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-ticket');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-minus-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-minus-square-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-level-up');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-level-down');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-check-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-pencil-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-external-link-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-share-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-compass');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-caret-square-o-down');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-caret-square-o-up');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-caret-square-o-right');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-eur');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-gbp');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-usd');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-inr');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-jpy');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-rub');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-krw');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-btc');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-file');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-file-text');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-sort-alpha-asc');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-sort-alpha-desc');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-sort-amount-asc');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-sort-amount-desc');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-sort-numeric-asc');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-sort-numeric-desc');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-thumbs-up');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-thumbs-down');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-youtube-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-youtube');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-xing');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-xing-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-youtube-play');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-dropbox');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-stack-overflow');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-instagram');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-flickr');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-adn');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-bitbucket');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-bitbucket-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-tumblr');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-tumblr-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-long-arrow-down');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-long-arrow-up');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-long-arrow-left');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-long-arrow-right');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-apple');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-windows');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-android');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-linux');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-dribbble');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-skype');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-foursquare');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-trello');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-female');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-male');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-gittip');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-sun-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-moon-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-archive');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-bug');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-vk');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-weibo');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-renren');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-pagelines');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-stack-exchange');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-arrow-circle-o-right');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-arrow-circle-o-left');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-caret-square-o-left');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-dot-circle-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-wheelchair');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-vimeo-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-try');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-plus-square-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-space-shuttle');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-slack');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-envelope-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-wordpress');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-openid');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-university');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-graduation-cap');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-yahoo');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-google');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-reddit');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-reddit-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-stumbleupon-circle');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-stumbleupon');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-delicious');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-digg');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-pied-piper');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-pied-piper-alt');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-drupal');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-joomla');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-language');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-fax');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-building');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-child');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-paw');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-spoon');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-cube');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-cubes');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-behance');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-behance-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-steam');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-steam-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-recycle');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-car');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-taxi');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-tree');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-spotify');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-deviantart');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-soundcloud');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-database');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-file-pdf-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-file-word-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-file-excel-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-file-powerpoint-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-file-image-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-file-archive-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-file-audio-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-file-video-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-file-code-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-vine');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-codepen');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-jsfiddle');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-life-ring');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-circle-o-notch');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-rebel');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-empire');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-git-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-git');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-hacker-news');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-tencent-weibo');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-qq');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-weixin');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-paper-plane');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-paper-plane-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-history');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-circle-thin');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-header');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-paragraph');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-sliders');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-share-alt');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-share-alt-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-bomb');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-futbol-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-tty');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-binoculars');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-plug');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-slideshare');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-twitch');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-yelp');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-newspaper-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-wifi');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-calculator');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-paypal');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-google-wallet');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-cc-visa');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-cc-mastercard');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-cc-discover');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-cc-amex');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-cc-paypal');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-cc-stripe');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-bell-slash');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-bell-slash-o');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-trash');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-copyright');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-at');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-eyedropper');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-paint-brush');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-birthday-cake');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-area-chart');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-pie-chart');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-line-chart');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-lastfm');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-lastfm-square');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-toggle-off');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-toggle-on');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-bicycle');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-bus');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-ioxhost');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-angellist');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-cc');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-ils');
insert into [Questions].[CategoryIcon](IconName) values('fa fa-meanpath');





--DROP TABLE [UserProfile].[VirtualStores];
GO
ALTER TABLE Questions.Answers ADD
	FirstImageUrl nvarchar(MAX) NULL
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [UserProfile].[VirtualStores](
	[Id] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[ScreenShotImage] [nvarchar](max) NULL,
	[FileName] [nvarchar](max) NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[Prize] [float] NOT NULL,
	[Title] [nvarchar](max) NULL,
 CONSTRAINT [PK_VirtualStores] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
GO

CREATE TABLE [UserProfile].[ProductComments](
	[Id] [uniqueidentifier] NOT NULL,
	[CommentText] [nvarchar](max) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime2](7) NULL,
	[DTS] [datetime2](7) NOT NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime2](7) NULL,
	[UserId] [uniqueidentifier] NOT NULL,
	[VirtualStoreId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_ProductComments] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

ALTER TABLE [UserProfile].[ProductComments]  WITH CHECK ADD  CONSTRAINT [FK_ProductComments_VirtualStores_VirtualStoreId] FOREIGN KEY([VirtualStoreId])
REFERENCES [UserProfile].[VirtualStores] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [UserProfile].[ProductComments] CHECK CONSTRAINT [FK_ProductComments_VirtualStores_VirtualStoreId]
GO
GO
ALTER TABLE UserProfile.Credentials ADD
	TwitterLink nvarchar(MAX) NULL
GO
GO
ALTER TABLE UserProfile.Credentials ADD
	FacebookLink nvarchar(MAX) NULL
GO
GO
ALTER TABLE UserProfile.Credentials ADD
	LinkedinLink nvarchar(MAX) NULL
GO

















GO
ALTER TABLE Questions.Questions 
ADD IsDirectQuestion bit NOT NULL CONSTRAINT DF_Questions_IsDirectQuestion DEFAULT (0)
GO
ALTER TABLE [Blog].[BlogComments]
DROP COLUMN CommentDate
GO
ALTER TABLE [Blog].Blogs
DROP COLUMN BlogName;

Go
ALTER TABLE [Blog].Blogs 
ADD Title nvarchar(MAX) null
GO
ALTER TABLE [Blog].Blogs 
ADD [Description] nvarchar(MAX) null

Go 
ALTER TABLE UserProfile.Educations
DROP COLUMN SchoolDegreeName,SchoolCompletionDate,CollegeName,CollegeDegree,CollegeCompletionDate,Certification,CertificationType
GO 
ALTER TABLE UserProfile.Educations
ADD [Concentration] nvarchar(MAX) null
GO
ALTER TABLE UserProfile.Educations
ADD SecondaryConcentration nvarchar(MAX) null
GO
ALTER TABLE UserProfile.Educations
ADD DegreeType nvarchar(MAX) null
GO
ALTER TABLE UserProfile.Educations
ADD GraduationYear datetime null
GO

ALTER TABLE UserProfile.Educations drop column GraduationYear
GO

ALTER TABLE UserProfile.Educations ADD 	GraduationYear int NULL
GO

GO

ALTER TABLE UserProfile.Employments drop column StartDate
GO

ALTER TABLE UserProfile.Employments ADD StartDate int NULL
GO
GO

ALTER TABLE UserProfile.Employments drop column EndDate
GO

ALTER TABLE UserProfile.Employments  ADD 	EndDate int NULL
GO
GO

ALTER TABLE UserProfile.Places drop column StartYear
GO

ALTER TABLE UserProfile.Places ADD StartYear int NULL
GO
GO

ALTER TABLE UserProfile.Places drop column EndYear
GO

ALTER TABLE UserProfile.Places  ADD EndYear int NULL
GO
ALTER TABLE Blog.Blogs ADD Title nvarchar(MAX) null
GO
GO
ALTER TABLE Blog.Blogs ADD Description nvarchar(MAX) null
GO
EXEC sp_RENAME '[UserProfile].[VirtualStores].[Prize]', 'Price', 'COLUMN'
GO
EXEC sp_RENAME '[UserProfile].[VirtualStores].[FileName]', 'ProductFileName', 'COLUMN'
GO
EXEC sp_RENAME '[UserProfile].[VirtualStores].[ScreenShotImage]', 'ScreenShotFileName', 'COLUMN'
GO

