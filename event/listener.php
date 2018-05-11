<?php
/**
* phpBB Extension - marttiphpbb Keep Post
* @copyright (c) 2018 marttiphpbb <info@martti.be>
* @license GNU General Public License, version 2 (GPL-2.0)
*/

namespace marttiphpbb\keeppost\event;

use phpbb\event\data as event;
use marttiphpbb\keeppost\service\load;
use marttiphpbb\keeppost\util\cnst;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class listener implements EventSubscriberInterface
{
	/** @var load */
	private $load;

	/**
	 * @param load
	*/
	public function __construct(load $load)
	{
		$this->load = $load;
	}

	static public function getSubscribedEvents()
	{
		return [
			'core.twig_environment_render_template_before'
				=> 'core_twig_environment_render_template_before',
		];
	}

	public function core_twig_environment_render_template_before(event $event)
	{
		if (!$this->load->is_enabled())
		{
			return;
		}

		$context = $event['context'];
		$context['marttiphpbb_keeppost'] = $this->load->get_listener_data();
		$event['context'] = $context;
	}
}
