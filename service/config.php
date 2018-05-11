<?php

/**
* phpBB Extension - marttiphpbb keeppost
* @copyright (c) 2018 marttiphpbb <info@martti.be>
* @license GNU General Public License, version 2 (GPL-2.0)
*/

namespace marttiphpbb\keeppost\service;

use marttiphpbb\keeppost\service\store;
use marttiphpbb\keeppost\util\cnst;

class config
{
	/** @var store */
	private $store;

	/**
	 * @param store
	 */
	public function __construct(
		store $store
	)
	{
		$this->store = $store;	
	}


}
