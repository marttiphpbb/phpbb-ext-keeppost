<?php
/**
* phpBB Extension - marttiphpbb keeppost
* @copyright (c) 2018 marttiphpbb <info@martti.be>
* @license GNU General Public License, version 2 (GPL-2.0)
*/

namespace marttiphpbb\keeppost;

use phpbb\extension\base;
use marttiphpbb\keeppost\service\store;

class ext extends base
{
	/**
	 * phpBB 3.2.x and PHP 7+
	 */
	public function is_enableable()
	{
		$config = $this->container->get('config');
		return phpbb_version_compare($config['version'], '3.2', '>=') && version_compare(PHP_VERSION, '7', '>=');
	}
}
