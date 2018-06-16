<?php
/**
* phpBB Extension - marttiphpbb Keep Post
* @copyright (c) 2018 marttiphpbb <info@martti.be>
* @license GNU General Public License, version 2 (GPL-2.0)
*/

namespace marttiphpbb\keeppost\event;

use phpbb\event\data as event;
use phpbb\template\template;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class listener implements EventSubscriberInterface
{
	private $template;

	public function __construct(template $template)
	{
		$this->template = $template;
	}

	static public function getSubscribedEvents()
	{
		return [
			'core.login_box_before'
				=> 'core_login_box_before',
		];
	}

	public function core_login_box_before(event $event)
	{
		$this->template->assign_var('S_MARTTIPHPBB_KEEPPOST_LOGIN', true);
	}
}
