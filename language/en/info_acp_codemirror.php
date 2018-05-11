<?php

/**
* phpBB Extension - marttiphpbb Keep Post
* @copyright (c) 2018 marttiphpbb <info@martti.be>
* @license GNU General Public License, version 2 (GPL-2.0)
*/

if (!defined('IN_PHPBB'))
{
	exit;
}

if (empty($lang) || !is_array($lang))
{
	$lang = [];
}

$lang = array_merge($lang, [

	'ACP_MARTTIPHPBB_KEEPPOST'			=> 'Keep Post',
	'ACP_MARTTIPHPBB_KEEPPOST_SETTINGS'	=> 'Settings',
	'ACP_MARTTIPHPBB_KEEPPOST_CONFIG'		=> 'Configuration',
]);
