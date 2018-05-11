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

	'ACP_MARTTIPHPBB_KEEPPOST_CONFIG_EXPLAIN'			
		=> 'This default configuration can be overwritten by the consuming extension. 
			See <a href="http://keeppost.net/doc/manual.html#config">
			Keep Post configuration</a> for the possible options.',
	'ACP_MARTTIPHPBB_KEEPPOST_VERSION'			=> '<a href="http://keeppost.net">Keep Post</a> version: %s',
	'ACP_MARTTIPHPBB_KEEPPOST_THEME'				=> 'Theme',
	'ACP_MARTTIPHPBB_KEEPPOST_THEME_EXPLAIN'		=> '"theme" set in the json configuration will overwrite this selection',
	'ACP_MARTTIPHPBB_KEEPPOST_MODE'				=> 'Mode',
	'ACP_MARTTIPHPBB_KEEPPOST_KEYMAP'				=> 'Key map',
	'ACP_MARTTIPHPBB_KEEPPOST_BORDER'				=> 'Add border',
//	'ACP_MARTTIPHPBB_KEEPPOST_IDENT'				=> 'Ident',
//	'ACP_MARTTIPHPBB_KEEPPOST_ENABLE_LINTING'		=> 'Enable linting',
	'ACP_MARTTIPHPBB_KEEPPOST_SETTING_SAVED'		=> 'The settings were saved.'
]);
