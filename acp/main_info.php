<?php
/**
* phpBB Extension - marttiphpbb keeppost
* @copyright (c) 2018 marttiphpbb <info@martti.be>
* @license GNU General Public License, version 2 (GPL-2.0)
*/

namespace marttiphpbb\keeppost\acp;

use marttiphpbb\keeppost\util\cnst;

class main_info
{
	function module()
	{
		return [
			'filename'	=> '\marttiphpbb\keeppost\acp\main_module',
			'title'		=> cnst::L_ACP,
			'modes'		=> [			
				'settings'	=> [
					'title'	=> cnst::L_ACP . '_SETTINGS',
					'auth'	=> 'ext_marttiphpbb/keeppost && acl_a_board',
					'cat'	=> [cnst::L_ACP],
				],			
			],
		];
	}
}
